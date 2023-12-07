import { Ficha } from "@/models/ficha";
import { number } from "yup";

export class Campanha {
  _id: number;
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[] = [];
  fichas_NPC: Ficha[] = [];

  constructor(_id: number, nome: string, historia: string, senha_mestre: string) {
    this._id = _id;
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
    try {
      const response = await fetch('/api/campanhas/', {   
        method: 'POST',     
        headers: {
          Accept: 'application/json',
          method: 'POST'
        },
        body: JSON.stringify(this)
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateData() {  
    try {
      const response = await fetch(`/api/campanhas/`, {
        method: 'PUT',     
        headers: {
          Accept: 'application/json',
          method: 'PUT'
        },
        body: JSON.stringify(this)
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
  
