import React, { useState, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";
import { EquipamentosExistentes } from "@/models/equipamento";


export default function TabelaEquipamentos({ ficha }: { ficha: Ficha }) {
    const [novoEquipamentoExistente, setNovoEquipamentoExistente] = useState<EquipamentosExistentes>(EquipamentosExistentes.ArmCavaleiro);

    const handleEquipamentoExistenteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovoEquipamentoExistente(event.target.value as EquipamentosExistentes);
    };

    const adicionarMagia = () => {
        if (novoEquipamentoExistente) {
            ficha.addEquipamentoExistente(novoEquipamentoExistente);
            setNovoEquipamentoExistente(EquipamentosExistentes.ArmCavaleiro);
        }
    };


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
                    </tr>
                </thead>
                <tbody>
                    {ficha.equipamentos.map((equipamento, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{equipamento.nome}</td>
                            <td className="w-4 p-4">{equipamento.PdA}</td>
                            <td className="w-4 p-4">{equipamento.peso}kg</td>
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
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarMagia}>
                        Adicionar
                    </button>
                </div>
            </div>




        </div>



    );
};
