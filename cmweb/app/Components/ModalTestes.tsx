import { Ficha } from "@/models/ficha";
import { Testes, rolarDados, realizarTeste } from "@/models/teste";
import { Reacao, Combate } from "@/models/combate"; // Todo: realizarReacao nao ta sendo exportada
import { useState } from "react";


export default function ModalTestes({ ficha }: { ficha: Ficha }) {

    const [d20, setD20] = useState<number | null>(0);
    const [pe, setPe] = useState<number>(0);
    const [testeSelecionado, setTesteSelecionado] = useState<string>("");
    const testesPossiveis = Object.values(Testes) as string[];

    const [reacaoSelecionada, setReacaoSelecionada] = useState<string>("");
    const reacoesPossiveis = Object.values(Reacao) as string[];

    const rollD20 = () => {
        setD20(rolarDados());
        ficha.registroAcoes.push("O resultado do dado foi: " + d20)
    } //TODO: checar se isso ta funcionando ou se tenho que transformar numa callback


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selecionarTeste = (teste: string) => {
        setTesteSelecionado(teste);
        toggleDropdown();
    };

    return (
        <div className="flex flex-col">
            <div className="mr-8  flex items-center">
                <button className="text-gray-600 text-sm font-semibold mr-4" onClick={rollD20}>
                    Rolar dados
                </button>
                <label className="py-2 px-3 bg-gray-700 rounded-lg p-2 text-gray-400">{d20}</label>
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 opacity-50" />
            {d20 != 0 && (<>

                <div className="mr-8  flex items-center">
                    <div className="relative inline-block text-left mx-2">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-800 focus:outline-none"
                            onClick={toggleDropdown}
                        >
                            {testeSelecionado || "Selecione um teste"}
                        </button>
                        {isOpen && (
                            <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                <div className="py-1">
                                    {testesPossiveis.map((teste, index) => (
                                        <a
                                            key={index}
                                            onClick={() => selecionarTeste(teste)}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-600"
                                        >
                                            {teste}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm font-semibold mr-4">PE serem gastos:</label>

                        <input
                            type="number"
                            className="w-24 py-2 px-3 dark:bg-gray-700 rounded-lg p-2 dark:text-gray-400"
                            value={pe}
                            onChange={(e) => setPe(parseInt(e.target.value))}
                        />
                    </div>
                    <button className="text-gray-600 text-sm font-semibold mr-4" onClick={realizarTeste(ficha, testeSelecionado, pe, d20)}>
                        Realizar Teste
                    </button>
                    {/* Todo: Funçao realizar testes ta quebrada */}

                </div>

                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <div className="mr-8  flex items-center">
                    <div className="relative inline-block text-left mx-2">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-800 focus:outline-none"
                            onClick={toggleDropdown}
                        >
                            {reacaoSelecionada || "Selecione uma reação"}
                        </button>
                        {isOpen && (
                            <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                <div className="py-1">
                                    {reacoesPossiveis.map((reacao, index) => (
                                        <a
                                            key={index}
                                            onClick={() => selecionarTeste(reacao)}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-600"
                                        >
                                            {reacao}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="text-gray-600 text-sm font-semibold mr-4" onClick={realizarReacao(ficha, reacaoSelecionada, d20)}>
                        Realizar Reação
                    </button>
                    {/* Todo: Nao ta funcionando é mais facil mudar o metodo na model pra aceitar a string e la dentro ela identifiacar qual enum é */}

                </div></>)}
        </div>
    );
}