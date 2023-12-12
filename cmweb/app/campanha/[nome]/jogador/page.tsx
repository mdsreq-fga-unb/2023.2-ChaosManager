'use client'
import { Campanha, Find } from '@/models/campanha';
import { Ficha } from '@/models/ficha';
import { useRouter, useSearchParams  } from 'next/navigation'
import { useState, useEffect } from 'react';

export default function Jogador({ params }: { params: { nome: string } }) {
  const [fichasJogador, setFichasJogador] = useState<Ficha[]>([]);

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
      setFichasJogador(camp.fichas);
      
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <div>
        <h1>Sala do jogador</h1>
        <button onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}>Criar Ficha</button>
        <div>
        <h2>Lista de fichas</h2>
        <ul>
        {fichasJogador.filter(ficha => ficha.NPC === false).map((item, index) => (
          <li key={index}>
            {item._id} - {item.dados.nomeJogador}
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
      </div>
    );
  }
  