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
    id: 1,
    nome: TracosNegativos.LimitacaoFisicaSensorial,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Competencia, Testes.ResMental],
};

tracosNeg[TracosNegativos.DoencaDegenerativa] = {
    id: 1,
    nome: TracosNegativos.DoencaDegenerativa,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Sobrevivencia],
};

tracosNeg[TracosNegativos.Psicopatia] = {
    id: 1,
    nome: TracosNegativos.Psicopatia,
    testes_afetados: [Testes.Sorte, Testes.Criatividade],
};

tracosNeg[TracosNegativos.Autodestruicao] = {
    id: 1,
    nome: TracosNegativos.Autodestruicao,
    testes_afetados: [Testes.ResMental, Testes.Criatividade],
};

tracosNeg[TracosNegativos.DoencaCronicaMental] = {
    id: 2,
    nome: TracosNegativos.DoencaCronicaMental,
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Competencia, Testes.ResMental],
};

tracosNeg[TracosNegativos.VulneravelTempQuimica] = {
    id: 2,
    nome: TracosNegativos.VulneravelTempQuimica,
    testes_afetados: [Testes.Sobrevivencia],
};

tracosNeg[TracosNegativos.FobiaIncontrolavel] = {
    id: 2,
    nome: TracosNegativos.FobiaIncontrolavel,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Alergia] = {
    id: 2,
    nome: TracosNegativos.Alergia,
    testes_afetados: [Testes.Sobrevivencia],
};

// Adicione os outros traços seguindo o mesmo padrão...

tracosNeg[TracosNegativos.Negligencia] = {
    id: 3,
    nome: TracosNegativos.Negligencia,
    testes_afetados: [Testes.Competencia],
};

tracosNeg[TracosNegativos.Distracao] = {
    id: 3,
    nome: TracosNegativos.Distracao,
    testes_afetados: [Testes.Destreza],
};

tracosNeg[TracosNegativos.Insensatez] = {
    id: 3,
    nome: TracosNegativos.Insensatez,
    testes_afetados: [Testes.Criatividade],
};

tracosNeg[TracosNegativos.Compulsao] = {
    id: 3,
    nome: TracosNegativos.Compulsao,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Preguica] = {
    id: 4,
    nome: TracosNegativos.Preguica,
    testes_afetados: [Testes.Competencia],
};

tracosNeg[TracosNegativos.Pessimismo] = {
    id: 4,
    nome: TracosNegativos.Pessimismo,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Covardia] = {
    id: 4,
    nome: TracosNegativos.Covardia,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Desonra] = {
    id: 4,
    nome: TracosNegativos.Desonra,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Desnutricao] = {
    id: 5,
    nome: TracosNegativos.Desnutricao,
    testes_afetados: [Testes.Forca],
};

tracosNeg[TracosNegativos.BaixaEstatura] = {
    id: 5,
    nome: TracosNegativos.BaixaEstatura,
    testes_afetados: [Testes.ResFisica],
};

tracosNeg[TracosNegativos.Repulsividade] = {
    id: 5,
    nome: TracosNegativos.Repulsividade,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.ConhecidoComoInjusto] = {
    id: 5,
    nome: TracosNegativos.ConhecidoComoInjusto,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.PavioCurto] = {
    id: 6,
    nome: TracosNegativos.PavioCurto,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Depressao] = {
    id: 6,
    nome: TracosNegativos.Depressao,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Fanatismo] = {
    id: 6,
    nome: TracosNegativos.Fanatismo,
    testes_afetados: [Testes.ResMental],
};

tracosNeg[TracosNegativos.Teimosia] = {
    id: 6,
    nome: TracosNegativos.Teimosia,
    testes_afetados: [Testes.Criatividade],
};

// Adicione os outros traços seguindo o mesmo padrão...

tracosNeg[TracosNegativos.Timidez] = {
    id: 7,
    nome: TracosNegativos.Timidez,
    testes_afetados: [Testes.Manipulacao],
};

tracosNeg[TracosNegativos.Ingenuidade] = {
    id: 7,
    nome: TracosNegativos.Ingenuidade,
    testes_afetados: [Testes.Criatividade],
};

tracosNeg[TracosNegativos.Monotonia] = {
    id: 7,
    nome: TracosNegativos.Monotonia,
    testes_afetados: [Testes.Agilidade],
};

tracosNeg[TracosNegativos.DiccaoPrejudicada] = {
    id: 7,
    nome: TracosNegativos.DiccaoPrejudicada,
    testes_afetados: [Testes.Manipulacao],
};