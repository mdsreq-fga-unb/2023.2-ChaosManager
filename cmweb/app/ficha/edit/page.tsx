import s from "./edit.module.css";
export default function EditFicha() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <h1 className="text-2xl font-semibold text-center mb-4">Ficha de personagem</h1>
      <form action="" className="space-y-4">
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
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="" htmlFor="age">
              Idade
            </label>
            <input className={s.ficha_input} placeholder="Idade" type="text" id="age" />
          </div>

          <div>
            <label className="" htmlFor="gender">
              Genero
            </label>

            <select defaultValue="M" className={s.ficha_input}>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>
        </div>{" "}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="" htmlFor="race">
              Raça
            </label>
            <input className={s.ficha_input} placeholder="Raça" type="text" id="race" />
          </div>

          <div>
            <label className="" htmlFor="ocupation">
              Profissão
            </label>
            <input className={s.ficha_input} placeholder="Profissão" type="text" id="ocupation" />
          </div>
          <div>
            <label className="" htmlFor="money">
              Dinheiro
            </label>
            <input className={s.ficha_input} placeholder="Dinheiro" type="text" id="money" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <label htmlFor="PV">Pontos de vida</label>
            <input
              className={s.ficha_input}
              placeholder="Pontos de vida"
              min={0}
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
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
