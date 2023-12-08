import { Equipamento } from "@/models/equipamento";


interface TabelaEquipamentosProps {
    equipamentos: Equipamento[];
}


export default function TabelaEquipamentos(props: TabelaEquipamentosProps) {
    const { equipamentos } = props;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
            {equipamentos.map((equipamento, index) => (
                <div className="flex items-start p-4 rounded-xl shadow-lg bg-white" key={index}>
                    <div className="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100" />
                    <h2 className="font-semibold">{equipamento.nome}</h2>
                    <p className="mt-2 text-sm text-gray-500"><span className="font-semibold">Defesa: </span>{equipamento.PdA}x</p>
                    <p className="mt-2 text-sm text-gray-500"><span className="font-semibold">Peso: </span>{equipamento.peso}kg</p>

                </div>))}
        </div>
    );
};



