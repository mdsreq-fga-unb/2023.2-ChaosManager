export type CampanhaType = {
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[] | null | undefined;
  fichas_NPC: Ficha[] | null | undefined;
};
type Ficha = {};

export class Campanha {
  nome: string;
  historia: string;
  senha_mestre: string;
  senha_jogador: string;
  fichas: Ficha[] | null;
  fichas_NPC: Ficha[] | null;
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
}
