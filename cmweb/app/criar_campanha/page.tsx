'use client'

import { criarCampanha } from "@/controller/campanhaCtrl";
import Button from "@/app/Components/Button";
import css from "@/app/criar_campanha/criar.module.css"

export default function CriarCampanha() {
  return (
    <div className={css.criar_campanha}>
      <form className={css.criar_campanha_form} action={criarCampanha}>
        <h1>Criar Sala de campanha</h1>
        <label htmlFor="nome">Nome</label>
        <input className="text-black" type="text" name="nome"/>
        <label htmlFor="historia">História</label>
        <textarea className="rounded-[5px] border h-auto border-gray-300 text-black" name="historia"></textarea>
        <label htmlFor="senha">Defina sua senha</label>
        <input className="text-black" type="text" name="senha_mestre"/>

        <Button classe="bg-green-600" valor="Criar" />
      </form>
    </div>
  );
}