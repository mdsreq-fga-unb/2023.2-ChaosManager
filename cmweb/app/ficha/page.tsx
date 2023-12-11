"use client"

import { Ficha } from "@/models/ficha";

import BarrasVidaEnergiaArmadura from "../Components/BarrasVidaEnergiaArmadura";
import Atributo from "../Components/Atributo";
import ValorTesteAtributo from "../Components/ValorTesteAtributo";
import TabelaMagias from "../Components/TabelaMagias";
import TabelaArmas from "../Components/TabelaArmas";
import TabelaItens from "../Components/TabelaItens";
import TabelaEquipamentos from "../Components/TabelaEquipamentos";
import TabelaEstados from "../Components/TabelaEstados";
import TabelaTracos from "../Components/TabelaTracos";
import ModalTestes from "../Components/ModalTestes";

interface typeFicha{
    ficha: Ficha;
  }

const FichaPagina = ({ficha}: typeFicha) => {
    console.log(ficha);
    return (
        <div className="bg-gray-100 p-4 bg-gray-800">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="flex space-between">
                        <div className="ml-4">
                            <p className="font-bold text-xl text-gray-400">{ficha.dados.nomeJogador}</p>
                            <p className="font-bold text-xs text-gray-400"> {ficha.dados.nomeUsuario}</p>
                            <p className="w-full text-sm text-gray-400"><span className="font-semibold text-xs uppercase text-gray-400">Dinheiro: </span>R${ficha.Dinheiro},00</p>
                            <p className="w-full text-sm text-gray-400"><span className="font-semibold text-xs uppercase text-gray-400">Peso: </span>{ficha.pesoCarregado}Kg </p>
                            <p className="w-full text-sm text-gray-400"><span className="font-semibold text-xs uppercase text-gray-400">Armadura: </span>{ficha.PdA} </p>
                        </div>
                    </div>
                    <ModalTestes ficha={ficha} />
                    <div className="mt-4">
                        <BarrasVidaEnergiaArmadura vida={ficha.PV} vida_max={ficha.PV_max()} />
                        <BarrasVidaEnergiaArmadura vida={ficha.PE} vida_max={ficha.PE_max()} />
                    </div>

                    <div className="max-w-md mx-auto mt-8">
                        <div className="mb-4 flex items-center">
                            <div>
                                <label className="text-gray-600 text-sm font-semibold mr-4">Capacidade:</label>
                                <input
                                    type="text"
                                    className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                    value={ficha.Capacidade()} />

                            </div>
                            <div>
                                <label className="text-gray-600 text-sm font-semibold ml-4">Capacidade em combate:</label>
                                <input
                                    type="text"
                                    className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                    value={ficha.CapacidadeCombate()} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 text-sm font-semibold mr-4">Raça:</label>
                            <input
                                type="text"
                                className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                value={ficha.dados.raca}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-600 text-sm font-semibold mr-4">Profissão:</label>
                            <input
                                type="text"
                                className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                value={ficha.dados.profissao}
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <div>
                                <label className="text-gray-600 text-sm font-semibold mr-4">Idade:</label>
                                <input
                                    type="text"
                                    className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                    value={ficha.dados.idade} />
                            </div>
                            <div>
                                <label className="text-gray-600 text-sm font-semibold ml-4">Gênero:</label>
                                <input
                                    type="text"
                                    className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                                    value={ficha.dados.genero} />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-600 text-sm font-semibold mb-2">Descrição:</label>
                        <textarea
                            className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                            value={ficha.dados.descricao}
                            rows={9}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-600 text-sm font-semibold mb-2">História:</label>
                        <textarea
                            className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
                            value={ficha.dados.historia}
                            rows={9}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-600 text-sm font-semibold mb-2">Notas:</label>
                        <textarea
                            className="w-full py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400 pointer-events-none"
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

                    <TabelaMagias magias={ficha.magias} />
                    <TabelaArmas armas={ficha.armas} />
                    <TabelaEquipamentos equipamentos={ficha.equipamentos} />
                    <TabelaItens itens={ficha.itens} />
                    <TabelaEstados estados={ficha.estados} />
                    <TabelaTracos tracosNegativos={ficha.tracosNegativos} tracosPositivos={ficha.tracosPositivos} />
                </div>
            </div>
        </div >
    );
};

export default FichaPagina;





