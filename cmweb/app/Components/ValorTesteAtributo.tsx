import React from 'react';

interface AtributoProps {
    value: number;
    label: string;
}

export default function ValorTesteAtributo({ value, label }: AtributoProps) {
    return (
        <div className="relative text-center">
            <div className="w-10 h-10 mx-auto flex items-center justify-center text-black shadow z-10 font-bold">
                {value}
            </div>
            <div className="mt-2">
                <span className="text-gray-600 text-sm font-semibold ml-4">{label}</span>
            </div>
        </div>
    );
}
