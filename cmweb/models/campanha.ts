import { Ficha } from "@/models/ficha";

export class Campanha {
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[] = [];
  fichas_NPC: Ficha[] = [];

  constructor(nome: string, historia: string, senha_mestre: string) {
    this.nome = nome;
    this.historia = historia;
    this.senha_mestre = senha_mestre;
    this.senha_jogador = String(this.gerarSenha());
  }

  addFicha(ficha: Ficha) {
    if(ficha.NPC) this.fichas_NPC.push(ficha);
    else this.fichas.push(ficha);
  }

  gerarSenha():number {
    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min) + min); 
  }


}
