import { Estados } from "@/models/estado";

import React, { useState, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";

export default function TabelaEstados({ ficha }: { ficha: Ficha }) {


    const [novoEstado, setNovaMagiaClasse] = useState<Estados>(Estados.Fome);

    const handleEstadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovaMagiaClasse(event.target.value as Estados);
    };

    const adicionarMagia = () => {
        if (novoEstado) {
            ficha.addEstado(novoEstado, 0);
            setNovaMagiaClasse(Estados.Fome);
        }
    };


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Estado</th>
                        <th scope="col" className="px-6 py-3"> Testes afetados</th>
                    </tr>
                </thead>
                <tbody>
                    {ficha.estados.map((estado, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{estado.nome}</td>
                            <td className="w-4 p-4">{estado.testes_afetados.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>




            <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                <div className="w-full flex flex-row px-4 py-2">
                    <select
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2"
                        value={novoEstado}
                        onChange={handleEstadoChange}
                    >
                        {Object.values(Estados).map((estado) => (
                            <option key={estado} value={estado}>
                                {estado}
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
