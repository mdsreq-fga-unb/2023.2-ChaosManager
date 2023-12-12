import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { Ficha } from "@/models/ficha";
import { Campanha } from "@/models/campanha";
import { Arma } from "@/models/arma";
import { Testes } from "@/models/teste";
import Image from 'next/image';
import styles from './combat.module.css';
import { Magia } from "@/models/item-magia";
import { Key } from "lucide-react";

interface typeCombat{
  socket: any,
  campanha: Campanha
}

const Combat = ({socket, campanha}:typeCombat) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<number>(0);
  const [selectedFichaRealiza, setSelectedFichaRealiza] = useState<Ficha | null>(null);
  const [selectedFichaRecebe, setSelectedFichaRecebe] = useState<Ficha | null>(null);
  const [selectedFichaIniciativa, setSelectedFichaIniciativa] = useState<Ficha | null>(null);
  const [selectedArma, setSelectedArma] = useState<Arma | null>(null);
  const [selectedMagia, setSelectedMagia] = useState<Magia | null>(null);
  const [podeReagir, setPodeReagir] = useState<boolean>(false);
  const [selectedTeste, setSelectedTeste] = useState<Testes | null>(null);
  const [iniciativas, setIniciativas] = useState<Ficha[]>([]);

  function getFichas(){
    if (campanha === undefined) return [];
    const newfichas = [...campanha.fichas, ...campanha.fichas_NPC];
    return newfichas;
  }

  function getArmas(){
    if (selectedFichaRealiza === null) return [];
    return selectedFichaRealiza.armas;
  }

  function getMagias(){
    if (selectedFichaRealiza === null) return [];
    return selectedFichaRealiza.magias;
  }

  function getTeste(nomeTeste: string): Testes | null {
    const valoresTestes = Object.values(Testes);
  
    for (const valorTeste of valoresTestes) {
      if (valorTeste === nomeTeste) {
        return nomeTeste as Testes;
      }
    }

    return null;
  }

  function addFichaIniciativas(){
    if (selectedFichaIniciativa){
      setIniciativas([...iniciativas, selectedFichaIniciativa]);
    }
  }

  function addIniciativa(){
    if (selectedFichaIniciativa){
      setIniciativas([...iniciativas, selectedFichaIniciativa]);
    }
  }

  function removeIniciativas(index: number){
    const newIniciativas = [...iniciativas];
    newIniciativas.splice(index, 1);
    setIniciativas(newIniciativas);
  }

  const handleOpen = ()=> setIsOpen(true);
  const handleClose = ()=> setIsOpen(false);

  return (
    <div className={styles.combat}>
      <div className={styles.combat_container}>
        <AnimatePresence>
          {isOpen && (
          <motion.aside
          initial={{width: 0, opacity: 0}}
          animate={{width: 500, opacity: 1}}
          exit={{width: 0, opacity: 0}}>            
            <header>
              <h1>Combate</h1>
              <Image
              src="/icons/exit.png" 
              alt="sword" 
              width={25} 
              height={25}
              onClick={handleClose}
              className={styles.combat_icon_exit}
              />
            </header>
            <hr className={styles.horizontal_line} />
            <div className={styles.combat_menu}>
              <button onClick={() => setState(0)} className={state !== 0 ? styles.combat_disabled : ''}>
                Iniciativa
              </button>
              <button onClick={() => setState(1)} className={state !== 1 ? styles.combat_disabled : ''}>
                Combate
              </button>
              <button onClick={() => setState(2)} className={state !== 2 ? styles.combat_disabled : ''}>
                Resultados
              </button>
            </div>
            <hr className={styles.horizontal_line} />
            <div className={styles.combat_container_content}>  
              {state === 0 && (
                <>
                  <div className={styles.combat_cotaniner_sections}>                
                    <div className={styles.combat_cotaniner_sections_content}>
                      <select
                        id="name"
                        value={selectedFichaIniciativa ? selectedFichaIniciativa._id : ''}
                        onChange={(e) => {
                          const selectedId = parseInt(e.target.value, 10);
                          const selectedFichaIniciativa = getFichas().find((ficha) => ficha._id === selectedId) || null;
                          setSelectedFichaIniciativa(selectedFichaIniciativa);
                        }}
                      >
                        <option value="">Selecione uma ficha</option>
                        {getFichas().map((ficha, index) => (
                          <option key={ficha._id} value={ficha._id}>
                            {`${index + 1}. ${ficha.dados.nomeJogador}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <button
                      onClick={() => addFichaIniciativas()}
                      >
                        Add ficha
                      </button>
                    </div>
                  </div>                  
                  {iniciativas.map((ficha, index) => (
                    <>
                    <div className={styles.combat_cotaniner_sections}>
                      <div className={styles.combat_cotaniner_sections_content}>
                        <h3>
                          {`${index + 1} - ${ficha._id}. ${ficha.dados.nomeJogador}`}
                        </h3>
                      </div>
                      <div className={styles.combat_cotaniner_sections_content}>
                        <button onClick={() => removeIniciativas(index)}>Remove</button>
                      </div>
                    </div>
                    </>
                  ))}
                  <div className={styles.combat_cotaniner_sections}>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <button
                      onClick={() => addFichaIniciativas()}
                      >
                        Add ficha
                      </button>
                    </div>   
                  </div>         
                </>
              )}

              {state === 1 && (
                <>
                  <div className={styles.combat_cotaniner_sections}>                
                    <div className={styles.combat_cotaniner_sections_content}>
                      <button>Pular ação</button>
                    </div>
                  </div>              
                  <div className={styles.combat_cotaniner_sections}>                
                    <div className={styles.combat_cotaniner_sections_content}>
                      <h2>Ataque</h2>
                    </div>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <h2>Reação</h2>
                    </div>
                  </div>
                  <div className={styles.combat_cotaniner_sections}>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <label htmlFor="name">Ficha que realiza</label>
                      <br/>
                      <select
                        id="name"
                        value={selectedFichaRealiza ? selectedFichaRealiza._id : ''}
                        onChange={(e) => {
                          const selectedId = parseInt(e.target.value, 10);
                          const selectedFichaRealiza = getFichas().find((ficha) => ficha._id === selectedId) || null;
                          setSelectedFichaRealiza(selectedFichaRealiza);
                        }}
                      >
                        <option value="">Selecione uma ficha</option>
                        {getFichas().map((ficha, index) => (
                          <option key={ficha._id} value={ficha._id}>
                            {`${index + 1}. ${ficha.dados.nomeJogador}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <label htmlFor="name">Ficha que recebe</label>
                      <br/>
                      <select
                        id="name"
                        value={selectedFichaRecebe ? selectedFichaRecebe._id : ''}
                        onChange={(e) => {
                          const selectedId = parseInt(e.target.value, 10);
                          const selectedFichaRecebe = getFichas().find((ficha) => ficha._id === selectedId) || null;
                          setSelectedFichaRecebe(selectedFichaRecebe);
                        }}
                      >
                        <option value="">Selecione uma ficha</option>
                        {getFichas().map((ficha, index) => (
                          <option key={ficha._id} value={ficha._id}>
                            {`${index + 1}. ${ficha.dados.nomeJogador}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.combat_cotaniner_sections}>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <label htmlFor="name">Arma</label>
                      <br/>
                      <select
                        id="name"
                        value={selectedArma ? selectedArma.nome : ''}
                        onChange={(e) => {
                          const selectedNome = e.target.value;
                          const selectedArma = getArmas().find((arma) => arma.nome === selectedNome) || null;
                          setSelectedArma(selectedArma);                      
                        }}
                      >
                        <option value="">Selecione uma arma</option>
                        {getArmas().map((arma, index) => (
                          <option key={arma.nome} value={arma.nome}>
                            {`${index + 1}. ${arma.nome}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <label htmlFor="text">Não pode reagir</label>
                      <input
                        className={styles.combat_checkbox}
                        type="checkbox"
                        id="naoPodeReagir"
                        checked={podeReagir}
                        onChange={(e) => {
                          const podeReagir = e.target.checked;
                          setPodeReagir(podeReagir);
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.combat_cotaniner_sections}>
                    <div className={styles.combat_cotaniner_sections_content}>
                      <label htmlFor="text">Magia</label>
                      <br/>
                      <select
                        id="name"
                        value={selectedMagia ? selectedMagia.nome : ''}
                        onChange={(e) => {
                          const selectedNome = e.target.value;
                          const selectedMagia = getMagias().find((magia) => magia.nome === selectedNome) || null;
                          setSelectedMagia(selectedMagia);                      
                        }}
                      >
                        <option value="">Selecione uma magia</option>
                        {getMagias().map((magia, index) => (
                          <option key={magia.nome} value={magia.nome}>
                            {`${index + 1}. ${magia.nome}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.combat_cotaniner_sections_content}></div>
                  </div>
                  <div className={styles.combat_cotaniner_sections}>
                    <div className={styles.combat_cotaniner_sections_content}>
                    <label htmlFor="name">Teste</label>
                      <br/>
                      <select
                        id="name"
                        value={selectedTeste ? selectedTeste : ''}
                        onChange={(e) => {
                          const selectedNome = e.target.value;
                          const selectedTeste = getTeste(selectedNome);
                          setSelectedTeste(selectedTeste);
                        }}
                      >
                        <option value="">Selecione um teste</option>
                        {Object.values(Testes).map((teste, index) => (
                          <option key={teste} value={teste}>
                            {`${index + 1}. ${teste}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.combat_cotaniner_sections_content}>
                    </div>
                  </div>
                </>
              )}
              {state === 2 && (
                <>
                  <div className={styles.combat_cotaniner_sections}>
                    
                  </div>
                </>
              )}
            </div>
          </motion.aside>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isOpen && (
            <motion.div    
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}            
            >
            <Image 
              src="/icons/sword.png" 
              alt="sword" 
              width={50} 
              height={50} 
              onClick={handleOpen}
              className={styles.combat_icon}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
   </div>
  )
};

export default Combat;