"use client";

import { useFormik } from "formik";
import s from "./edit.module.css";
import { useEffect, useState } from "react";
import { TracosPositivos } from "../../../models/traco-positivo";
import { TracosNegativos } from "../../../models/traco-negativo";
import { Campanha, Find } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
export default function EditFicha() {
  const formik = useFormik({
    initialValues: {
      nomeUsuario: "",
      nomeJogador: "",
      raca: "",
      profissao: "",
      idade: "",
      genero: "",
      historia: "",
      descricao: "",
      notas: "",
      dinheiro: "",
      PdA: 0,
      PV: 0,
      PE: 0,
      Exp: 0,
      vigor: 0,
      habilidade: 0,
      perception: 0,
      qi: 0,
      dominio: 0,
    },
    onSubmit: async (values) => {
      try {
        const query = await Find.findData(55);
        const data = await query.json();
        const { status, message, result } = data;
        const campanha: Campanha = result[0];

        const dados = [
          values.nomeUsuario,
          values.nomeJogador,
          values.raca,
          values.profissao,
          values.idade,
          values.genero,
          values.historia,
          values.descricao,
        ];
        const recursos = [
          Number(values.PV),
          Number(values.PdA),
          Number(values.PE),
          Number(values.Exp),
          Number(values.dinheiro),
        ];
        const atributos = [
          values.vigor,
          values.habilidade,
          values.perception,
          values.qi,
          values.dominio,
        ];
        const ficha = new Ficha(false, dados, [values.notas], recursos, atributos);
        campanha.addFicha(ficha);
        await campanha.updateData();
      } catch (error) {
        return alert((error as Error)?.message);
      } finally {
      }
    },
  });

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h1 className="text-2xl font-semibold text-center mb-4">Ficha de personagem</h1>
      <form onSubmit={formik.handleSubmit} className="">
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
              value={formik.values.genero}
              onChange={formik.handleChange}
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
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
        <div className="grid mt-2 mb-4 grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <label htmlFor="PV">Pontos de vida</label>
            <input
              className={s.ficha_input}
              placeholder="Pontos de vida"
              min={0}
              value={formik.values.PV}
              onChange={formik.handleChange}
              name="PV"
              type="number"
              id="PV"
            />
          </div>
          <div>
            <label htmlFor="PdA">Pontos de Armadura</label>
            <input
              className={s.ficha_input}
              placeholder="Pontos de Armadura"
              type="number"
              min={0}
              value={formik.values.PdA}
              onChange={formik.handleChange}
              name="PdA"
              id="PdA"
            />
          </div>
          <div>
            <label htmlFor="PE">Pontos de energia</label>
            <input
              className={s.ficha_input}
              placeholder="Pontos de energia"
              type="number"
              min={0}
              value={formik.values.PE}
              onChange={formik.handleChange}
              name="PE"
              id="PE"
            />
          </div>
          <div>
            <label htmlFor="Exp">Pontos de Experiência</label>
            <input
              className={s.ficha_input}
              placeholder="Pontos de Experiência"
              type="number"
              min={0}
              value={formik.values.Exp}
              onChange={formik.handleChange}
              name="Exp"
              id="Exp"
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
          <TraitsForm isPositiveTrait={true} />
          <TraitsForm isPositiveTrait={false} />
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
const TraitsForm = ({ isPositiveTrait }: { isPositiveTrait: boolean }) => {
  let title = "Traços Negativos";
  if (isPositiveTrait) {
    title = "Traços Positivos";
  }
  type Trait = { label: string; title: string; value: number };
  const [traits, setTraits] = useState<Trait[]>([]);
  const [traitsOptions, setTraitsOptions] = useState<Trait[]>([]);
  const [selected, setSelected] = useState<string>("");

  function enumToKeyValueArray(e: any): Trait[] {
    return Object.keys(e).map((label) => ({ label, title: e[label], value: 0 }));
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
