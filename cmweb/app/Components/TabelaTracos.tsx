import { TracoNegativo } from "@/models/traco-negativo";
import { TracoPositivo } from "@/models/traco-positivo";


interface TabelaTracosProps {
    tracosNegativos: TracoNegativo[];
    tracosPositivos: TracoPositivo[];
}
// TODO: Preciso de um array com os nomes dos testes afetados na modelagem


export default function TabelaTracos(props: TabelaTracosProps) {
    const { tracosNegativos, tracosPositivos } = props;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Traço</th>
                        <th scope="col" className="px-6 py-3"> Testes afetados</th>
                    </tr>
                </thead>
                <tbody>
                    {tracosNegativos.map((traco, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{traco.traco}</td>
                            {/* <td className="w-4 p-4">{[-]traco.testes_afetados.join(', ')}</td> */}
                        </tr>
                    ))}
                    {tracosPositivos.map((traco, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{traco.traco}</td>
                            {/* <td className="w-4 p-4">[+]{traco.testes_afetados.join(', ')}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
