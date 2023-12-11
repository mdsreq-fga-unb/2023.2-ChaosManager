import React from 'react';

export default function ValorTesteAtributo({ value, label }: { value: number, label: string }) {
    return (
        <div className="relative text-center">
            <div className="w-10 h-10 mx-auto flex items-center justify-center shadow z-10 font-boldbg-gray-700 text-gray-400">
                {value}
            </div>
            <div className="mt-2">
                <span className="text-gray-400 text-sm font-semibold">{label}</span>
            </div>
        </div>
    );
}
