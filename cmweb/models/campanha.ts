import { Ficha } from "@/models/ficha";
import { number } from "yup";

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
    this.senha_jogador = String(Campanha.gerarSenha());
  }

  addFicha(ficha: Ficha) {
    if(ficha.NPC) this.fichas_NPC.push(ficha);
    else this.fichas.push(ficha);
  }

  static gerarSenha():number {
    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  async saveData() {
    const dataToSave = {
      nome: this.nome,
      historia: this.historia,
      senha_mestre: this.senha_mestre,
      senha_jogador: this.senha_jogador,
      fichas: this.fichas,
      fichas_NPC: this.fichas_NPC,
    };
  
    try {
      const response = await fetch('/api/campanhas/', {   
        method: 'POST',     
        headers: {
          Accept: 'application/json',
          method: 'POST'
        },
        body: JSON.stringify(dataToSave)
      });
      if (response)
      {
        return response;
      }
      else return {erro: "Error"};
    } catch (error) {
      throw error;
    }
  }

  async updateData() {
    const dataToUpdate = {
      nome: this.nome,
      historia: this.historia,
      senha_mestre: this.senha_mestre,
      senha_jogador: this.senha_jogador,
      fichas: this.fichas,
      fichas_NPC: this.fichas_NPC,
    };
  
    try {
      const response = await fetch(`/api/campanhas/`, {
        method: 'PUT',     
        headers: {
          Accept: 'application/json',
          method: 'PUT'
        },
        body: JSON.stringify(dataToUpdate),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export class Find{
  static async findData(_id: number) {
    try {
      const response = await fetch(`/api/campanhas/?_id=${_id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
  
