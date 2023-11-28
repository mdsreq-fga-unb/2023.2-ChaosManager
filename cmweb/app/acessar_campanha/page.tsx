import css from "@/app/acessar_campanha/acessar.module.css";
import { Campanha } from "@/models/campanha";

export default function AcessarCampanha({ params }: { params: { id: bigint } }) {
  let listaDeCampanhas: Campanha[] = [];
  listaDeCampanhas.push({
    nome: "Campanha 1",
    historia: "Historia da ordem e do caos",
    senha_mestre: "",
    senha_jogador: "",
    fichas: undefined,
    fichas_NPC: undefined,
  });

  listaDeCampanhas.push(
    new Campanha({
      nome: "Campanha 2",
      historia: "",
      senha_mestre: "",
    })
  );
  console.log(listaDeCampanhas);

  return (
    <div className={css.acessar_campanha}>
      <form className={css.acessar_campanha_form} action="">
        <h1>Acessar Sala de campanha</h1>
        <div>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
          </div>
          <div>
            <label htmlFor="senha">Código de acesso</label>
            <input type="text" name="senha" id="senha" />
          </div>
        </div>
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
