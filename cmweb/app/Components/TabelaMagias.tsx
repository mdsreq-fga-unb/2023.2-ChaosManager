import { Magia } from "@/models/item-magia";


interface TabelaMagiasProps {
    magias: Magia[];
}



export default function TabelaMagias(props: TabelaMagiasProps) {
    const { magias } = props;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3"> Classe</th>
                        <th scope="col" className="px-6 py-3"> Magia</th>
                    </tr>
                </thead>
                <tbody>
                    {magias.map((magia, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                            <td className="w-4 p-4">{magia.classe}</td>
                            <td className="w-4 p-4">{magia.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
