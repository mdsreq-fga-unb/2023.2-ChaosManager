import { useState } from 'react';
import { Campanha } from '@/models/campanha';
import { Find } from '@/models/campanha';
import style from './put.module.css';

function PutDB( { socket }: any ) {
  const [resultadoAtualizacao, setResultadoAtualizacao] = useState('');
  const [nome, setnome] = useState('');
  const [novaHistoria, setNovaHistoria] = useState('');
  const [novaSenhaMestre, setNovaSenhaMestre] = useState('');

  const validarSenha = () => {
    return novaSenhaMestre.length >= 5;
  };

  const atualizarCampanhaNoDB = async (e: any) => {
    e.preventDefault();

    if (!validarSenha()) {
      setResultadoAtualizacao("A senha deve ter pelo menos 5 caracteres");
      return;
    }
    const query = await Find.findData(nome);
    const {status, message, camp, result} = query;

    if (status == 500){
      setResultadoAtualizacao("status: " + status + '\n\n' + message);
    }
    else{
      let campanha = camp;
      const response = await campanha.updateData();
      const dataUpdate = await response.json();
      const { status, message, data } = dataUpdate;
      setResultadoAtualizacao("status: " + status + '\n\n' + message + '\n');
    }
  };

  return (
    <div className={style.put_db}>
      <form className={style.put_db_form}>
        <h1>PUT</h1>
        <div>
          <label htmlFor="name">Nome da campanha</label>
          <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Nova história da campanha</label>
          <input type="text" value={novaHistoria} onChange={(e) => setNovaHistoria(e.target.value)} />
        </div> 
        <div>        
          <label htmlFor="password">Nova senha do mestre</label>
          <input type="password" value={novaSenhaMestre} onChange={(e) => setNovaSenhaMestre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="text">Resposta do banco</label>
          <textarea
            value={resultadoAtualizacao}
            rows={4}
            readOnly
          />
        </div>
        <br />
        <button onClick={atualizarCampanhaNoDB}>Atualizar no banco</button>        
      </form>
    </div>
  );
}

export default PutDB;
