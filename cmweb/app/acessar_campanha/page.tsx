import css from "@/app/acessar_campanha/acessar.module.css";
import { acessarCampanha } from "@/controller/campanhaCtrl";

export default function AcessarCampanha() {
  return (
    <div className={css.acessar_campanha}>
      <form className={css.acessar_campanha_form} action={acessarCampanha}>
        <h1>Acessar Sala de campanha</h1>
        <div>
          <div>
            <label htmlFor="nome">Nome</label>
            <input className="text-black" type="text" name="nome" id="nome" />
          </div>
          <div>
            <label htmlFor="senha">Código de acesso</label>
            <input className="text-black" type="text" name="senha" id="senha" />
          </div>
        </div>
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}