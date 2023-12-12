import { Estados } from "@/models/estado";

import React, { useState, useEffect, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";

export default function TabelaEstados({ ficha }: { ficha: Ficha }) {


    const [novoEstado, setNovaMagiaClasse] = useState<Estados>(Estados.Fome);

    const handleEstadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovaMagiaClasse(event.target.value as Estados);
    };

    const adicionarEstado = () => {
        if (novoEstado) {
            ficha.addEstado(novoEstado, 0);
            setNovaMagiaClasse(Estados.Fome);
        }
    };

    const [forceUpdate, setForceUpdate] = useState<number>(0);
    const handleRemover = (index: number) => {
        ficha.removeEstado(index);
        setForceUpdate((prev) => prev + 1);

    };
    useEffect(() => { }, [forceUpdate]);


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Estado</th>
                        <th scope="col" className="px-6 py-3"> Testes afetados</th>
                        <th scope="col" className="px-6 py-3"> Config</th>
                    </tr>
                </thead>
                <tbody>
                    {ficha.estados.map((estado, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{estado.nome}</td>
                            <td className="w-4 p-4">{estado.testes_afetados.join(', ')}</td>
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
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2 text-gray-400"
                        value={novoEstado}
                        onChange={handleEstadoChange}
                    >
                        {Object.values(Estados).map((estado) => (
                            <option className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 text-gray-400" key={estado} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarEstado}>
                        Adicionar
                    </button>
                </div>
            </div>


        </div>
    );
};
