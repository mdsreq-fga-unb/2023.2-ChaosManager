import React from 'react';

interface AtributoProps {
    value: number;
    label: string;
}

export default function Atributo({ value, label }: AtributoProps) {
    return (
        <div className="relative text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-black shadow z-10 font-bold">
                {value}
            </div>
            <div className="mt-2">
                <span className="text-black">{label}</span>
            </div>
        </div>
    );
}
