"use client";

import { useFormik } from "formik";
import s from "./edit.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TracoPositivo, TracosPositivos } from "@/models/traco-positivo";
import { TracoNegativo, TracosNegativos } from "@/models/traco-negativo";
import { Campanha, Find } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
import { useRouter } from "next/navigation";

type Trait = { label: string; title: string; value: number };
export default function EditFicha({ params }: { params: { nome: string } }) {
  const [traitPositives, setTraitsPositives] = useState<Trait[]>([]);
  const [traitNegatives, setTraitsNegatives] = useState<Trait[]>([]);
  const [genderField, setGenderField] = useState<string>("Masculino");
  const [playerType, setPlayerType] = useState<"NPC" | "Jogador">("Jogador");
  const [editMode, setEditMode] = useState<"Criar" | "Editar">("Criar");
  const [ficha, setFicha] = useState<Ficha | null>(null);
  const [campanha, SetCampanha] = useState<Campanha | null>(null);
  const searchParams = useSearchParams();
  const fichaId = searchParams.get("fichaId");
  const router = useRouter();
  const LoadFicha = async () => {
    try {
      const fichaFound = campanha?.fichas.find((ficha) => ficha._id == Number(fichaId));

      if (fichaFound) {
        setFicha(fichaFound);
        setGenderField(fichaFound.dados.genero);
        setPlayerType(fichaFound.NPC ? "NPC" : "Jogador");
        if (formik.values.nomeJogador == "") {
          formik.setValues({
            nomeUsuario: fichaFound.dados.nomeUsuario,
            nomeJogador: fichaFound.dados.nomeJogador,
            raca: fichaFound.dados.raca,
            profissao: fichaFound.dados.profissao,
            idade: fichaFound.dados.idade,
            genero: fichaFound.dados.genero,
            historia: fichaFound.dados.historia,
            descricao: fichaFound.dados.descricao,
            notas: fichaFound.dados.notas[0],
            dinheiro: String(fichaFound.Dinheiro),
            vigor: fichaFound.atributos.Vigor,
            habilidade: fichaFound.atributos.Habilidade,
            perception: fichaFound.atributos.Percepcao,
            qi: fichaFound.atributos.Inteligencia,
            dominio: fichaFound.atributos.Dominio,
          });
        }
      } else {
        alert("Ficha não encontrada");
      }
    } catch (error) {
      alert((error as Error)?.message);
    }
  };

  useEffect(() => {
    if (!params.nome) {
      alert("Essa Página não existe");
      return router.push("/");
    }
    async function verifyCampanha() {
      try {
        const query = await Find.findData(params.nome);
        const { camp } = query;
        SetCampanha(camp as Campanha);
        console.log("Campanha encontrada: ", camp);
      } catch (error) {
        alert("Campanha não encontrada");
        return router.push("/");
      }
    }
    verifyCampanha();
    if (fichaId) {
      setEditMode("Editar");
      LoadFicha();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fichaId, params.nome]);

  const formik = useFormik({
    initialValues: {
      nomeUsuario: "",
      nomeJogador: "",
      raca: "",
      profissao: "",
      idade: "",
      genero: "Masculino",
      historia: "",
      descricao: "",
      notas: "",
      dinheiro: "",
      vigor: 0,
      habilidade: 0,
      perception: 0,
      qi: 0,
      dominio: 0,
    },
    onSubmit: async (values) => {
      if (editMode == "Criar") {
        await createFicha(values);
      } else {
        await editFicha(values);
      }
    },
  });
  async function editFicha(values: any) {
    try {
      const dados = [
        values.nomeUsuario,
        values.nomeJogador,
        values.raca,
        values.profissao,
        values.idade,
        genderField,
        values.historia,
        values.descricao,
      ];
      const atributos = [
        values.vigor,
        values.habilidade,
        values.perception,
        values.qi,
        values.dominio,
      ];
      const campanhaToEdit = campanha as Campanha;
      const fichaToEditId = campanhaToEdit?.fichas.findIndex(
        (ficha) => ficha._id == Number(fichaId)
      );
      if (fichaToEditId == undefined || fichaToEditId == null)
        return alert("Ficha não encontrada p/ edição" + fichaToEditId + "\nid:" + fichaId);
      campanhaToEdit.fichas[fichaToEditId].Dados(dados, [values.notas]);
      campanhaToEdit.fichas[fichaToEditId].Atributos(atributos);
      campanhaToEdit.fichas[fichaToEditId].Dinheiro = Number(values.dinheiro);
      let traitsError = false;

      traitPositives.forEach((trait) => {
        const response = campanhaToEdit.fichas[fichaToEditId].addTracoPositivo(
          // @ts-ignore
          TracosPositivos[trait.label],
          trait.value
        );
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      traitNegatives.forEach((trait) => {
        const response = campanhaToEdit.fichas[fichaToEditId].addTracoNegativo(
          // @ts-ignore
          TracosNegativos[trait.label],
          trait.value
        );
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      if (traitsError) return;
      if (
        campanhaToEdit.fichas[fichaToEditId].tracosPositivos.length !=
        campanhaToEdit.fichas[fichaToEditId].tracosNegativos.length
      ) {
        return alert("O personagem deve ter o mesmo número de traços positivos e negativos");
      }
      await campanhaToEdit.updateData();
      alert("Ficha editada com sucesso");
    } catch (error) {}
  }

  async function createFicha(values: any) {
    try {
      const query = await Find.findData(params.nome);
      const { status, message, camp, result } = await query;

      let campanha: Campanha = camp as Campanha;
      const dados = [
        values.nomeUsuario,
        values.nomeJogador,
        values.raca,
        values.profissao,
        values.idade,
        genderField,
        values.historia,
        values.descricao,
      ];
      const atributos = [
        values.vigor,
        values.habilidade,
        values.perception,
        values.qi,
        values.dominio,
      ];
      const novaFicha = new Ficha(playerType == "NPC");
      novaFicha.Dados(dados, [values.notas]);
      novaFicha.Atributos(atributos);
      novaFicha.Dinheiro = Number(values.dinheiro);
      let traitsError = false;

      traitPositives.forEach((trait) => {
        // @ts-ignore
        const response = novaFicha.addTracoPositivo(TracosPositivos[trait.label], trait.value);
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      traitNegatives.forEach((trait) => {
        // @ts-ignore
        const response = novaFicha.addTracoNegativo(TracosNegativos[trait.label], trait.value);
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      if (traitsError) return;
      if (novaFicha.tracosPositivos.length != novaFicha.tracosNegativos.length) {
        return alert("O personagem deve ter o mesmo número de traços positivos e negativos");
      }
      campanha.addFicha(novaFicha);
      await campanha.updateData();
      alert("Ficha criada com sucesso");
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
    }
  }
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h1 className="text-2xl font-semibold text-center mb-4">
        {editMode == "Criar" ? "Criar " : "Editar "}ficha de personagem
      </h1>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="flex flex-col align-center justify-start mb-2">
          <h1>Escolha o tipo de ficha:</h1>
          <div className="flex align-center justify-start gap-4">
            <div>
              <input
                type="radio"
                id="jogador"
                name="playerType"
                checked={playerType == "Jogador"}
                onChange={() => setPlayerType("Jogador")}
                className="mr-2"
              />
              <label htmlFor="jogador">Ficha de JOGADOR</label>
            </div>
            <div>
              <input
                type="radio"
                id="npc"
                name="playerType"
                checked={playerType == "NPC"}
                onChange={() => setPlayerType("NPC")}
                className="mr-2"
              />
              <label htmlFor="npc">Ficha de NPC</label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="" htmlFor="username">
              Nome do usuário
            </label>
            <input
              className={s.ficha_input}
              placeholder="Nome do usuário"
              type="text"
              id="username"
              name="nomeUsuario"
              value={formik.values.nomeUsuario}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="nickname">
              Nome do personagem
            </label>
            <input
              className={s.ficha_input}
              placeholder="Nome do personagem"
              type="text"
              id="nickname"
              name="nomeJogador"
              value={formik.values.nomeJogador}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="" htmlFor="age">
              Idade
            </label>
            <input
              className={s.ficha_input}
              placeholder="Idade"
              type="text"
              id="age"
              name="idade"
              value={formik.values.idade}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="gender">
              Genero
            </label>

            <select
              className={s.ficha_input}
              name="genero"
              value={genderField}
              onChange={(e) => setGenderField(e.target.value)}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <div className="mt-4 mb-4  grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="" htmlFor="race">
              Raça
            </label>
            <input
              className={s.ficha_input}
              placeholder="Raça"
              type="text"
              id="race"
              name="raca"
              value={formik.values.raca}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="ocupation">
              Profissão
            </label>
            <input
              className={s.ficha_input}
              placeholder="Profissão"
              type="text"
              id="ocupation"
              name="profissao"
              value={formik.values.profissao}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="" htmlFor="money">
              Dinheiro
            </label>
            <input
              className={s.ficha_input}
              placeholder="Dinheiro"
              type="text"
              id="money"
              name="dinheiro"
              value={formik.values.dinheiro}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className={s.ficha_separador}>
          <h1>Pontos de personagem:</h1>
        </div>
        <div className="grid mt-2 mb-4 grid-cols-1 gap-4 sm:grid-cols-5">
          <div>
            <label htmlFor="Exp">Vigor</label>
            <input
              className={s.ficha_input}
              placeholder="Vigor"
              type="number"
              min={0}
              value={formik.values.vigor}
              onChange={formik.handleChange}
              name="vigor"
              id="vigor"
            />
          </div>
          <div>
            <label htmlFor="Exp">Habilidade</label>
            <input
              className={s.ficha_input}
              placeholder="Habilidade"
              type="number"
              min={0}
              value={formik.values.habilidade}
              onChange={formik.handleChange}
              name="habilidade"
              id="habilidade"
            />
          </div>
          <div>
            <label htmlFor="Exp">Percepção</label>
            <input
              className={s.ficha_input}
              placeholder="Percepção"
              type="number"
              min={0}
              value={formik.values.perception}
              onChange={formik.handleChange}
              name="perception"
              id="perception"
            />
          </div>
          <div>
            <label htmlFor="Exp">Inteligência</label>
            <input
              className={s.ficha_input}
              placeholder="Inteligência"
              type="number"
              min={0}
              value={formik.values.qi}
              onChange={formik.handleChange}
              name="qi"
              id="qi"
            />
          </div>
          <div>
            <label htmlFor="Exp">Domínio</label>
            <input
              className={s.ficha_input}
              placeholder="Domínio"
              type="number"
              min={0}
              value={formik.values.dominio}
              onChange={formik.handleChange}
              name="dominio"
              id="dominio"
            />
          </div>
        </div>
        <div className={s.ficha_separador}>
          <h1>Traços de personagem:</h1>
        </div>
        <div className="grid mt-2 mb-4 grid-cols-1 gap-4 sm:grid-cols-2">
          <TraitsForm
            isPositiveTrait={true}
            traitsSelected={traitPositives}
            setTraitsSelected={setTraitsPositives}
            traitsDefault={ficha ? ficha.tracosPositivos : []}
          />
          <TraitsForm
            isPositiveTrait={false}
            traitsSelected={traitNegatives}
            setTraitsSelected={setTraitsNegatives}
            traitsDefault={ficha ? ficha.tracosNegativos : []}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="" htmlFor="background">
              História
            </label>

            <textarea
              className={s.ficha_textarea}
              placeholder="História"
              rows={8}
              value={formik.values.historia}
              onChange={formik.handleChange}
              name="historia"
              id="background"
            ></textarea>
          </div>
          <div>
            <label className="" htmlFor="description">
              Descrição Física
            </label>

            <textarea
              className={s.ficha_textarea}
              placeholder="Descrição Física"
              rows={8}
              value={formik.values.descricao}
              onChange={formik.handleChange}
              name="descricao"
              id="description"
            ></textarea>
          </div>
          <div>
            <label className="" htmlFor="notes">
              Notas
            </label>

            <textarea
              className={s.ficha_textarea}
              placeholder="Notas"
              rows={8}
              value={formik.values.notas}
              onChange={formik.handleChange}
              name="notas"
              id="notes"
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full h-4xl rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-full hover:bg-gray-700"
          >
            {editMode == "Criar" ? "Criar " : "Editar "} Ficha
          </button>
        </div>
      </form>
    </div>
  );
}
const TraitsForm = ({
  isPositiveTrait,
  traitsSelected,
  setTraitsSelected,
  traitsDefault = [],
}: {
  isPositiveTrait: boolean;
  traitsSelected: Trait[];
  setTraitsSelected: Dispatch<SetStateAction<Trait[]>>;
  traitsDefault: TracoPositivo[] | TracoNegativo[];
}) => {
  let title = "Traços Negativos";
  if (isPositiveTrait) {
    title = "Traços Positivos";
  }
  const [traitsOptions, setTraitsOptions] = useState<Trait[]>([]);
  const [selected, setSelected] = useState<string>("");

  function enumToKeyValueArray(e: any): Trait[] {
    return Object.keys(e).map((label) => ({ label, title: e[label], value: 1 }));
  }

  function addTrait(value = 1) {
    const trait = traitsOptions.find((trait) => trait.title === selected);
    const isRepeated = traitsSelected.find((trait) => trait.title === selected);
    if (trait && !isRepeated) {
      setTraitsSelected([
        ...traitsSelected,
        { label: trait.label, title: trait.title, value: value },
      ]);
    }
  }

  function updateTraitValue(label: string, value: number) {
    const trait = traitsSelected.find((trait) => trait.label === label);
    if (trait) {
      trait.value = value;
    }
    setTraitsSelected([...traitsSelected]);
  }

  function removeTrait(label: string) {
    setTraitsSelected(traitsSelected.filter((trait) => trait.label !== label));
  }

  useEffect(() => {
    if (isPositiveTrait) {
      setTraitsOptions(enumToKeyValueArray(TracosPositivos));
    } else {
      setTraitsOptions(enumToKeyValueArray(TracosNegativos));
    }
    traitsDefault.forEach((trait: any) => {
      setSelected(trait.traco);
      addTrait(trait.valor);
    });
  }, [isPositiveTrait, traitsDefault]);

  return (
    <div className={s.ficha_traits}>
      <label>{title}:</label>
      <select
        id={`ficha_${isPositiveTrait}`}
        className={s.ficha_input}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {traitsOptions.map((trait, id) => (
          <option key={id} value={trait.title}>
            {trait.title}
          </option>
        ))}
      </select>
      <button onClick={() => addTrait()} type="button">
        Adicionar
      </button>
      <ul>
        {traitsSelected.map((trait, id) => (
          <li key={id}>
            <h1>{trait.title}</h1>{" "}
            <input
              type="number"
              value={trait.value}
              min={1}
              onChange={(e) => updateTraitValue(trait.label, e.target.valueAsNumber)}
            ></input>
            <button type="button" onClick={() => removeTrait(trait.label)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
