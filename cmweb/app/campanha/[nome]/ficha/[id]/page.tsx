"use client";

import { Ficha } from "@/models/ficha";
import Atributo from "@/app/Components/Atributo";
import ValorTesteAtributo from "@/app/Components/ValorTesteAtributo";
import TabelaMagias from "@/app/Components/TabelaMagias";
import TabelaArmas from "@/app/Components/TabelaArmas";
import TabelaItens from "@/app/Components/TabelaItens";
import TabelaEquipamentos from "@/app/Components/TabelaEquipamentos";
import TabelaEstados from "@/app/Components/TabelaEstados";
import TabelaTracos from "@/app/Components/TabelaTracos";
import ModalTestes from "@/app/Components/ModalTestes";
import { useEffect, useState } from "react";
import { Campanha, Find } from "@/models/campanha";
import { useRouter, useSearchParams } from "next/navigation";
import {io} from 'socket.io-client';
const socket = io("http://164.41.98.22:8080");

const FichaPagina = ({ params }: { params: { nome: string; id: string } }) => {
  const [ficha, setFicha] = useState<Ficha>();
  const [campanha, SetCampanha] = useState<Campanha>(new Campanha("", "", ""));
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const saveData = async (e:any) => {
    if (ficha){
      const response = await campanha.updateData();
      const {status, message} = await response.json();
      if (status == 200){
        alert("Ficha salva com sucesso!");
        socket.emit("update", (campanha));
      }
      else{
        alert("Erro ao salvar a ficha!" + message);
      }
    }    
  }

  useEffect(() => {
    socket.on('update', ({campanha}:any) => {
      SetCampanha(campanha);
    });
  }, [socket]);

  function returnCampanha(){
    const {nome} = params; 
    router.push(`/campanha/${nome}`);
  }

  useEffect(() => {
    if (!params.nome || !params.id) {
      alert("Essa Página não existe");
      return router.push("/");
    }
    async function verifyCampanha() {
      try {
        const query = await Find.findData(params.nome);
        const { camp } = query;
        SetCampanha(camp as Campanha);
        let fichaFound = null;
        if (typeParam == "npc") {
          fichaFound = camp?.fichas_NPC.find((ficha) => ficha._id == Number(params.id));
        } else {
          fichaFound = camp?.fichas.find((ficha) => ficha._id == Number(params.id));
        }
        if (!fichaFound) {
          alert("Ficha não encontrada");
          return router.push("/");
        }
        setFicha(fichaFound);
      } catch (error) {
        alert("Campanha não encontrada");
        return router.push("/");
      }
    }
    verifyCampanha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, params.nome]);
  if (!ficha)
    return (
      <div className="bg-gray-100 w-full h-screen flex align-center justify-center">
        <h1 className="text-4xl">Carregando ficha....</h1>
      </div>
    );
  return (
    <>
    <div className="bg-gray-100 p-4 bg-gray-800">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <button className="text-gray-600 font-semibold mr-4" onClick={returnCampanha}>Página Principal</button>
          <div className="flex space-between">
            
            <div className="ml-4">
              <p className="font-bold text-xl text-gray-400">{ficha.dados.nomeJogador}</p>
              <p className="font-bold text-xs text-gray-400"> {ficha.dados.nomeUsuario}</p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Dinheiro: </span>R$
                {ficha.Dinheiro},00
              </p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Peso: </span>
                {ficha.pesoCarregado}Kg
              </p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Armadura: </span>
                {ficha.PdA}
              </p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Vida: </span>
                {ficha.PV}/{ficha.PV_max()}
              </p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Energia: </span>
                {ficha.PE}/{ficha.PE_max()}
              </p>
              <p className="w-full text-sm text-gray-400">
                <span className="font-semibold text-xs uppercase text-gray-400">Experiência: </span>
                {ficha.Exp}
              </p>
            </div>
          </div>

          <ModalTestes ficha={ficha} campanha={campanha} socket={socket} />

          <div className="max-w-md mx-auto mt-8">
            <div className="mb-4 flex items-center">
              <div>
                <label className="text-gray-600 text-sm font-semibold mr-4">Capacidade:</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                  value={ficha.Capacidade()}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm font-semibold ml-4">
                  Capacidade em combate:
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                  value={ficha.CapacidadeCombate()}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-600 text-sm font-semibold mr-4">Raça:</label>
              <input
                type="text"
                className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                value={ficha.dados.raca}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-600 text-sm font-semibold mr-4">Profissão:</label>
              <input
                type="text"
                className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                value={ficha.dados.profissao}
              />
            </div>
            <div className="mb-4 flex items-center">
              <div>
                <label className="text-gray-600 text-sm font-semibold mr-4">Idade:</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                  value={ficha.dados.idade}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm font-semibold ml-4">Gênero:</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
                  value={ficha.dados.genero}
                />
              </div>
            </div>
          </div>


          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">Registro de ações:</label>
            <textarea
              readOnly
              className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
              value={ficha.registroAcoes.join('\n')}
              rows={9}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">Descrição:</label>
            <textarea
              readOnly
              className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
              value={ficha.dados.descricao}
              rows={9}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">História:</label>
            <textarea
              readOnly
              className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
              value={ficha.dados.historia}
              rows={9}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">Notas:</label>
            <textarea
              readOnly
              className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400"
              value={ficha.dados.notas}
              rows={9}
            />
          </div>

        </div>

        <div className="col-span-2">
          <div className="flex justify-around items-center w-full">
            <Atributo value={ficha.atributos.Vigor} label="Vigor" />
            <Atributo value={ficha.atributos.Habilidade} label="Habilidade" />
            <Atributo value={ficha.atributos.Percepcao} label="Percepção" />
            <Atributo value={ficha.atributos.Inteligencia} label="Inteligência" />
            <Atributo value={ficha.atributos.Dominio} label="Domínio" />
          </div>
          <div className="flex flex-wrap justify-around w-full mt-8">
            <ValorTesteAtributo value={ficha.Forca()} label="Força" />
            <ValorTesteAtributo value={ficha.Res_Fisica()} label="Res. Física" />
            <ValorTesteAtributo value={ficha.Res_Mental()} label="Res. Mental" />
            <ValorTesteAtributo value={ficha.Sobrevivencia()} label="Sobrevivência " />
            <ValorTesteAtributo value={ficha.Agilidade()} label="Agilidade " />
            <ValorTesteAtributo value={ficha.Destreza()} label="Destreza " />
            <ValorTesteAtributo value={ficha.Competencia()} label="Competência " />
            <ValorTesteAtributo value={ficha.Criatividade()} label="Criatividade " />
            <ValorTesteAtributo value={ficha.Manipulação()} label="Manipulação " />
            <ValorTesteAtributo value={ficha.Sorte()} label="Sorte " />
          </div>

          <TabelaMagias ficha={ficha}/>
          <TabelaArmas ficha={ficha} />
          <TabelaEquipamentos ficha={ficha} />
          <TabelaItens ficha={ficha} />
          <TabelaEstados ficha={ficha} />
          <TabelaTracos
            tracosNegativos={ficha.tracosNegativos}
            tracosPositivos={ficha.tracosPositivos}
          />          
        </div>
      </div>
      <button className="text-gray-600 text-sm font-semibold mr-4" onClick={saveData}>
          Salvar Ficha
      </button>
    </div>    
    </>
  );
};

export default FichaPagina;