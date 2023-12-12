import React, { useEffect, useState } from 'react';
import { Campanha, Find } from '@/models/campanha';
import style from './get.module.css';
import Combat from '../../Combate/Combat';
import { Ficha } from '@/models/ficha';

function GetDB({ socket }: any) {
  const [nome, setName] = useState('');
  const [resultado, setResultado] = useState('');
  const [campanhaData, setCampanhaData] = useState(null);
  const [haveCamp, setHaveCamp] = useState(false);
  const [campanha, setCampanha] = useState<Campanha | null>(null);
  const [ficha, setFicha] = useState<Ficha | null>(null);

  useEffect(() => {
    socket.on('find-data', ({ nome, status, message, result }: any) => {
      setName(nome);
      setCampanhaData(result[0]);
      setResultado("status: " + status + '\n\n' + message);
    });
  }, [socket]);

  function setResponse({ status, message, result, camp }: any) {
    setCampanha(camp);
    setFicha(camp.fichas[0]);
    socket.emit('find-data', ({ nome, status, message, camp }));
    setCampanhaData(result[0]);
    setResultado("status: " + status + '\n\n' + message);
  }

  const buscarCampanha = async (e: any) => {
    e.preventDefault();
    try {
      const data = await Find.findData(nome);
      setResponse(data);
      setHaveCamp(true);
    } catch (error) {
      setResultado('Erro ao buscar os dados da campanha');
      setHaveCamp(false);
    }
  };

  return (
    <>
    <div className={style.get_db}>
      <form className={style.get_db_form}>
        <h1>GET</h1>
        <div>
          <label htmlFor="name">Nome da campanha:</label>
          <input
            type="name"
            value={nome}
            onChange={(e) => setName(String(e.target.value))}
          />
        </div>
        <div>
          {campanhaData && (
            <div>
              <br />
              {Object.entries(campanhaData).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor="text">{key}</label>
                  <input
                    value={value !== null && value !== undefined ? value.toString() : ''}
                    readOnly
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="text">Resposta do banco</label>
          <textarea
            value={resultado}
            rows={4}
            readOnly
          />
        </div>
        <br />
        <button onClick={buscarCampanha}>Buscar Campanha</button>
      </form>      
    </div>
    {haveCamp && campanha && ficha &&(
      <>
        <Combat socket={socket} campanha={campanha} />
      </>
      )}
    </>
  );
}

export default GetDB;

// <div className="position: absolute">
//   <FichaPagina ficha={ficha} />
// </div>
