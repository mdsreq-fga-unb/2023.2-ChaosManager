"use client";
import { Campanha, Find } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CampanhaPage({ params }: { params: { nome: string; id: string } }) {
  const [senhaMestre, setSenhaMestre] = useState("");
  const [senhaJogador, setSenhaJogador] = useState("");
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
      SetCampanha(camp as Campanha);
      setSenhaMestre(camp.senha_mestre);
      setSenhaJogador(camp.senha_jogador);
      setFichasJogador(camp.fichas);
      setFichasNpc(camp.fichas_NPC);
    } catch (error) {
      console.log(error);
    }
  };
  if (!campanha)
    return (
      <div className="bg-gray-100 w-full h-screen flex align-center justify-center">
        <h1 className="text-4xl">Carregando Campanha...</h1>
      </div>
    );
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <label className="mb-0">Sala de campanha:</label>
      <h1 className="text-4xl">{campanha.nome}</h1>
      <button
        onClick={() => router.push(`/campanha/${params.nome}/ficha/edit`)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Criar nova Ficha de personagem
      </button>
      <div className="flex gap-4 mt-12">
        <div className="flex flex-col align-center justify-center px-4 py-4 rounded-lg h-fit bg-slate-300">
          <h2 className="text-center text-bold text-xl">Dados da campanha</h2>
          <ul>
            <li>Historia: {campanha.historia}</li>
            <li>Senha do mestre: {campanha.senha_mestre}</li>
            <li>Senha do jogador: {campanha.senha_jogador}</li>
          </ul>
        </div>

        <div className="flex flex-col align-center justify-center px-4 py-4 rounded-lg h-fit bg-slate-300">
          <h2 className="text-center text-bold text-xl">Jogadores</h2>
          <ul className="max-w-7xl">
            {fichasJogador
              .filter((ficha) => ficha.NPC === false)
              .map((item, index) => (
                <li key={index} className="flex gap-2 mt-2 align-center justify-start">
                  {item._id} - {item.dados.nomeJogador}
                  <div>
                    <button
                      onClick={() => {
                        router.push(
                          `/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=jogador`
                        );
                      }}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Editar Ficha
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        router.push(`/campanha/${params.nome}/ficha/${item._id}?type=jogador`);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Acessar Ficha
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col align-center justify-center px-4 py-4 rounded-lg h-fit bg-slate-300">
          <h2>NPC</h2>
          <ul>
            {fichasNpc
              .filter((ficha) => ficha.NPC === true)
              .map((item, index) => (
                <li key={index} className="flex gap-2 mt-2 align-center justify-start">
                  {item._id} - {item.dados.nomeJogador}
                  <div>
                    <button
                      onClick={() => {
                        router.push(
                          `/campanha/${params.nome}/ficha/edit?fichaId=${item._id}&type=npc`
                        );
                      }}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Editar Ficha
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        router.push(`/campanha/${params.nome}/ficha/${item._id}?type=npc`);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Acessar Ficha
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
