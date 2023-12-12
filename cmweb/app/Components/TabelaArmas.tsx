import React, { useState, useEffect, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";
import { ArmasExistentes } from "@/models/arma";
import { Testes } from "@/models/teste";

export default function TabelaArmas({ ficha }: { ficha: Ficha }) {
    const [novoArmaExistente, setNovoArmaExistente] = useState<ArmasExistentes>(ArmasExistentes.Besta);

    const handleArmaExistenteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovoArmaExistente(event.target.value as ArmasExistentes);
    };

    const adicionarArmaExistente = () => {
        if (novoArmaExistente) {
            ficha.addArmaExistente(novoArmaExistente);
            setNovoArmaExistente(ArmasExistentes.Besta);
        }
    };

    const [novoArmaNome, setNovoArmaNome] = useState<string>("");
    const [novoArmaModDano, setNovoArmaModDano] = useState<number>(0);
    const [novoArmaPeso, setNovoArmaPeso] = useState<number>(0);
    const [novaArmaTesteUsado, setNovaMagiaClasse] = useState<Testes>(Testes.Forca);

    const handleTesteUsadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setNovaMagiaClasse(event.target.value as Testes);
    };

    const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNovoArmaNome(event.target.value);
    };

    const handlePesoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novoPeso = parseFloat(event.target.value);
        setNovoArmaPeso(isNaN(novoPeso) ? 0 : novoPeso);
    };
    const handlemod_danoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novomod_dano = parseFloat(event.target.value);
        setNovoArmaModDano(isNaN(novomod_dano) ? 0 : novomod_dano);
    };


    const adicionarArma = () => {
        if (novoArmaNome && novoArmaModDano && novaArmaTesteUsado && novoArmaPeso) {
            ficha.addArma(novoArmaNome, novoArmaModDano, novaArmaTesteUsado, novoArmaPeso);
            setNovoArmaNome("");
            setNovoArmaModDano(0);
            setNovoArmaPeso(0);
            setNovaMagiaClasse(Testes.Forca);

        }
    };

    const [forceUpdate, setForceUpdate] = useState<number>(0);
    const handleRemover = (index: number) => {
        ficha.removeArma(index);
        setForceUpdate((prev) => prev + 1);

    };
    useEffect(() => { }, [forceUpdate]);


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Arma</th>
                        <th scope="col" className="px-6 py-3"> Teste necessário</th>
                        <th scope="col" className="px-6 py-3"> Modificador de dano</th>
                        <th scope="col" className="px-6 py-3"> Peso</th>
                        <th scope="col" className="px-6 py-3"> Config</th>
                    </tr>
                </thead>
                <tbody>
                    {ficha.armas.map((arma, index) => (
                        <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{arma.nome}</td>
                            <td className="w-4 p-4">{arma.teste}</td>
                            <td className="w-4 p-4">{arma.mod_dano}x</td>
                            <td className="w-4 p-4">{arma.peso}kg</td>
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
                        value={novoArmaExistente}
                        onChange={handleArmaExistenteChange}
                    >
                        {Object.values(ArmasExistentes).map((armaExistente) => (
                            <option key={armaExistente} value={armaExistente}>
                                {armaExistente}
                            </option>
                        ))}
                    </select>
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarArmaExistente}>
                        Adicionar
                    </button>
                </div>
            </div>




            <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                <div className="w-full flex flex-row px-4 py-2">
                    <input
                        value={novoArmaNome}
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        placeholder="Nome do arma..."
                        onChange={handleNomeChange}
                    />
                    <select
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2"
                        value={novaArmaTesteUsado}
                        onChange={handleTesteUsadoChange}
                    >
                        {Object.values(Testes).map((teste) => (
                            <option key={teste} value={teste}>
                                {teste}
                            </option>
                        ))}
                    </select>
                    <input
                        value={novoArmaModDano}
                        type="number"
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        onChange={handlemod_danoChange}
                    />

                    <input
                        value={novoArmaPeso}
                        type="number"
                        className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
                        onChange={handlePesoChange}
                    />
                    <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarArma}>
                        Adicionar
                    </button>
                </div>
            </div>

        </div>
    );
};
