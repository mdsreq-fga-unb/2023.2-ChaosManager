import React, { useState, useEffect, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";
import { EquipamentosExistentes } from "@/models/equipamento";


export default function TabelaEquipamentos({ ficha }: { ficha: Ficha }) {
    const [novoEquipamentoExistente, setNovoEquipamentoExistente] = useState<EquipamentosExistentes>(EquipamentosExistentes.ArmCavaleiro);

    const handleEquipamentoExistenteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovoEquipamentoExistente(event.target.value as EquipamentosExistentes);
    };

    const adicionarEquipamentoExistente = () => {
        if (novoEquipamentoExistente) {
            ficha.addEquipamentoExistente(novoEquipamentoExistente);
            setNovoEquipamentoExistente(EquipamentosExistentes.ArmCavaleiro);
        }
    };
    const [forceUpdate, setForceUpdate] = useState<number>(0);
    const handleRemover = (index: number) => {
        ficha.removeEquipamento(index);
        setForceUpdate((prev) => prev + 1);

    };
    useEffect(() => { }, [forceUpdate]);

    const [novoEquipamentoNome, setNovoEquipamentoNome] = useState<string>("");
    const [novoEquipamentoPdA, setNovoEquipamentoPdA] = useState<number>(0);
    const [novoEquipamentoPeso, setNovoEquipamentoPeso] = useState<number>(0);

    const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNovoEquipamentoNome(event.target.value);
    };

    const handlePesoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novoPeso = parseFloat(event.target.value);
        setNovoEquipamentoPeso(isNaN(novoPeso) ? 0 : novoPeso);
    };
    const handlePdAChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novoPdA = parseFloat(event.target.value);
        setNovoEquipamentoPdA(isNaN(novoPdA) ? 0 : novoPdA);
    };


    const adicionarEquipamento = () => {
        if (novoEquipamentoNome && novoEquipamentoPdA && novoEquipamentoPeso) {
            ficha.addEquipamento(novoEquipamentoNome, novoEquipamentoPdA, novoEquipamentoPeso);
            setNovoEquipamentoNome("");
            setNovoEquipamentoPdA(0);
            setNovoEquipamentoPeso(0);
        }
    };



    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Equipamento</th>
                        <th scope="col" className="px-6 py-3"> Defesa</th>
                        <th scope="col" className="px-6 py-3"> Peso</th>
                        <th scope="col" className="px-6 py-3"> Config</th>
                    </tr>
                </thead>
                <tbody>
                    {ficha.equipamentos.map((equipamento, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{equipamento.nome}</td>
                            <td className="w-4 p-4">{equipamento.PdA}</td>
                            <td className="w-4 p-4">{equipamento.peso}kg</td>
                            <td className="w-4 p-4">
                                <button
                                    className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2"
                                    onClick={() => typeof index === 'number' && handleRemover(index)}
                                >
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                <div className="w-full flex flex-row px-4 py-2">
                    <select
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2"
                        value={novoEquipamentoExistente}
                        onChange={handleEquipamentoExistenteChange}
                    >
                        {Object.values(EquipamentosExistentes).map((equipamentoExistente) => (
                            <option key={equipamentoExistente} value={equipamentoExistente}>
                                {equipamentoExistente}
                            </option>
                        ))}
                    </select>
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarEquipamentoExistente}>
                        Adicionar
                    </button>
                </div>
            </div>




            <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                <div className="w-full flex flex-row px-4 py-2">
                    <input
                        value={novoEquipamentoNome}
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        placeholder="Nome do equipamento..."
                        onChange={handleNomeChange}
                    />

                    <input
                        value={novoEquipamentoPeso}
                        type="number"
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        onChange={handlePesoChange}
                    />
                    <input
                        value={novoEquipamentoPdA}
                        type="number"
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        onChange={handlePdAChange}
                    />
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarEquipamento}>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>



    );
};
