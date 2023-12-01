import Button from "@/app/Components/Button";
import css from "@/app/criar_campanha/criar.module.css"

export default function CriarCampanha({ params }: { params: { id: bigint } }) {
  return (
    <div className={css.criar_campanha}>
      <form className={css.criar_campanha_form} action="">
        <h1>Criar Sala de campanha</h1>
        <label htmlFor="nome">Nome</label>
        <input className="text-black" type="text" />
        <label htmlFor="historia">História</label>
        <div className="rounded-[5px] border h-auto border-gray-300 text-black" contentEditable="true"></div>

        <Button classe="bg-green-600" valor="Criar" />
      </form>
    </div>
  );
}
