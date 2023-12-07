import { useState } from 'react';
import { Campanha } from '@/models/campanha';
import style from './put.module.css';

function PutDB( { socket }: any ) {
  const [resultadoAtualizacao, setResultadoAtualizacao] = useState('');
  const [id, setId] = useState(0);
  const [novoNome, setNovoNome] = useState('');
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

    const camp = new Campanha(id, novoNome, novaHistoria, novaSenhaMestre);
    const response = await camp.updateData();

    if ('ok' in response) {
      if (response.ok) {
        const responseData = await response.json();
        setResultadoAtualizacao("status: " + responseData.status + '\n\n' + responseData.message);
      } else {
        setResultadoAtualizacao("Erro ao atualizar campanha");
      }
    } else {
      setResultadoAtualizacao("Erro ao atualizar campanha");
    }
  };

  return (
    <div className={style.put_db}>
      <form className={style.put_db_form}>
        <h1>PUT</h1>
        <div>
          <label htmlFor="id">ID:</label>
          <input className="text-black" type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="name">Novo nome da campanha</label>
          <input type="text" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
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
