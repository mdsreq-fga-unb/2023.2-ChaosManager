import { Testes } from "@/models/teste";

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

armas[ArmasExistentes.Faca] = {
nome: ArmasExistentes.Faca,
mod_dano: 15,
teste: Testes.Forca,
peso: 0.5,
};

armas[ArmasExistentes.Foice] = {
nome: ArmasExistentes.Foice,
mod_dano: 20,
teste: Testes.Forca,
peso: 3,
};


armas[ArmasExistentes.Espada] = {
nome: ArmasExistentes.Espada,
mod_dano: 30,
teste: Testes.Forca,
peso: 2.5,
};

armas[ArmasExistentes.EspadaLonga] = {
nome: ArmasExistentes.EspadaLonga,
mod_dano: 40,
teste: Testes.Forca,
peso: 5,
};

armas[ArmasExistentes.Katana] = {
nome: ArmasExistentes.Katana,
mod_dano: 42,
teste: Testes.Forca,
peso: 2.5,
};

armas[ArmasExistentes.Machadinho] = {
nome: ArmasExistentes.Machadinho,
mod_dano: 18,
teste: Testes.Forca,
peso: 2,
};

armas[ArmasExistentes.Alabarda] = {
nome: ArmasExistentes.Alabarda,
mod_dano: 35,
teste: Testes.Forca,
peso: 5,
};

armas[ArmasExistentes.Marreta] = {
nome: ArmasExistentes.Marreta,
mod_dano: 45,
teste: Testes.Forca,
peso: 10,
};

armas[ArmasExistentes.Porrete] = {
nome: ArmasExistentes.Porrete,
mod_dano: 18,
teste: Testes.Forca,
peso: 3,
};

armas[ArmasExistentes.Maca] = {
nome: ArmasExistentes.Maca,
mod_dano: 23,
teste: Testes.Forca,
peso: 7,
};

armas[ArmasExistentes.Chicote] = {
nome: ArmasExistentes.Chicote,
mod_dano: 8,
teste: Testes.Forca,
peso: 2,
};

armas[ArmasExistentes.Tridente] = {
nome: ArmasExistentes.Tridente,
mod_dano: 33,
teste: Testes.Forca,
peso: 4,
};

armas[ArmasExistentes.Bastao] = {
nome: ArmasExistentes.Bastao,
mod_dano: 9,
teste: Testes.Forca,
peso: 1.5,
};

armas[ArmasExistentes.ArcoCurto] = {
nome: ArmasExistentes.ArcoCurto,
mod_dano: 16,
teste: Testes.Destreza,
peso: 2,
};

armas[ArmasExistentes.ArcoLongo] = {
nome: ArmasExistentes.ArcoLongo,
mod_dano: 20,
teste: Testes.Destreza,
peso: 4,
};

armas[ArmasExistentes.Shuriken] = {
nome: ArmasExistentes.Shuriken,
mod_dano: 15,
teste: Testes.Destreza,
peso: 0.1,
};

armas[ArmasExistentes.RiflePrecisao] = {
nome: ArmasExistentes.RiflePrecisao,
mod_dano: 80,
teste: Testes.Destreza,
peso: 5,
};

armas[ArmasExistentes.Besta] = {
nome: ArmasExistentes.Besta,
mod_dano: 18,
teste: Testes.Agilidade,
peso: 5,
};

armas[ArmasExistentes.Revolver] = {
nome: ArmasExistentes.Revolver,
mod_dano: 28,
teste: Testes.Agilidade,
peso: 1,
};

armas[ArmasExistentes.Pistola] = {
nome: ArmasExistentes.Pistola,
mod_dano: 30,
teste: Testes.Agilidade,
peso: 1,
};

armas[ArmasExistentes.Espingarda] = {
nome: ArmasExistentes.Espingarda,
mod_dano: 40,
teste: Testes.Agilidade,
peso: 1.5,
};

armas[ArmasExistentes.Submetralhadora] = {
nome: ArmasExistentes.Submetralhadora,
mod_dano: 33,
teste: Testes.Agilidade,
peso: 1.5,
};

armas[ArmasExistentes.RifleAssalto] = {
nome: ArmasExistentes.RifleAssalto,
mod_dano: 45,
teste: Testes.Agilidade,
peso: 2,
};

