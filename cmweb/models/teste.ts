import { Ficha } from "./ficha";

export enum Testes {
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
}

export function rolarDados():number{
    const min = Math.ceil(0);
    const max = Math.floor(20);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

export function realizarTeste(ficha: Ficha, teste:Testes, PE: number, d20: number):number{
    const penalidadeEstado = ficha.penalidadeEstado(teste);
    const penalidadeTraco = ficha.penalidadeTraco(teste);
    let result;

    switch(teste){
        case Testes.Agilidade:
            result = ficha.Agilidade();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Agilidade + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Competencia:
            if(PE > ficha.PE) return -1;
            ficha.PE -= PE;
            result = ficha.Competencia() + PE;
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Competencia + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Criatividade:
            result = ficha.Criatividade();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Criatividade + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Destreza:
            result = ficha.Destreza();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Destreza + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Forca:
            result = ficha.Forca();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Forca + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Manipulacao:
            result = ficha.Manipulação();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Manipulacao + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.ResFisica:
            result = ficha.Res_Fisica();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.ResFisica + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.ResMental:
            result = ficha.Res_Mental();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.ResMental + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Sobrevivencia:
            result = ficha.Sobrevivencia();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Sobrevivencia + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
        case Testes.Sorte:
            result = ficha.Sorte();
            ficha.registroAcoes.push("Resultado do seu Teste de " + Testes.Sorte + " foi " + (d20 + result + penalidadeEstado + penalidadeTraco) + "!");
            break;
    }

    return d20 + result + penalidadeEstado + penalidadeTraco;
}