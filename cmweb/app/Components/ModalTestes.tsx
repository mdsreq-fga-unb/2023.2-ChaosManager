import { Ficha } from "@/models/ficha";
import { Testes, rolarDados, realizarTeste } from "@/models/teste";
import { Reacao, realizarReacao } from "@/models/combate";
import { Campanha } from "@/models/campanha";
import React, { useState, ChangeEvent } from "react";


export default function ModalTestes({ ficha, campanha }: { ficha: Ficha, campanha: Campanha }) {

    const [d20, setD20] = useState<number>(0);
    const [pe, setPe] = useState<number>(0);

    const [testeSelecionado, setTesteSelecionado] = useState<Testes>(Testes.Forca);
    const [reacaoSelecionada, setReacaoSelecionada] = useState<Reacao>(Reacao.NaoReagir);

    const rollD20 = () => {
        setD20(rolarDados());
        ficha.registroAcoes.push("O resultado do dado foi: " + d20)
    } //TODO: checar se isso ta funcionando ou se tenho que transformar numa callback

    const handleTesteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setTesteSelecionado(event.target.value as Testes);
    };

    const handleReacaoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setReacaoSelecionada(event.target.value as Reacao);
    };

    return (
        <div className="flex flex-col">
            <div className="mr-8  flex items-center">
                <button className="text-gray-600 text-sm font-semibold mr-4" onClick={rollD20}>
                    Rolar dados
                </button>
                <label className="py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400">{d20}</label>
            </div>
            {d20 != 0 && (<>
                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 opacity-50" />
                <div className="mr-8  flex items-center">
                    <select
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2 text-gray-400"
                        value={testeSelecionado}
                        onChange={handleTesteChange}
                    >
                        {Object.values(Testes).map((teste) => (
                            <option className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 text-gray-400" key={teste} value={teste}>
                                {teste}
                            </option>
                        ))}
                    </select>

                    <div>
                        <label className="text-gray-600 text-sm font-semibold mr-4">PE serem gastos:</label>

                        <input
                            type="number"
                            className="w-24 py-2 px-3 dark:bg-gray-700 rounded-lg p-2 dark:text-gray-400"
                            value={pe}
                            onChange={(e) => setPe(parseInt(e.target.value))}
                        />
                    </div>

                    <button className="text-gray-600 text-sm font-semibold mr-4" onClick={() => { realizarTeste(ficha, testeSelecionado, pe, d20), setD20(0) }}>
                        Realizar Teste
                    </button>
                </div>

                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                <div className="mr-8  flex items-center">
                    <select
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2 text-gray-400"
                        value={reacaoSelecionada}
                        onChange={handleReacaoChange}
                    >
                        {Object.values(Testes).map((reacao) => (
                            <option className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 text-gray-400" key={reacao} value={reacao}>
                                {reacao}
                            </option>
                        ))}
                    </select>

                    <button className="text-gray-600 text-sm font-semibold mr-4" onClick={() => { realizarReacao(ficha, reacaoSelecionada, d20, campanha), setD20(0) }}>
                        Realizar Reação
                    </button>
                </div>
            </>)
            }
        </div >
    );
}