import React, { useState, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";
import { Classes } from "@/models/item-magia";

export default function TabelaMagias({ ficha }: { ficha: Ficha }) {
  const [novaMagiaNome, setNovaMagiaNome] = useState<string>("");
  const [novaMagiaClasse, setNovaMagiaClasse] = useState<Classes>(Classes.Alquimia);

  const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNovaMagiaNome(event.target.value);
  };

  const handleClasseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNovaMagiaClasse(event.target.value as Classes);
  };

  const adicionarMagia = () => {
    if (novaMagiaNome && novaMagiaClasse) {
      ficha.addMagia(novaMagiaNome, novaMagiaClasse);
      setNovaMagiaNome("");
      setNovaMagiaClasse(Classes.Alquimia);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <tbody>
          <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600">
            <td className="w-4 p-4">
              <input value={novaMagiaNome} onChange={handleNomeChange} />
            </td>
            <td className="w-4 p-4">
              <input value={novaMagiaClasse} onChange={handleClasseChange} />
              <button onClick={adicionarMagia}>ok</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
