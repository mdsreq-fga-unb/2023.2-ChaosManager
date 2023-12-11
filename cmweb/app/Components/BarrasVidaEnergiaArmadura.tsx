export default function BarrasVidaEnergiaArmadura({ vida, vida_max }: { vida: number, vida_max: Function }) {
    return (
        <div className="flex max-w-md mx-auto mt-1">
            <div className="bg-gray-200 w-full">
                <div className={`h-full w-${vida} bg-green-600`}></div>
            </div>
            <strong className="bg-gray-200">{vida}/{vida_max()}</strong>
        </div>
    );
}
