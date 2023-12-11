import { Magia } from "@/models/item-magia";


export default function TabelaMagias({ magias }: { magias: Magia[] }) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs 0 uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Magia</th>
                        <th scope="col" className="px-6 py-3"> Classe</th>
                    </tr>
                </thead>
                <tbody>
                    {magias.map((magia, index) => (
                        <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{magia.nome}</td>
                            <td className="w-4 p-4">{magia.classe}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
