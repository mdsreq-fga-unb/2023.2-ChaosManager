import { Magia, Item, Classes } from "@/models/item-magia";
import { Estado, Testes } from "@/models/estado";
import { Arma, ArmasExistentes, armas } from "@/models/arma";
import { Equipamento, EquipamentosExistentes, equipamentos } from "@/models/equipamento";

export class Ficha {
    dados: Dados;
    NPC:boolean;
    recursos: Recursos;
    atributos: Atributos;
    pesoCarregado: number = 0;

    estados: Estado[] = [];
    magias: Magia[] = [];
    armas: Arma[] = [];
    equipamentos: Equipamento[] = [];
    itens: Item[] = [];
  
    constructor(dados: Dados, NPC:boolean, recursos: Recursos, atributos: Atributos) {
        this.dados = dados;
        this.NPC = NPC;
        this.recursos = recursos;
        this.atributos = atributos;
    }

    Capacidade():number{
        return this.Forca();
    }

    CapacidadeCombate():number{
        return this.atributos.Vigor;
    }

    penalidadeEstado(teste: Testes):number{
        let count = 0;
        this.estados.forEach(estado => {
            if(estado.afetaTeste(teste)) count += estado.valor;
        });
        return count;
    }

    Forca():number{

        return this.atributos.Vigor + this.atributos.Habilidade;
    }

    Res_Fisica():number{
        return this.atributos.Vigor + this.atributos.Percepcao;
    }

    Res_Mental():number{
        return this.atributos.Vigor + this.atributos.Inteligencia;
    }

    Sobrevivencia():number{
        return this.atributos.Vigor + this.atributos.Dominio;
    }

    Agilidade():number{
        return this.atributos.Habilidade + this.atributos.Percepcao;
    }

    Destreza():number{
        return this.atributos.Habilidade + this.atributos.Dominio;
    }

    Competencia():number{
        return this.atributos.Inteligencia + this.atributos.Habilidade;
    }

    Criatividade():number{
        return this.atributos.Inteligencia + this.atributos.Percepcao;
    }

    Manipulação():number{
        return this.atributos.Inteligencia + this.atributos.Dominio;
    }

    Sorte():number{
        return this.atributos.Dominio + this.atributos.Percepcao;
    }

    addEstado(nome: string, valor: number):void{
        this.estados.push(
            new Estado(nome, valor)
        );
    }

    addMagia(nome: string, classe: Classes):void{
        this.magias.push(
            new Magia(nome, classe)
        );
    }
    
    addArmaExistente(arma: ArmasExistentes):void{
        this.pesoCarregado += armas[arma].peso;
        this.armas.push(
            armas[arma]
        );
    }
    addArma(nome: string, mod_dano: number, teste: Testes, peso: number):void{    
        this.pesoCarregado += peso;
        this.armas.push(
            new Arma(nome, mod_dano, teste, peso)
        );
    }
    
    addEquipamentoExistente(equipamento: EquipamentosExistentes):void{
        this.pesoCarregado += equipamentos[equipamento].peso;
        this.equipamentos.push(
            equipamentos[equipamento]
        );
    }

    addEquipamento(nome: string, PdA: number, peso: number):void{
        this.pesoCarregado += peso;
        this.equipamentos.push(
            new Equipamento(nome, PdA, peso)
        );
    }

    addItem(nome: string, peso: number):void{
        this.pesoCarregado += peso;
        this.itens.push(
            new Item(nome, peso)
        );
    }

    alterarQtd(indice:number, qtd: number):void{ // pode ser por indice ou pelo nome do item, coloquei pelo indice por enquanto
        const temp = this.itens[indice].peso;
        this.itens[indice].Quantidade(qtd);
        this.pesoCarregado += this.itens[indice].peso - temp;
        
        if(this.itens[indice].qtd >= 0) this.removeItem(indice);
    }

    removeEstado(indice:number):void{
        this.estados.splice(indice, 1);
    }

    removeMagia(indice:number):void{
        this.magias.splice(indice, 1);
    }
    
    removeArma(indice:number):void{
        this.pesoCarregado -= this.armas[indice].peso;
        this.armas.splice(indice, 1);
    }
    
    removeEquipamento(indice:number):void{
        this.pesoCarregado -= this.equipamentos[indice].peso;
        this.equipamentos.splice(indice, 1);
    }

    removeItem(indice:number):void{
        this.pesoCarregado -= this.itens[indice].peso;
        this.itens.splice(indice, 1);
    }
    
}

export interface Dados {
    nomeUsuario: string;
    nomeJogador: string;
    raca: string;
    profissao: string;
    idade: string;
    genero: string;
    historia: string;
    descricao: string;
    notas: string[];
}

export interface Atributos {
    Vigor: number;
    Habilidade: number;
    Percepcao: number;
    Inteligencia: number;
    Dominio: number;
}

export interface Recursos {
    PV: number;
    PdA: number;
    PE: number;
    Exp: number;
    Dinheiro: number;
}

enum Traços {
    Força,
    "Resistência Física",
    "Resistência Mental",
    Sobrevivência,
    Agilidade,
    Destreza,
    Competência,
    Criatividade,
    Manipulação,
    Sorte,
}

