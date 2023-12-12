'use client'
import { Campanha, Find } from '@/models/campanha';
import { Ficha } from '@/models/ficha';
import { useRouter, useSearchParams  } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Combat from '@/app/Components/Combate/Combat';
import {io} from 'socket.io-client';
const socket = io("http://localhost:3001");


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
      SetCampanha(camp);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {campanha && (
        <Combat campanha={campanha} socket={socket} />
      )}   
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
          <li key={index}><button onClick={() => {router.push(`/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=jogador`)}}>{item.dados.nomeJogador}</button></li>
        ))}
        </ul>
      </div>
      
      <div>
        <h2>NPC</h2>
        <ul>
        {fichasNpc.filter(ficha => ficha.NPC === true).map((item, index) => (
          <li key={index}><button onClick={() => {router.push(`/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=npc`)}}>{item.dados.nomeJogador}</button></li>
        ))}
        </ul>
      </div>
      <button onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}>Criar Ficha</button>
      

    </div>
  );
}
