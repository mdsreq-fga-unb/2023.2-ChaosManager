export class Item {
  nome: string;
  peso: number;
  pesoTotal: number;
  qtd: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
    this.pesoTotal = peso;
    this.qtd = 1;
  }

  Quantidade(qtd: number):void {
      this.qtd = qtd;
      this.pesoTotal = this.peso*qtd;
  }

}

export class Magia {
nome: string;
classe: Classes;

constructor(nome: string, classe: Classes) {
  this.nome = nome;
  this.classe = classe;
}

}

export enum Classes {
  Especial = 'Habilidade especial',
  Encantamentos = 'Encantamentos & Maldições',
  Abjuracao = 'Abjuração',
  Alquimia = 'Alquimia',
  Transmutacao = 'Transmutação',
  Translocacao = 'Translocação',
  Conjuracao = 'Conjuração',
  Mentalizacao= 'Mentalização',
}
