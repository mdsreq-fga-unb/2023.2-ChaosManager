'use client'
import { useRouter } from 'next/navigation'

export default function Jogador({ params }: { params: { nome: string } }) {
  const router = useRouter();
    return (
      <div>
        <h1>Sala do jogador</h1>
        <button onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}>Criar Ficha</button>
      </div>
    );
  }
  