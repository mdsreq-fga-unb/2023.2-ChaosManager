import { Magia, Item, Classes } from "@/models/item-magia";
import { Estado, Estados } from "@/models/estado";
import { Arma, ArmasExistentes, armas } from "@/models/arma";
import { Equipamento, EquipamentosExistentes, equipamentos } from "@/models/equipamento";
import { Testes } from "@/models/teste";
import { TracoPositivo, TracosPositivos, tracosPos } from "@/models/traco-positivo";
import { TracoNegativo, TracosNegativos, tracosNeg } from "@/models/traco-negativo";

export class Ficha {
    _id:number = 0;
    NPC:boolean;
    pesoCarregado: number = 0;
    PV: number = 0;
    PdA: number = 0;
    PE: number = 0;
    Exp: number = 0;
    Dinheiro: number = 0;

    tracosPositivos: TracoPositivo[] = [];
    tracosNegativos: TracoNegativo[] = [];
    estados: Estado[] = [];
    magias: Magia[] = [];
    armas: Arma[] = [];
    equipamentos: Equipamento[] = [];
    itens: Item[] = [];
    registroAcoes: string[] = [];

    dados: Dados = {
        nomeUsuario: "", 
        nomeJogador: "", 
        raca: "", 
        profissao: "", 
        idade: "", 
        genero: "", 
        historia: "", 
        descricao: "", 
        notas: [""]
    };

    atributos: Atributos= {
        Vigor: 0,
        Habilidade: 0,
        Percepcao: 0,
        Inteligencia: 0,
        Dominio: 0,
    };
  
    constructor(NPC:boolean) {
        this.NPC = NPC;
    }
    
    Dados(dados: string[], notas: string[]): void{ //passei como array os parametros senão ficaria mto grande
        this.dados = {
            nomeUsuario: dados[0],
            nomeJogador: dados[1],
            raca: dados[2],
            profissao: dados[3],
            idade: dados[4],
            genero: dados[5],
            historia: dados[6],
            descricao: dados[7],
            notas: notas,
        }
    }
    
    Atributos(atributos: number[]):void{
        this.atributos = {
            Vigor: atributos[0],
            Habilidade: atributos[1],
            Percepcao: atributos[2],
            Inteligencia: atributos[3],
            Dominio: atributos[4],
        }
    }

    PV_max(): number{ 
        return 2*this.atributos.Vigor + this.atributos.Dominio;
    }
    PE_max(): number{
        return this.atributos.Inteligencia + this.atributos.Percepcao + this.atributos.Dominio;
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
        return count*(-1);
    }

    penalidadeTraco(teste: Testes):number{
        let count = 0;
        this.tracosPositivos.forEach(traco => {
            if(traco.afetaTeste(teste)) count += traco.valor;
        });
        this.tracosNegativos.forEach(traco => {
            if(traco.afetaTeste(teste)) count -= traco.valor;
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

    addTracoPositivo(traco: TracosPositivos, valor: number):number{
        if(this.tracosNegativos.length > 0 && this.tracosNegativos.find((element) => tracosPos[traco].id == tracosNeg[element.traco].id)) return -1; // verifica se na lista de negativos tem algum antagônic, se retornar sim retorna -1
        
        this.tracosPositivos.push(
            new TracoPositivo(traco, valor)
        );
        return 0;
    }

    addTracoNegativo(traco: TracosNegativos, valor: number):number{
        if(this.tracosPositivos.length > 0 && this.tracosPositivos.find((element) => tracosNeg[traco].id == tracosPos[element.traco].id)) return -1; // verifica se na lista de negativos tem algum antagônic, se retornar sim retorna -1
        
        this.tracosNegativos.push(
            new TracoNegativo(traco, valor)
        );
        return 0;
    }

    addEstado(nome: Estados, valor: number):void{
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
    addArma(nome: string, mod_dano: number, teste: Testes, peso: number):number{    
        if ((<any>Object).values(ArmasExistentes).includes(nome)) return -1; // verifica se já existe uma arma com esse nome

        this.pesoCarregado += peso;
        this.armas.push(
            new Arma(nome, mod_dano, teste, peso)
        );
        return 0;
    }
    
    addEquipamentoExistente(equipamento: EquipamentosExistentes):void{
        this.pesoCarregado += equipamentos[equipamento].peso;
        this.equipamentos.push(
            equipamentos[equipamento]
        );
    }

    addEquipamento(nome: string, PdA: number, peso: number):number{
        if ((<any>Object).values(EquipamentosExistentes).includes(nome)) return -1; // verifica se já existe um equipamento com esse nome

        this.pesoCarregado += peso;
        this.equipamentos.push(
            new Equipamento(nome, PdA, peso)
        );
        return 0;
    }

    addItem(nome: string, peso: number):void{
        this.pesoCarregado += peso;
        this.itens.push(
            new Item(nome, peso)
        );
    }

    alterarQtd(indice:number, qtd: number):void{ // pode ser por indice ou pelo nome do item, coloquei pelo indice por enquanto
        if(qtd == 0) {
            this.removeItem(indice);
            return;
        }
        
        const temp = this.itens[indice].pesoTotal;
        this.itens[indice].Quantidade(qtd);
        this.pesoCarregado += this.itens[indice].pesoTotal - temp;
        
    }

    removeTracoPositivo(indice:number):void{
        this.tracosPositivos.splice(indice, 1);
    }

    removeTracoNegativo(indice:number):void{
        this.tracosNegativos.splice(indice, 1);
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
        this.pesoCarregado -= this.itens[indice].pesoTotal;
        this.itens.splice(indice, 1);
    }
    
}

interface Dados {
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

interface Atributos {
    Vigor: number;
    Habilidade: number;
    Percepcao: number;
    Inteligencia: number;
    Dominio: number;
}
