"use client";

import Image from "next/image";
import BarrasVidaEnergiaArmadura from "../../Components/BarrasVidaEnergiaArmadura";
import Atributo from "../../Components/Atributo";
import ValorTesteAtributo from "../../Components/ValorTesteAtributo";
import TabelaMagias from "../../Components/TabelaMagias";
import { Ficha } from "@/models/ficha";
import { Classes } from "@/models/item-magia";
import TabelaArmas from "../../Components/TabelaArmas";
import { ArmasExistentes } from "@/models/arma";
import TabelaItens from "../../Components/TabelaItens";
import { EquipamentosExistentes } from "@/models/equipamento";
import TabelaEquipamentos from "../../Components/TabelaEquipamentos";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

// Crie uma Ficha
/*
const ficha = new Ficha(false);
ficha.Dados(
  ["l-ricardo", "Echolon", "Alteriano", "Mercenario", "580", "M", "muito triste", "sim"],
  ["Nota1", "Nota2"]
);
ficha.Recursos([100, 50, 30, 0, 1000]);
ficha.Atributos([10, 15, 12, 18, 20]);
ficha.addEquipamento("Poção de Cura", 20, 6);
ficha.addItem("Chave", 1);
ficha.alterarQtd(0, 10); // ToDo: Sobrecarga do contrutor pra adicionar ja uma certa quntidade de items de uma vez
ficha.addMagia("Magia Poderosa", Classes.Abjuracao); // TODO: Esse metodo aqui nn ta muito bom nao (ainda pensando)
ficha.addMagia("Magia Doida", Classes.Abjuracao);
ficha.addArmaExistente(ArmasExistentes.Espada);
ficha.addArmaExistente(ArmasExistentes.Besta);
ficha.addArmaExistente(ArmasExistentes.Chicote);
ficha.addEquipamentoExistente(EquipamentosExistentes.ArmCavaleiro);
*/
export default function FichaPagina({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const fichaId = searchParams.get("id");
  const [ficha, setFicha] = useState<Ficha>(null);
  const fetchFicha = async () => {
    try {
      const response = await axios.get(`/api/campanhas/609587/ficha/${params.id}`);
      setFicha(response.data.ficha);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFicha();
  });
  return (
    <div className="bg-gray-100 p-4 dark:bg-gray-800">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="flex items-center justify-center">
            {/* TODO: Foto ainda nn funciona */}
            <Image
              className="w-32 h-32 rounded-full object-cover"
              src="/provisorioFoto.jpg"
              alt="Foto de Perfil"
              width={128}
              height={128}
            />
            <div className="ml-4">
              <p className="font-bold text-xl">{ficha.nomeJogador}</p>
              <p className="font-bold text-xs"> {ficha.nomeUsuario}</p>
              <p>
                <span className="font-semibold">Dinheiro: </span> {ficha.Dinheiro}
              </p>
              <p>
                <span className="font-semibold">Peso: </span>
                {ficha.pesoCarregado}{" "}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <BarrasVidaEnergiaArmadura value={ficha.PV} />
            <BarrasVidaEnergiaArmadura value={ficha.PE} />
            <BarrasVidaEnergiaArmadura value={ficha.PdA} />
          </div>

          <div className="max-w-md mx-auto mt-8">
            <div className="mb-4 flex items-center">
              <label className="text-gray-600 text-sm font-semibold mr-4">Cap.:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.Capacidade()}
              />

              <label className="text-gray-600 text-sm font-semibold ml-4">Cap. em combate:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.CapacidadeCombate()}
              />
            </div>

            <div className="mb-4 flex items-center">
              <label className="text-gray-600 text-sm font-semibold mr-4">Raça:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.raca}
              />
            </div>

            <div className="mb-4 flex items-center">
              <label className="text-gray-600 text-sm font-semibold mr-4">Profissão:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.profissao}
              />
            </div>

            <div className="mb-4 flex items-center">
              <label className="text-gray-600 text-sm font-semibold mr-4">Idade:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.idade}
              />

              <label className="text-gray-600 text-sm font-semibold ml-4">Gênero:</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                value={ficha.genero}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">Descrição:</label>
            <textarea
              className="border-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={ficha.descricao}
              rows={9}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-semibold mb-2">História:</label>
            <textarea
              className="border-2 border-gray-300 w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={ficha.historia}
              rows={9}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex justify-around items-center w-full">
            <Atributo value={ficha.Vigor} label="Vigor" />
            <Atributo value={ficha.Habilidade} label="Habilidade" />
            <Atributo value={ficha.Percepcao} label="Percepção" />
            <Atributo value={ficha.Inteligencia} label="Inteligência" />
            <Atributo value={ficha.Dominio} label="Domínio" />
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

          <TabelaMagias magias={ficha.magias} />
          <TabelaArmas armas={ficha.armas} />
          <TabelaEquipamentos equipamentos={ficha.equipamentos} />
          <TabelaItens itens={ficha.itens} />
        </div>
      </div>
    </div>
  );
}
