'use client'
import { useState } from 'react';
import { Campanha, Find } from '@/models/campanha';
import css from "@/app/acessar_campanha/acessar.module.css";
import { useRouter } from 'next/navigation'


export default function AcessarCampanhaPage() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState('');
  const [campanhaData, setCampanhaData] = useState(null);
  const router = useRouter();
  let campanha: Campanha;

  const acessarCampanha = async () => {
    try {
      const data = await Find.findData(nome);
      const { status, message, camp, result } = data;

      if (camp.senha_jogador === senha){
        router.push(`/campanha/${camp._id}/jogador`);
      } else if (camp.senha_mestre === senha) {
        router.push(`/campanha/${camp._id}`);
      } else {
        setResultado('Senha inválida, digite novamente!');
      }

      setResultado(message);
    } catch (error) {
      setResultado('Erro ao buscar os dados da campanha');
    }
  }

  return (
    <div className={css.acessar_campanha}>
      <form className={css.acessar_campanha_form} action={acessarCampanha}>
        <h1>Acessar Sala de campanha</h1>
        <div>
          <div>
            <label htmlFor="nome">Nome</label>
            <input className="text-black" type="text" name={nome}  onChange={(e) => setNome(e.target.value)} id="nome" />
          </div>
          <div>
            <label htmlFor="senha">Código de acesso</label>
            <input className="text-black" type="text" name={senha}  onChange={(e) => setSenha(e.target.value)} id="senha" />
          </div>
        </div>
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}