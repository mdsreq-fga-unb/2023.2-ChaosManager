'use client'
import { useEffect, useState } from 'react';
import { Campanha } from '@/models/campanha';
import style from './post.module.css';
import { Ficha } from '@/models/ficha';

function PostDB( { socket }: any ) {
  const [resultadoSalvamento, setResultadoSalvamento] = useState('');
  const [nome, setNome] = useState('');
  const [historia, setHistoria] = useState('');
  const [senhaMestre, setSenhaMestre] = useState('');

  const validarSenha = () => {
    return senhaMestre.length >= 5;
  };

  useEffect(() => {
    socket.on('save-data', ({status, message}: any) => {
      setResultadoSalvamento("status: " + status + '\n\n' + message);
    })
  }, [socket])

  const salvarCampanhaNoDB = async (e: any) => {
    e.preventDefault();

    if (!validarSenha()) {
      setResultadoSalvamento("A senha deve ter pelo menos 5 caracteres");
      return;
    }
    try{
      const camp = new Campanha(nome, historia, senhaMestre);
      const response = await camp.saveData();
      const {status, message} = response;

      socket.emit('save-data', ({ status, message }));

      setResultadoSalvamento("status: " + status + '\n\n' + message);
    }
    catch (error){
      setResultadoSalvamento("status: error  \n\n Erro desconhecido \n\n" + error);
    }
  };

  return (
    <div className={style.post_db}>
      <form className={style.post_db_form}>
        <h1>POST</h1>
        <div>
          <label htmlFor="name">Nome da campanha</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">História da campanha</label>
          <input type="text" value={historia} onChange={(e) => setHistoria(e.target.value)} />
        </div> 
        <div>        
          <label htmlFor="password">Senha do mestre</label>
          <input type="password" value={senhaMestre} onChange={(e) => setSenhaMestre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="text">Resposta do banco</label>
          <textarea
            value={resultadoSalvamento}
            rows={4}
            readOnly
          />
        </div>
        <br />
        <button onClick={salvarCampanhaNoDB}>Enviar para o banco</button>        
      </form>
    </div>
  );
}

export default PostDB;
