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
            break;
        case Testes.Competencia:
            if(PE > ficha.recursos.PE) return -1;
            ficha.recursos.PE -= PE;
            result = ficha.Competencia() + PE;
            break;
        case Testes.Criatividade:
            result = ficha.Criatividade();
            break;
        case Testes.Destreza:
            result = ficha.Destreza();
            break;
        case Testes.Forca:
            result = ficha.Forca();
            break;
        case Testes.Manipulacao:
            result = ficha.Manipulação();
            break;
        case Testes.ResFisica:
            result = ficha.Res_Fisica();
            break;
        case Testes.ResMental:
            result = ficha.Res_Mental();
            break;
        case Testes.Sobrevivencia:
            result = ficha.Sobrevivencia();
            break;
        case Testes.Sorte:
            result = ficha.Sorte();
            break;
    }

    return d20 + result + penalidadeEstado + penalidadeTraco;
}