import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { Ficha } from "@/models/ficha";
import { Campanha } from "@/models/campanha";
import Image from 'next/image';
import styles from './combat.module.css';

interface typeCombat{
  socket: any,
  campanha: Campanha
}

const Combat = ({socket, campanha}:typeCombat) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFichaRealiza, setSelectedFichaRealiza] = useState<Ficha | null>(null);
  const [selectedFichaRecebe, setSelectedFichaRecebe] = useState<Ficha | null>(null);

  function getFichas(){
    if (campanha === undefined) return [];
    const newfichas = [...campanha.fichas, ...campanha.fichas_NPC];
    return newfichas;
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
            <div className={styles.combat_container_content}>
              <div className={styles.combat_cotaniner_sections}>
                <button>Pular ação</button>
              </div>
              <div className={styles.combat_cotaniner_sections}>
                <div className={styles.combat_cotaniner_sections_content}>
                  <label htmlFor="name">Ficha que realiza</label>
                  <br/>
                  <select
                    id="name"                    
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
