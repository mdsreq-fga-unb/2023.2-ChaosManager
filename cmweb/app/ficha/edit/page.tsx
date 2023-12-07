"use client";

import { useFormik } from "formik";
import s from "./edit.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
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
    },
    onSubmit: async (values) => {
      try {
        const ficha = await axios.post("/api/campanhas/609587/ficha", {
          body: values,
        });
        router.push(`/ficha/${ficha.data.body._id}`);
      } catch (error) {
        return alert((error as Error)?.message);
      } finally {
      }
    },
  });
  const router = useRouter();

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h1 className="text-2xl font-semibold text-center mb-4">Ficha de personagem</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
          >
            Salvar Ficha
          </button>
        </div>
      </form>
    </div>
  );
}
