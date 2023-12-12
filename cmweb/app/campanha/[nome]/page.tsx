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

  const addItemJogador = (lista: Ficha[], item: Ficha) => {
    setFichasJogador([...lista, item]);
  };
  /* 
   const updateItemJogador = (lista: Ficha[], index: number, item: Ficha) => {
    const newLista = [...lista];
    newLista[index] = item;
    setFichasJogador(newLista);
  };
   
   const deleteItemJogador = (lista: Ficha[], index: number) => {
    const newLista = [...lista];
    newLista.splice(index, 1);
    setFichasJogador(newLista);
  };
*/
  const addItemNpc = (lista: Ficha[], item: Ficha) => {
    setFichasNpc([...lista, item]);
  };
/*   
   const updateItemNpc = (lista: Ficha[], index: number, item: Ficha) => {
    const newLista = [...lista];
    newLista[index] = item;
    setFichasNpc(newLista);
  };
   YY
   const deleteItemNpc = (lista: Ficha[], index: number) => {
    const newLista = [...lista];
    newLista.splice(index, 1);
    setFichasNpc(newLista);
  };
  */
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
          <li key={index}><Link href={`/campanha/${params.nome}/ficha/${item._id}`}>{item.dados.nomeJogador}</Link></li>
        ))}
        </ul>
      </div>
      
      <div>
        <h2>NPC</h2>
        <ul>
        {fichasNpc.filter(ficha => ficha.NPC === true).map((item, index) => (
          <li key={index}><Link href={`/campanha/${params.nome}/ficha/${item._id}`}>{item.dados.nomeJogador}</Link></li>
        ))}
        </ul>
      </div>
      <button onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}>Criar Ficha</button>
      

    </div>
    </>
  );
}
