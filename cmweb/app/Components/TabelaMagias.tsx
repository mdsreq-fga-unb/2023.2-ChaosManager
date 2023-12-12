import React, { useState, useEffect, ChangeEvent } from "react";
import { Ficha } from "@/models/ficha";
import { Classes } from "@/models/item-magia";

export default function TabelaMagias({ ficha }: { ficha: Ficha }) {
  const [novaMagiaNome, setNovaMagiaNome] = useState<string>("");
  const [novaMagiaClasse, setNovaMagiaClasse] = useState<Classes>(Classes.Alquimia);

  const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNovaMagiaNome(event.target.value);
  };

  const handleClasseChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNovaMagiaClasse(event.target.value as Classes);
  };

  const adicionarMagia = () => {
    if (novaMagiaNome && novaMagiaClasse) {
      ficha.addMagia(novaMagiaNome, novaMagiaClasse);
      setNovaMagiaNome("");
      setNovaMagiaClasse(Classes.Alquimia);
    }
  };

  const [forceUpdate, setForceUpdate] = useState<number>(0);
  const handleRemover = (index: number) => {
    ficha.removeMagia(index);
    setForceUpdate((prev) => prev + 1);

  };
  useEffect(() => { }, [forceUpdate]);


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs 0 uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Magia</th>
            <th scope="col" className="px-6 py-3">Classe</th>
            <th scope="col" className="px-6 py-3"> Config</th>

          </tr>
        </thead>
        {ficha.magias.map((magia, index) => (
          <tr className="bg-gray-800 border-gray-700 hover:bg-gray-600" key={index}>
            <td className="w-4 p-4">{magia.nome}</td>
            <td className="w-4 p-4">{magia.classe}</td>
            <td className="w-4 p-4">
              <button
                className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2"
                onClick={() => typeof index === 'number' && handleRemover(index)}
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </table>

      <div className="bg-gray-800 border-gray-700 hover:bg-gray-600">
        <div className="w-full flex flex-row px-4 py-2">
          <input
            value={novaMagiaNome}
            className="bg-transparent border-b border-gray-500 focus:outline-none w-full py-2"
            placeholder="Entre com o nome da magia"
            onChange={handleNomeChange}
          />
          <select
            className="bg-transparent border-b border-gray-500 focus:outline-none w-full max-w-m py-2"
            value={novaMagiaClasse}
            onChange={handleClasseChange}
          >
            {Object.values(Classes).map((classe) => (
              <option key={classe} value={classe}>
                {classe}
              </option>
            ))}
          </select>
          <button className="text-sm text-left rtl:text-right text-gray-400 px-4 py-2" onClick={adicionarMagia}>
            Adicionar
          </button>
        </div>
      </div>


    </div>
  );
}
