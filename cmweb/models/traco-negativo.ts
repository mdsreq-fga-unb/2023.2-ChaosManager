import { Testes } from "@/models/teste";

export class TracoNegativo {
    traco: TracosNegativos;
    valor: number;
  
    constructor(traco: TracosNegativos, valor: number) {
        this.traco = traco;
        this.valor = valor;
    }
    
    afetaTeste(teste: Testes):boolean{
      return tracosNeg[this.traco].testes_afetados.includes(teste);
    }

    static toObj(objeto:any): TracoNegativo{
        return new TracoNegativo(objeto.traco, objeto.valor);
    }
    
}

export enum TracosNegativos {
    LimitacaoFisicaSensorial = "Limitação física/sensorial**",
    DoencaDegenerativa = "Doença degenerativa",
    Psicopatia = "Psicopatia",
    Autodestruicao = "Autodestruição",
    DoencaCronicaMental = "Doença crônica/mental**",
    VulneravelTempQuimica = "Vulnerável à temp./quím.**",
    FobiaIncontrolavel = "Fobia incontrolável à*",
    Alergia = "Alergia à*",
    Negligencia = "Negligência",
    Distracao = "Distração",
    Insensatez = "Insensatez",
    Compulsao = "Compulsão",
    Preguica = "Preguiça",
    Pessimismo = "Pessimismo",
    Covardia = "Covardia",
    Desonra = "Desonra",
    Desnutricao = "Desnutrição",
    BaixaEstatura = "Baixa estatura",
    Repulsividade = "Repulsividade",
    ConhecidoComoInjusto = "Conhecido como injusto",
    PavioCurto = "Pavio curto",
    Depressao = "Depressão",
    Fanatismo = "Fanatismo",
    Teimosia = "Teimosia",
    Timidez = "Timidez",
    Ingenuidade = "Ingenuidade",
    Monotonia = "Monotonia",
    DiccaoPrejudicada = "Dicção prejudicada*",
}

interface Tracos {
    id: number;
    nome: string;
    testes_afetados: Testes[];
}

export let tracosNeg: { [id: string]: Tracos; } = {};

tracosNeg[TracosNegativos.LimitacaoFisicaSensorial] = {
    id: 0,
    nome: TracosNegativos.LimitacaoFisicaSensorial,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Competencia, Testes.ResMental],
};

tracosNeg[TracosNegativos.DoencaDegenerativa] = {
    id: 1,
    nome: TracosNegativos.DoencaDegenerativa,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Sobrevivencia],
};

tracosNeg[TracosNegativos.Psicopatia] = {
    id: 2,
    nome: TracosNegativos.Psicopatia,
    testes_afetados: [Testes.Sorte, Testes.Criatividade],
};

tracosNeg[TracosNegativos.Autodestruicao] = {
    id: 3,
    nome: TracosNegativos.Autodestruicao,
    testes_afetados: [Testes.ResMental, Testes.Criatividade],
};

tracosNeg[TracosNegativos.DoencaCronicaMental] = {
    id: 4,
    nome: TracosNegativos.DoencaCronicaMental,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Competencia, Testes.ResMental],
};

tracosNeg[TracosNegativos.VulneravelTempQuimica] = {
    id: 5,
    nome: TracosNegativos.VulneravelTempQuimica,
    testes_afetados: [Testes.Sobrevivencia],
};

tracosNeg[TracosNegativos.FobiaIncontrolavel] = {
    id: 6,
    nome: TracosNegativos.FobiaIncontrolavel,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Alergia] = {
    id: 7,
    nome: TracosNegativos.Alergia,
    testes_afetados: [Testes.Sobrevivencia],
};

tracosNeg[TracosNegativos.Negligencia] = {
    id: 8,
    nome: TracosNegativos.Negligencia,
    testes_afetados: [Testes.Competencia],
};

tracosNeg[TracosNegativos.Distracao] = {
    id: 9,
    nome: TracosNegativos.Distracao,
    testes_afetados: [Testes.Destreza],
};

tracosNeg[TracosNegativos.Insensatez] = {
    id: 10,
    nome: TracosNegativos.Insensatez,
    testes_afetados: [Testes.Criatividade],
};

tracosNeg[TracosNegativos.Compulsao] = {
    id: 11,
    nome: TracosNegativos.Compulsao,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Preguica] = {
    id: 12,
    nome: TracosNegativos.Preguica,
    testes_afetados: [Testes.Competencia],
};

tracosNeg[TracosNegativos.Pessimismo] = {
    id: 13,
    nome: TracosNegativos.Pessimismo,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Covardia] = {
    id: 14,
    nome: TracosNegativos.Covardia,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Desonra] = {
    id: 15,
    nome: TracosNegativos.Desonra,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Desnutricao] = {
    id: 16,
    nome: TracosNegativos.Desnutricao,
    testes_afetados: [Testes.Forca],
};

tracosNeg[TracosNegativos.BaixaEstatura] = {
    id: 17,
    nome: TracosNegativos.BaixaEstatura,
    testes_afetados: [Testes.ResFisica],
};

tracosNeg[TracosNegativos.Repulsividade] = {
    id: 18,
    nome: TracosNegativos.Repulsividade,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.ConhecidoComoInjusto] = {
    id: 19,
    nome: TracosNegativos.ConhecidoComoInjusto,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.PavioCurto] = {
    id: 20,
    nome: TracosNegativos.PavioCurto,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Depressao] = {
    id: 21,
    nome: TracosNegativos.Depressao,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Fanatismo] = {
    id: 22,
    nome: TracosNegativos.Fanatismo,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Teimosia] = {
    id: 23,
    nome: TracosNegativos.Teimosia,
    testes_afetados: [Testes.Criatividade],
};

tracosNeg[TracosNegativos.Timidez] = {
    id: 24,
    nome: TracosNegativos.Timidez,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Ingenuidade] = {
    id: 25,
    nome: TracosNegativos.Ingenuidade,
    testes_afetados: [Testes.Criatividade],
};

tracosNeg[TracosNegativos.Monotonia] = {
    id: 26,
    nome: TracosNegativos.Monotonia,
    testes_afetados: [Testes.Agilidade],
};

tracosNeg[TracosNegativos.DiccaoPrejudicada] = {
    id: 27,
    nome: TracosNegativos.DiccaoPrejudicada,
    testes_afetados: [Testes.Manipulacao],
};