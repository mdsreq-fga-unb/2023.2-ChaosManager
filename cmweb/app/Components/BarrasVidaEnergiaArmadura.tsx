export default function BarrasVidaEnergiaArmadura({ value }: { value: number }) {
    // TODO: Pra isso aqui funcionar direito precisa do valor maximo de cada status na na model
    return (
        <div className="flex max-w-md mx-auto mt-1">
            <div className="bg-gray-200 w-full">
                <div className={`h-full w-${value} bg-green-600`}></div>
            </div>
            <strong className="bg-gray-200">{value}/Max</strong>
        </div>
    );
}
