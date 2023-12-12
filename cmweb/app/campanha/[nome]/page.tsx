'use client'
import { Campanha, Find } from '@/models/campanha';
import { Ficha } from '@/models/ficha';
import { useRouter, useSearchParams  } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react';


export default function CampanhaPage({ params }: { params: { nome: string, id: string  } }) {
  
  const [senhaMestre, setSenhaMestre] = useState('');
  const [senhaJogador, setSenhaJogador] = useState('');
  const [fichasJogador, setFichasJogador] = useState<Ficha[]>([]); 
  const [fichasNpc, setFichasNpc] = useState<Ficha[]>([]);
  const [ficha, setFicha] = useState<Ficha>();
  const [campanha, SetCampanha] = useState<Campanha | null>(null);

  useEffect(() => {
    dadosCampanha();
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  
  const dadosCampanha = async () => {
    try {
      const data = await Find.findData(params.nome);
      const { status, message, camp, result } = data;
      setSenhaMestre(camp.senha_mestre);
      setSenhaJogador(camp.senha_jogador);
      setFichasJogador(camp.fichas);
      setFichasNpc(camp.fichas_NPC);
      
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Sala de campanha</h1>
      <h2>Senhas</h2>
      <ul>
        <li>Senha do mestre: {senhaMestre}</li>
        <li>Senha do jogador: {senhaJogador}</li>
      </ul>

      <div>
        <h2>Jogadores</h2>
        <ul>
        {fichasJogador.filter(ficha => ficha.NPC === false).map((item, index) => (
          <li key={index}>{item._id} - {item.dados.nomeJogador}
            <div>
              <button onClick={() => {router.push(`/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=jogador`)}}>Editar Ficha</button>
            </div>
            <div>
              <button onClick={() => {router.push(`/campanha/${params.nome}/ficha/${item._id}?type=jogador`)}}>Acessar Ficha</button>
            </div>
          </li>
        ))}
        </ul>
      </div>
      
      <div>
        <h2>NPC</h2>
        <ul>
        {fichasNpc.filter(ficha => ficha.NPC === true).map((item, index) => (
          <li key={index}>{item._id} - {item.dados.nomeJogador}
            <div>
              <button onClick={() => {router.push(`/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=npc`)}}>Editar Ficha</button>
            </div>
            <div>
              <button onClick={() => {router.push(`/campanha/${params.nome}/ficha/${item._id}?type=npc`)}}>Acessar Ficha</button>
            </div>
          </li>
        ))}
        </ul>
      </div>
      <button onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}>Criar Ficha</button>
      

    </div>
  );
}
