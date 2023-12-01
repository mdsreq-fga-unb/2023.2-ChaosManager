import { Testes } from "@/models/estado";

export class Arma {
  nome: string;
  mod_dano: number;
  teste: Testes;
  peso: number;

  constructor(nome: string, mod_dano: number, teste: Testes, peso: number) {
    this.nome = nome;
    this.teste = teste;
    this.peso = peso;
    this.mod_dano = mod_dano;
  }
  
}

/*export enum Testes {
Forca = 'Força',
ResFisica = 'Resistência Física',
ResMental = 'Resistência Mental',
Sobrevivencia = 'Sobrevivência',
Agilidade = 'Agilidade',
Destreza = 'Destreza',
Competencia = 'Competência',
Criatividade = 'Criatividade',
Manipulacao = 'Manipulação',
Sorte = 'Sorte',
}*/

export enum ArmasExistentes {
Faca = 'Faca/adaga',
Foice = 'Foice',
Espada = 'Espada',
EspadaLonga = 'Espada longa (2-mãos)',
Katana = 'Katana (2-mãos)',
Machadinho = 'Machadinho',
Alabarda = 'Alabarda (2-mãos)',
Marreta = 'Marreta (2-mãos)',
Porrete = 'Porrete',
Maca = 'Maça dentada',
Chicote = 'Chicote',
Tridente = 'Tridente (2-mãos)',
Bastao = 'Bastão (2-mãos)',
ArcoCurto = 'Arco curto (2-mãos)',
ArcoLongo = 'Arco longo (2-mãos)',
Shuriken = 'Shuriken',
RiflePrecisao = 'Rifle de precisão',
Besta = 'Besta',
Revolver = 'Revolver',
Pistola = 'Pistola semi-auto',
Espingarda = 'Espingarda (2-mãos)',
Submetralhadora = 'Submetralhadora',
RifleAssalto = 'Rifle de assalto',
}

interface Armas {
nome: string;
mod_dano: number;
teste: Testes;
peso: number;
}

export var armas: { [id: string] : Armas; } = {};

armas["Faca/adaga"] = {
nome: "Faca/adaga",
mod_dano: 15,
teste: Testes.Forca,
peso: 0.5,
};

armas["Foice"] = {
nome: "Foice",
mod_dano: 20,
teste: Testes.Forca,
peso: 3,
};


armas["Espada"] = {
nome: "Espada",
mod_dano: 30,
teste: Testes.Forca,
peso: 2.5,
};

armas["Espada longa (2-mãos)"] = {
nome: "Espada longa (2-mãos)",
mod_dano: 40,
teste: Testes.Forca,
peso: 5,
};

armas["Katana (2-mãos)"] = {
nome: "Katana (2-mãos)",
mod_dano: 42,
teste: Testes.Forca,
peso: 2.5,
};

armas["Machadinho"] = {
nome: "Machadinho",
mod_dano: 18,
teste: Testes.Forca,
peso: 2,
};

armas["Alabarda (2-mãos)"] = {
nome: "Alabarda (2-mãos)",
mod_dano: 35,
teste: Testes.Forca,
peso: 5,
};

armas["Marreta (2-mãos)"] = {
nome: "Marreta (2-mãos)",
mod_dano: 45,
teste: Testes.Forca,
peso: 10,
};

armas["Porrete"] = {
nome: "Porrete",
mod_dano: 18,
teste: Testes.Forca,
peso: 3,
};

armas["Maça dentada"] = {
nome: "Maça dentada",
mod_dano: 23,
teste: Testes.Forca,
peso: 7,
};

armas["Chicote"] = {
nome: "Chicote",
mod_dano: 8,
teste: Testes.Forca,
peso: 2,
};

armas["Tridente (2-mãos)"] = {
nome: "Tridente (2-mãos)",
mod_dano: 33,
teste: Testes.Forca,
peso: 4,
};

armas["Bastão (2-mãos)"] = {
nome: "Bastão (2-mãos)",
mod_dano: 9,
teste: Testes.Forca,
peso: 1.5,
};

armas["Arco curto (2-mãos)"] = {
nome: "Arco curto (2-mãos)",
mod_dano: 16,
teste: Testes.Destreza,
peso: 2,
};

armas["Arco longo (2-mãos)"] = {
nome: "Arco longo (2-mãos)",
mod_dano: 20,
teste: Testes.Destreza,
peso: 4,
};

armas["Shuriken"] = {
nome: "Shuriken",
mod_dano: 15,
teste: Testes.Destreza,
peso: 0.1,
};

armas["Rifle de precisão"] = {
nome: "Rifle de precisão",
mod_dano: 80,
teste: Testes.Destreza,
peso: 5,
};

armas["Besta"] = {
nome: "Besta",
mod_dano: 18,
teste: Testes.Agilidade,
peso: 5,
};

armas["Revolver"] = {
nome: "Revolver",
mod_dano: 28,
teste: Testes.Agilidade,
peso: 1,
};

armas["Pistola semi-auto"] = {
nome: "Pistola semi-auto",
mod_dano: 30,
teste: Testes.Agilidade,
peso: 1,
};

armas["Espingarda (2-mãos)"] = {
nome: "Espingarda (2-mãos)",
mod_dano: 40,
teste: Testes.Agilidade,
peso: 1.5,
};

armas["Submetralhadora"] = {
nome: "Submetralhadora",
mod_dano: 33,
teste: Testes.Agilidade,
peso: 1.5,
};

armas["Rifle de assalto"] = {
nome: "Rifle de assalto",
mod_dano: 45,
teste: Testes.Agilidade,
peso: 2,
};

