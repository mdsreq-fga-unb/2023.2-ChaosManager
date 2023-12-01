import { Magia, Item, Classes } from "@/models/item-magia";
import { Estado } from "@/models/estado";
import { Arma, ArmasExistentes, armas } from "@/models/arma";
import { Equipamento, EquipamentosExistentes, equipamentos } from "@/models/equipamento";
import { Testes } from "@/models/teste";
import { TracoPositivo, TracosPositivos, tracosPos } from "@/models/traco-positivo";
import { TracoNegativo, TracosNegativos, tracosNeg } from "@/models/traco-negativo";

export class Ficha {
    NPC:boolean;
    pesoCarregado: number = 0;

    tracosPositivos: TracoPositivo[] = [];
    tracosNegativos: TracoNegativo[] = [];
    estados: Estado[] = [];
    magias: Magia[] = [];
    armas: Arma[] = [];
    equipamentos: Equipamento[] = [];
    itens: Item[] = [];

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

    recursos: Recursos= {
        PV: 0,
        PdA: 0,
        PE: 0,
        Exp: 0,
        Dinheiro: 0,
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

    Recursos(recursos: number[]):void{
        this.recursos = {
            PV: recursos[0],
            PdA: recursos[1],
            PE: recursos[2],
            Exp: recursos[3],
            Dinheiro: recursos[4],
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

    Capacidade():number{
        return this.Forca();
    }

    CapacidadeCombate():number{
        return this.atributos.Vigor;
    }

    penalidadeEstado(teste: Testes):number{
        // testar !!!!
        let count = 0;
        this.estados.forEach(estado => {
            if(estado.afetaTeste(teste)) count += estado.valor;
        });
        return count;
    }

    penalidadeTraco(teste: Testes):number{
        // testar !!!!
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
        //precisa testar !!!!!!!
        if(this.tracosNegativos.length > 0 && this.tracosNegativos.find((element) => tracosPos[traco].id == tracosNeg[element.traco].id)) return -1; // verifica se na lista de negativos tem algum antagônic, se retornar sim retorna -1
        
        this.tracosPositivos.push(
            new TracoPositivo(traco, valor)
        );
        return 0;
    }

    addTracoNegativo(traco: TracosNegativos, valor: number):number{
        //precisa testar !!!!!!!
        if(this.tracosPositivos.length > 0 && this.tracosPositivos.find((element) => tracosNeg[traco].id == tracosPos[element.traco].id)) return -1; // verifica se na lista de negativos tem algum antagônic, se retornar sim retorna -1
        
        this.tracosNegativos.push(
            new TracoNegativo(traco, valor)
        );
        return 0;
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
        // add verificação de o nome igual a algum já existente
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
        // add verificação de o nome igual a algum já existente 
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
        this.pesoCarregado -= this.itens[indice].peso;
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

interface Recursos {
    PV: number;
    PdA: number;
    PE: number;
    Exp: number;
    Dinheiro: number;
}
