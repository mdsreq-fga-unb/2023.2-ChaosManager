import { Ficha } from "@/models/ficha";
import React, { useState, ChangeEvent } from "react";

export default function TabelaItens({ ficha }: { ficha: Ficha }) {
    const [novoItemNome, setNovoItemNome] = useState<string>("");
    const [novoItemPeso, setNovoItemPeso] = useState<number>(0);

    const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNovoItemNome(event.target.value);
    };

    const handlePesoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novoPeso = parseFloat(event.target.value);
        setNovoItemPeso(isNaN(novoPeso) ? 0 : novoPeso);
    };


    const adicionarItem = () => {
        if (novoItemNome && novoItemPeso) {
            ficha.addItem(novoItemNome, novoItemPeso);
            setNovoItemNome("");
            setNovoItemPeso(0);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Item</th>
                        <th scope="col" className="px-6 py-3"> Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {ficha.itens.map((item, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{item.qtd}x {item.nome}</td>
                            <td className="w-4 p-4">{item.pesoTotal}kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                <div className="w-full flex flex-row px-4 py-2">
                    <input
                        value={novoItemNome}
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        placeholder="Entre com o nome do item e o seu peso"
                        onChange={handleNomeChange}
                    />

                    <input
                        value={novoItemPeso}
                        type="number"
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        onChange={handlePesoChange}
                    />
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarItem}>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};
