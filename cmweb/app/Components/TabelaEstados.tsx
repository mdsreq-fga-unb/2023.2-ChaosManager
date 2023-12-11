import { Estado } from "@/models/estado";

export default function TabelaEstados({ estados }: { estados: Estado[] }) {

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
                    {estados.map((estado, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{estado.nome}</td>
                            <td className="w-4 p-4">{estado.testes_afetados.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
