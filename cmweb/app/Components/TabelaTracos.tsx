import { TracoNegativo } from "@/models/traco-negativo";
import { TracoPositivo } from "@/models/traco-positivo";

// TODO: Preciso de um array com os nomes dos testes afetados na modelagem

export default function TabelaTracos({ tracosNegativos, tracosPositivos }: { tracosNegativos: TracoNegativo[], tracosPositivos: TracoPositivo[] }) {


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Traço</th>
                        {/* <th scope="col" className="px-6 py-3"> Testes afetados</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tracosNegativos.map((traco, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{traco.traco}</td>
                            {/* <td className="w-4 p-4">{"[-]" + traco.testes_afetados.join(', ')}</td> */}
                        </tr>
                    ))}
                    {tracosPositivos.map((traco, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{traco.traco}</td>
                            {/* <td className="w-4 p-4">{"[+]" + traco.testes_afetados.join(', ')}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
