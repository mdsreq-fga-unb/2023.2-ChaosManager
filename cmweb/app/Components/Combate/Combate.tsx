import style from './combat.module.css';
import { Combate } from '@/models/combate';
import { Campanha } from '@/models/campanha';
import { ChevronLast, ChevronFirst } from "lucide-react"
import {useState, useEffect } from "react"
import { Interface } from 'readline';
import { Ficha } from '@/models/ficha';

interface typeCombat{
  socket: any,
  campanha: Campanha
}

function Combat({ socket, campanha }: typeCombat){
  const [expanded, setExpanded] = useState(false)
  const [selectedFichaRealiza, setSelectedFichaRealiza] = useState<Ficha | null>(null);
  const [selectedFichaRecebe, setSelectedFichaRecebe] = useState<Ficha | null>(null);

  useEffect(() => {
    socket.on('find-data', ({nome, status, message, result}: any) => {
    })
  }, [socket])

  function getFichas(){
    if (campanha === undefined) return [];

    return [...campanha.fichas, ...campanha.fichas_NPC];
  }

  return (
    <section>
      <div className="p-4 pb-2 flex justify-between items-center">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? <ChevronLast /> : <ChevronFirst />}
        </button>
      </div>

      <div className=
            {`
              overflow-hidden transition-all ${expanded ? "w-150 p-5" : "w-0 padding: 20px"}`
            }>
      <section className={style.combat_section}>
        <h1>Combate</h1>
        <button>Pular ação</button>
        <br />
        <br />
        <div>
          <div className={style.fichaContainer}>
            <div>
              <label htmlFor="name">Ficha que realiza</label>
              <select
                id="name"
                value={selectedFichaRealiza?._id || ''}
                onChange={(e) => {
                  const selectedId = parseInt(e.target.value, 10);
                  const selectedFichaRealiza = getFichas().find((ficha) => ficha._id === selectedId) || null;
                  setSelectedFichaRealiza(selectedFichaRealiza);
                }}
              >
                <option value="">Selecione uma ficha</option>
                {getFichas().map((ficha) => (
                  <option key={ficha._id} value={ficha._id}>
                    {ficha.dados.nomeJogador}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="text">Ficha que recebe</label>
              <select
                id="name"
                value={selectedFichaRecebe?._id || ''}
                onChange={(e) => {
                  const selectedId = parseInt(e.target.value, 10);
                  const selectedFichaRecebe = getFichas().find((ficha) => ficha._id === selectedId) || null;
                  setSelectedFichaRecebe(selectedFichaRecebe);
                }}
              >
                <option value="">Selecione uma ficha</option>
                {getFichas().map((ficha) => (
                  <option key={ficha._id} value={ficha._id}>
                    {ficha.dados.nomeJogador}
                  </option>
                ))}
                
              </select>
            </div>
          </div>
        </div>
        <br />
        </section>
      </div>
    </section>
  );
}

export default Combat;