import React from 'react';

interface AtributoProps {
    value: number;
    label: string;
}

export default function ValorTesteAtributo({ value, label }: AtributoProps) {
    return (
        <div className="relative text-center">
            <div className="w-10 h-10 mx-auto flex items-center justify-center text-black shadow z-10 font-bold dark:bg-gray-700 dark:text-gray-400">
                {value}
            </div>
            <div className="mt-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">{label}</span>
            </div>
        </div>
    );
}
