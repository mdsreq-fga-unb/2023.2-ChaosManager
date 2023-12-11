import { Arma } from "@/models/arma";

export default function TabelaArmas({ armas }: { armas: Arma[] }) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Arma</th>
                        <th scope="col" className="px-6 py-3"> Teste necessário</th>
                        <th scope="col" className="px-6 py-3"> Modificador de dano</th>
                        <th scope="col" className="px-6 py-3"> Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {armas.map((arma, index) => (
                        <tr className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{arma.nome}</td>
                            <td className="w-4 p-4">{arma.teste}</td>
                            <td className="w-4 p-4">{arma.mod_dano}x</td>
                            <td className="w-4 p-4">{arma.peso}kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
