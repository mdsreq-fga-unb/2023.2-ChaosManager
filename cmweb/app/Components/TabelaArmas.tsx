import { Arma } from "@/models/arma";


interface TabelaArmasProps {
    armas: Arma[];
}



export default function TabelaArmas(props: TabelaArmasProps) {
    const { armas } = props;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
            {armas.map((arma, index) => (<div className="flex items-start p-4 rounded-xl shadow-lg bg-white" key={index}>
                <div className="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
                </div>

                <div className="ml-4">
                    <h2 className="font-semibold">{arma.nome}</h2>
                    <p className="mt-2 text-sm text-gray-500">Faça um teste de {arma.teste}</p>
                    <p className="mt-2 text-sm text-gray-500"><span className="font-semibold">Mod. de dano: </span>{arma.mod_dano}x</p>
                    <p className="mt-2 text-sm text-gray-500"><span className="font-semibold">Peso: </span>{arma.peso}kg</p>
                </div>
            </div>))}
        </div>
    );
};



