'use client'
import { useState } from 'react';
import { Campanha } from '@/models/campanha';
import css from "@/app/criar_campanha/criar.module.css"
import { useRouter } from 'next/navigation'

export default function CriarCampanha() {
  const [resultadoSalvamento, setResultadoSalvamento] = useState('');
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [historia, setHistoria] = useState('');
  const [senhaMestre, setSenhaMestre] = useState('');
  const [alert, setAlert] = useState({show: false, message: '', type: ''});
  const router = useRouter()


  const validarSenha = () => {
    return senhaMestre.length >= 5;
  };

  
  const salvarCampanhaNoDB = async () => {

    if (!validarSenha()) {
      setResultadoSalvamento("A senha deve ter pelo menos 5 caracteres");
      setAlert({show: true, message: "A senha deve ter pelo menos 5 caracteres", type: 'error'});
      return;
    }
    try{
      const camp = new Campanha(nome, historia, senhaMestre);
      const response = await camp.saveData();
      const data = await response.json();
      const { status, message} = data;

      setResultadoSalvamento("status: " + status + '\n\n' + message);
      setAlert({show: true, message: "status: " + status + '\n\n' + message, type: 'success'});
      const objectIdMatch = message.match(/'([^']+)'/);
      const objectId = objectIdMatch ? objectIdMatch[1] : null;

      console.log("status: " + status + '\n\n' + message);
      router.push(`/campanha/${objectId}`);
    }
    catch{
      setResultadoSalvamento("status: error  \n\n Erro desconhecido");
      setAlert({show: true, message: "status: error \n\n Erro desconhecido", type: 'error'});
    }
  };

  return (
    <div className={css.criar_campanha}>
      {alert.show && (
      <div className={`bg-${alert.type === 'success' ? 'green' : 'red'}-100 border-l-4 border-${alert.type === 'success' ? 'green' : 'red'}-500 text-black p-4`} role="alert">
        <p>{alert.message}</p>
      </div>
      )}
      <form className={css.criar_campanha_form} action={salvarCampanhaNoDB}>
        <h1>Criar Campanha</h1>
        <div>
          <label htmlFor="name">Nome da campanha</label>
          <input className="text-black" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">História da campanha</label>
          <input className="text-black" type="text" value={historia} onChange={(e) => setHistoria(e.target.value)} />
        </div> 
        <div>        
          <label htmlFor="password">Senha do mestre</label>
          <input className="text-black" type="password" value={senhaMestre} onChange={(e) => setSenhaMestre(e.target.value)} />
        </div>
        <br />
        <button type="submit">Enviar para o banco</button>        
      </form>
    </div>
  );
}