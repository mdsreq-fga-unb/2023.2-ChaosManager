import React from 'react';

export default function Atributo({ value, label }: { value: number, label: string }) {
    return (
        <div className="relative text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow z-10 font-bold bg-gray-700 text-gray-400">
                {value}
            </div>
            <div className="mt-2">
                <span className="text-gray-400">{label}</span>
            </div>
        </div>
    );
}
