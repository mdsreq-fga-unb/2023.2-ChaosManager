import { Ficha } from "@/models/ficha";
import { Combate } from "@/models/combate";

export class Campanha {
  _id: string = "";
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[] = [];
  fichas_NPC: Ficha[] = [];
  registroAcoes: string[] = [];
  combate: Combate = new Combate(this);


  constructor(nome: string, historia: string, senha_mestre: string) {
    this.nome = nome;
    this.historia = historia;
    this.senha_mestre = senha_mestre;
    this.senha_jogador = String(Campanha.gerarSenha());
  }

  addFicha(ficha: Ficha) {
    ficha._id = this.fichas.length + 1;
    if (ficha.NPC) this.fichas_NPC.push(ficha);
    else this.fichas.push(ficha);
  }

  static gerarSenha(): number {
    const min = Math.ceil(100000);
    const max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min) + min);
  }

  async saveData() {
    try {
      const response = await fetch("/api/campanhas/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          method: "POST",
        },
        body: JSON.stringify(this),
      });
      const data = await response.json();
      const { status, message, newId } = data;
      this._id = newId;
      const _ = await this.updateData();
      return { status, message };
    } catch (error) {
      throw error;
    }
  }

  async updateData() {
    try {
      const response = await fetch(`/api/campanhas/`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          method: "PUT",
        },
        body: JSON.stringify(this),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static toObj(objeto: any): Campanha {
    const { _id, nome, historia, senha_mestre, senha_jogador, fichas, fichas_NPC } = objeto;
    const campanha = new Campanha(nome, historia, senha_mestre);
    campanha._id = _id;
    campanha.senha_jogador = senha_jogador;

    campanha.fichas = fichas.map((ficha: any) => Ficha.toObj(ficha));
    campanha.fichas_NPC = fichas_NPC.map((ficha: any) => Ficha.toObj(ficha));

    return campanha;
  }
}

export class Find {
  static async findData(nome: string) {
    try {
      const response = await fetch(`/api/campanhas/?nome=${nome}`);
      const data = await response.json();
      const { status, message, result } = data;
      console.log(result[0]);
      const camp = Campanha.toObj(result[0]);
      return { status, message, result, camp };
    } catch (error) {
      throw error;
    }
  }
}
