type Ficha = {};

export class Campanha {
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[];
  fichas_NPC: Ficha[];
  constructor({
    nome,
    historia,
    senha_mestre,
  }: {
    nome: string;
    historia: string;
    senha_mestre: string;
  }) {
    this.nome = nome;
    this.historia = historia;
    this.senha_mestre = senha_mestre;
    this.senha_jogador = "";
    this.fichas = [];
    this.fichas_NPC = [];
  }
  addFicha(ficha: Ficha) {
    this.fichas.push(ficha);
  }
  testeForca() {
    const dados = 20;
    const modificador = 5;
    const resultado = dados + modificador;
    return resultado;
  }
}
