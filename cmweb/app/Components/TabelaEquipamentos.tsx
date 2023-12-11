import { Equipamento } from "@/models/equipamento";




export default function TabelaEquipamentos({ equipamentos }: { equipamentos: Equipamento[] }) {

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
                    {equipamentos.map((equipamento, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{equipamento.nome}</td>
                            <td className="w-4 p-4">{equipamento.PdA}</td>
                            <td className="w-4 p-4">{equipamento.peso}kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
