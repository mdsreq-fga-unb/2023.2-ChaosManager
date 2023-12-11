import { Ficha } from "@/models/ficha"
import { Magia, Item, Classes } from "@/models/item-magia";
import { Estado, Estados } from "@/models/estado";
import { Arma, ArmasExistentes, armas } from "@/models/arma";
import { Equipamento, EquipamentosExistentes, equipamentos } from "@/models/equipamento";
import { realizarTeste, Testes } from "@/models/teste";
import { TracoPositivo, TracosPositivos, tracosPos } from "@/models/traco-positivo";
import { TracoNegativo, TracosNegativos, tracosNeg } from "@/models/traco-negativo";
import { Campanha } from "@/models/campanha";

interface Iniciativa {
    ficha:Ficha;
    reacao:boolean;
}

export class Combate{
    iniciativa: { [id: number] : Iniciativa; } = {};
    acaoAtual: number = 0;
    campanha: Campanha; 

    constructor(campanha:Campanha){
        this.campanha = campanha;
    }

    addIniciativa(fichas:Ficha[]):void{
        let count = 1;
        fichas.forEach(element => {
            this.iniciativa[count] = {
                ficha: element,
                reacao: false,
            };
            count++;
        });
        
        this.campanha.registroAcoes.push("A ordem de iniciativa é: " + fichas.toString());

        fichas.forEach(element => {
            element.registroAcoes.push("A ordem de iniciativa é: " + fichas.toString());
        });

    }

    calculoDano(arma:Arma, magia:boolean, PE:number, acao:number):number{
        let result = 0;

        if (arma !== null && arma !== undefined){
            result = acao + arma.mod_dano;
        } else if (magia == true) {
            result = acao + PE;
        } else{
            result = acao;
        }

        return result;
    }

    calculoAbsorcao(opReacao:number, calculoDano:number, d20:number[], fichas:Ficha[]):void{
        let dano:number = 0;

        // opReacao => defender ou sem chance de esquiva/defesa - 1; Reação de Esquivar (no caso de falha) e Não reagir - 2; Falha Crítica em Combate - 3
        switch(opReacao){
            case 1:
                dano = calculoDano - realizarTeste(fichas[1], Testes.ResFisica, 0, d20[1]);
                break;
            case 2:
                dano = calculoDano - (fichas[1].Res_Fisica() + fichas[1].penalidadeEstado(Testes.ResFisica) + fichas[1].penalidadeTraco(Testes.ResFisica));
                break;
            case 3:
                dano = calculoDano - (fichas[0].Res_Fisica() + fichas[0].penalidadeEstado(Testes.ResFisica) + fichas[0].penalidadeTraco(Testes.ResFisica));
                break;
        }

        if(dano <= 0) return;

        if(d20[0] == 20) {
            fichas[1].PV -= dano;

            fichas[0].registroAcoes.push(fichas[0].toString() + " obteve um acerto crítico, " + fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Vida!");
            fichas[1].registroAcoes.push(fichas[0].toString() + " obteve um acerto crítico, " + fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Vida!");
            this.campanha.registroAcoes.push(fichas[0].toString() + " obteve um acerto crítico, " + fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Vida!");
        } else if(d20[0] == 1) {

            if(dano < Math.floor(fichas[0].PdA/2)) {
                fichas[0].PdA -= dano;
    
                fichas[0].registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
                fichas[1].registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
                this.campanha.registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
            } else {
                let danoPV = Math.floor(dano/2);
                fichas[0].PV -= Math.floor(dano/2);
    
                dano -= Math.floor(dano/2);
                let danoPdA = dano;
    
                fichas[0].PdA -= dano;
    
                if(fichas[0].PdA < 0) {
                    danoPV += (-1)*fichas[1].PdA;
                    danoPdA += fichas[1].PdA;
    
                    fichas[0].PV += fichas[1].PdA;
                    fichas[0].PdA = 0;
                }

                fichas[0].registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + dano + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
                fichas[1].registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
                this.campanha.registroAcoes.push(fichas[0].toString() + " obteve uma falha crítica, recebeu " + dano + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
            }

            if (fichas[0].PV <= 0) this.logGeral("O personagem " + fichas[0].toString() + " teve sua vida zerada e está morto!");

            return;
        
        }else if(dano < Math.floor(fichas[1].PdA/2)) {
            fichas[1].PdA -= dano;

            fichas[0].registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
            fichas[1].registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
            this.campanha.registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado totalmente dos Pontos de Armadura!");
        } else {
            let danoPV = Math.floor(dano/2);
            fichas[1].PV -= Math.floor(dano/2);

            dano -= Math.floor(dano/2);
            let danoPdA = dano;

            fichas[1].PdA -= dano;

            if(fichas[1].PdA < 0) {
                danoPV += (-1)*fichas[1].PdA;
                danoPdA += fichas[1].PdA;

                fichas[1].PV += fichas[1].PdA;
                fichas[1].PdA = 0;
            }

            fichas[0].registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
            fichas[1].registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
            this.campanha.registroAcoes.push(fichas[1].toString() + " recebeu " + dano + " de dano, descontado " + danoPdA + " dos Pontos de Armadura e " + danoPV + " dos Pontos de Vida!");
        }

        if (fichas[1].PV <= 0) this.logGeral("O personagem " + fichas[1].toString() + " teve sua vida zerada e está morto!");

    }

    efeitoCombate(combate:number, fichas:Ficha[], resultados:number[], d20:number[], escolhaReacao:Reacao, arma:Arma, magia:boolean, PE:number):void{
        // combate - acao 1, retaliacao 2
        // personagem executando acao - ficha[0], personagem executando reacao - ficha[1]
        // resultado do teste da acao - resultados[0], resultado do teste da reacao - resultados[1]
        // d20 da acao - d20[0], d20 da reacao - d20[1]

        let dano = this.calculoDano(arma, magia, PE, resultados[0]);

        switch(combate){
            case 1:
                if (resultados[1] >= resultados[0] && escolhaReacao == Reacao.Esquivar) {
                    fichas[0].registroAcoes.push(fichas[1].toString() + " esquivou com sucesso do ataque de " + fichas[0].toString() + "!");
                    fichas[1].registroAcoes.push(fichas[1].toString() + " esquivou com sucesso do ataque de " + fichas[0].toString() + "!");
                    this.campanha.registroAcoes.push(fichas[1].toString() + " esquivou com sucesso do ataque de " + fichas[0].toString() + "!");
                    return;
                }

                if (d20[0] == 1) this.calculoAbsorcao(3, dano, d20, fichas);                   // falha crítica
                else if (resultados[1] >= resultados[0] && escolhaReacao == Reacao.Defender) { // reacao de Defender ganha da acao
                    this.calculoAbsorcao(1, dano, d20, fichas);
                } else {                                                                       // Não reagiu ou perdeu nas reações para a acao
                    this.calculoAbsorcao(2, dano, d20, fichas);
                }

                break;

            case 2:
                if (d20[0] == 1) this.calculoAbsorcao(3, dano, d20, fichas);                   // falha crítica
                else this.calculoAbsorcao(1, dano, d20, fichas);

                break;
        }

    }

    realizarAcao(op:number, fichaAcao:Ficha, ficha:Ficha, teste:Testes):void{
        // op - 1 acao, op - 2 retaliacao
        if(op == 1) {
            fichaAcao.registroAcoes.push("Realize um teste de " + teste + "!");
            ficha.registroAcoes.push("Você está sofrendo uma Ação. Escolha um tipo de reação: Defender, Esquivar ou Não Reagir. Em seguida, role os dados e realize a reação!");
        } else {
            fichaAcao.registroAcoes.push("Realize um teste de " + teste + "!");
            ficha.registroAcoes.push("Você está sofrendo uma Retaliação, role os dados!");
        }
        
    }

    realizarReacao(ficha:Ficha, escolhaReacao:Reacao, d20:number):number{
        let result:number = -1;
        switch(escolhaReacao){
            case Reacao.Defender:
                result = realizarTeste(ficha, Testes.ResFisica, 0, d20);

                this.campanha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.Defender + ", o resultado do teste é " + result + "!");
                ficha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.Defender + ", o resultado do teste é " + result + "!");
                break;
            case Reacao.Esquivar:
                result = realizarTeste(ficha, Testes.Agilidade, 0, d20);

                this.campanha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.Esquivar + ", o resultado do teste é " + result + "!");
                ficha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.Esquivar + ", o resultado do teste é " + result + "!");
                break;
            case Reacao.NaoReagir:
                result = -1;

                this.campanha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.NaoReagir + "!");
                ficha.registroAcoes.push("A reação escolhida do personagem " + ficha.toString() + " foi de " + Reacao.NaoReagir + "!");
                break;
            default:
                break;
        }

        return result;

    }

    pularAcao():void{ // da para utilizar essa funcao no botao de Proxima Acao
        this.acaoAtual++;
    }

    logGeral(message:string):void{
        this.campanha.registroAcoes.push(message);
        
        this.campanha.fichas.forEach(element => {
            element.registroAcoes.push(message);
        });
        this.campanha.fichas_NPC.forEach(element => {
            element.registroAcoes.push(message);
        });
    }

}

export enum Reacao{
    Defender = 'Defender',
    Esquivar = 'Esquivar',
    NaoReagir = 'Não Reagir',    
}
