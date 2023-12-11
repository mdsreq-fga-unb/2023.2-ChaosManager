"use client";

import { Field, useFormik } from "formik";
import s from "./edit.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TracosPositivos } from "../../../models/traco-positivo";
import { TracosNegativos } from "../../../models/traco-negativo";
import { Campanha, Find } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
type Trait = { label: string; title: string; value: number };
export default function EditFicha() {
  const [traitPositives, setTraitsPositives] = useState<Trait[]>([]);
  const [traitNegatives, setTraitsNegatives] = useState<Trait[]>([]);
  const [genderField, setGenderField] = useState<string>("Masculino");
  const [playerType, setPlayerType] = useState<string>("NPC");
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
      editMode: "Criar",
    },
    onSubmit: async (values) => {
      if (values.editMode == "Criar") {
        await createFicha(values);
      } else {
        await editFicha(values);
      }
    },
  });
  async function editFicha(values: any) {
    try {
      const campanha_name = "nome legal";
      const query = await Find.findData(campanha_name);
      const { status, message, camp, result } = query;
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
    } catch (error) {}
  }

  async function createFicha(values: any) {
    try {
      const campanha_name = "nome legal";
      const query = await Find.findData(campanha_name);
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
      const ficha = new Ficha(playerType == "JOGADOR");
      ficha.Dados(dados, [values.notas]);
      ficha.Atributos(atributos);
      ficha.Dinheiro = Number(values.dinheiro);
      let traitsError = false;

      traitPositives.forEach((trait) => {
        // @ts-ignore
        const response = ficha.addTracoPositivo(TracosPositivos[trait.label], trait.value);
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      traitNegatives.forEach((trait) => {
        // @ts-ignore
        const response = ficha.addTracoNegativo(TracosNegativos[trait.label], trait.value);
        if (response != "") {
          traitsError = true;
          alert(response);
        }
      });
      console.log(ficha);
      if (traitsError) return;
      if (ficha.tracosPositivos.length != ficha.tracosNegativos.length) {
        return alert("O personagem deve ter o mesmo número de traços positivos e negativos");
      }
      campanha.addFicha(ficha);
      await campanha.updateData();
      alert("Ficha criada com sucesso");
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
    }
  }
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h1 className="text-2xl font-semibold text-center mb-4">Ficha de personagem</h1>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="flex flex-col align-center justify-start mb-2">
          <h1>Escolha o tipo de ficha:</h1>
          <div className="flex align-center justify-center gap-4">
            <div>
              <input
                type="radio"
                id="jogador"
                name="playerType"
                checked={playerType == "jogador"}
                onChange={() => setPlayerType("jogador")}
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
              defaultValue="M"
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
            traits={traitPositives}
            setTraits={setTraitsPositives}
          />
          <TraitsForm
            isPositiveTrait={false}
            traits={traitNegatives}
            setTraits={setTraitsNegatives}
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
            Salvar Ficha
          </button>
        </div>
      </form>
    </div>
  );
}
const TraitsForm = ({
  isPositiveTrait,
  traits,
  setTraits,
}: {
  isPositiveTrait: boolean;
  traits: Trait[];
  setTraits: Dispatch<SetStateAction<Trait[]>>;
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
  function addLabelToTraits() {
    const trait = traitsOptions.find((trait) => trait.label === selected);
    const hasTrait = traits.find((trait) => trait.label === selected);
    if (trait && !hasTrait) {
      setTraits([...traits, trait]);
    }
  }
  function updateTraitValue(label: string, value: number) {
    const trait = traits.find((trait) => trait.label === label);
    if (trait) {
      trait.value = value;
    }
    setTraits([...traits]);
    console.log(traits);
  }
  function removeTrait(label: string) {
    setTraits(traits.filter((trait) => trait.label !== label));
  }
  useEffect(() => {
    if (isPositiveTrait) {
      setTraitsOptions(enumToKeyValueArray(TracosPositivos));
    } else {
      setTraitsOptions(enumToKeyValueArray(TracosNegativos));
    }
  }, [isPositiveTrait]);

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
          <option key={id} value={trait.label}>
            {trait.title}
          </option>
        ))}
      </select>
      <button onClick={addLabelToTraits} type="button">
        Adicionar
      </button>
      <ul>
        {traits.map((trait, id) => (
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
