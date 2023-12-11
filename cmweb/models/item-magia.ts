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

  static toObj(objeto: any): Item {
    const item = new Item(objeto.nome, objeto.peso);
    item.Quantidade(objeto.qtd);
    return item;
  }

}

export class Magia {
  nome: string;
  classe: Classes;

  constructor(nome: string, classe: Classes) {
    this.nome = nome;
    this.classe = classe;
  }

  static toObj(objeto: any): Magia {
    const classeEnum = Classes[objeto.classe as keyof typeof Classes];
    return new Magia(objeto.nome, classeEnum);
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
