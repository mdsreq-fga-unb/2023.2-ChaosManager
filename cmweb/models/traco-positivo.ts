import { Testes } from "@/models/teste";

export class TracoPositivo {
    traco: TracosPositivos;
    valor: number;
  
    constructor(traco: TracosPositivos, valor: number) {
        this.traco = traco;
        this.valor = valor;
    }
    
    afetaTeste(teste: Testes):boolean{
        return tracosPos[this.traco].testes_afetados.includes(teste);
    }
    
    static toObj(objeto: any): TracoPositivo {
        return new TracoPositivo(objeto.traco, objeto.valor);
    }
}

export enum TracosPositivos {
    SentidosAgucados = "Sentidos aguçados",
    SaudeDeFerro = "Saúde de ferro",
    EmpatiaPura = "Empatia pura",
    Serenidade = "Serenidade",
    RegeneracaoRapida = "Regeneração rápida",
    ResistenciaTemperaturaQuimica = "Res. à temperatura/química**",
    ValentiaDesmedida = "Valentia desmedida à*",
    Imunidade = "Imunidade à*",
    Perfeccionismo = "Perfeccionismo",
    Concentracao = "Concentração",
    Sensatez = "Sensatez",
    Moderacao = "Moderação",
    Diligencia = "Diligência",
    Otimismo = "Otimismo",
    Coragem = "Coragem",
    Honradez = "Honradez",
    Hipertrofia = "Hipertrofia",
    Robustez = "Robustez",
    Atraente = "Atraente",
    ConhecidoComoJusto = "Conhecido como justo",
    Paciencia = "Paciência",
    BomHumor = "Bom humor",
    Ceticismo = "Ceticismo",
    Flexibilidade = "Flexibilidade",
    Extroversao = "Extroversão",
    Perspicacia = "Perspicácia",
    Sagacidade = "Sagacidade",
    Eloquencia = "Eloquência",
}

interface Tracos {
    id: number;
    nome: string;
    testes_afetados: Testes[];
}

export let tracosPos: { [id: string]: Tracos; } = {};

tracosPos[TracosPositivos.SentidosAgucados] = {
    id: 0,
    nome: TracosPositivos.SentidosAgucados,
    testes_afetados: [Testes.Competencia, Testes.Agilidade],
};

tracosPos[TracosPositivos.SaudeDeFerro] = {
    id: 1,
    nome: TracosPositivos.SaudeDeFerro,
    testes_afetados: [Testes.Destreza, Testes.Sobrevivencia],
};

tracosPos[TracosPositivos.EmpatiaPura] = {
    id: 2,
    nome: TracosPositivos.EmpatiaPura,
    testes_afetados: [Testes.Criatividade, Testes.Sorte],
};

tracosPos[TracosPositivos.Serenidade] = {
    id: 3,
    nome: TracosPositivos.Serenidade,
    testes_afetados: [Testes.ResMental, Testes.Criatividade],
};

tracosPos[TracosPositivos.RegeneracaoRapida] = {
    id: 4,
    nome: TracosPositivos.RegeneracaoRapida,
    testes_afetados: [Testes.ResFisica],
};

tracosPos[TracosPositivos.ResistenciaTemperaturaQuimica] = {
    id: 5,
    nome: TracosPositivos.ResistenciaTemperaturaQuimica,
    testes_afetados: [Testes.Sobrevivencia],
};

tracosPos[TracosPositivos.ValentiaDesmedida] = {
    id: 6,
    nome: TracosPositivos.ValentiaDesmedida,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Imunidade] = {
    id: 7,
    nome: TracosPositivos.Imunidade,
    testes_afetados: [Testes.Sobrevivencia],
};

tracosPos[TracosPositivos.Perfeccionismo] = {
    id: 8,
    nome: TracosPositivos.Perfeccionismo,
    testes_afetados: [Testes.Competencia],
};

tracosPos[TracosPositivos.Concentracao] = {
    id: 9,
    nome: TracosPositivos.Concentracao,
    testes_afetados: [Testes.Destreza],
};

tracosPos[TracosPositivos.Sensatez] = {
    id: 10,
    nome: TracosPositivos.Sensatez,
    testes_afetados: [Testes.Criatividade],
};

tracosPos[TracosPositivos.Moderacao] = {
    id: 11,
    nome: TracosPositivos.Moderacao,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Diligencia] = {
    id: 12,
    nome: TracosPositivos.Diligencia,
    testes_afetados: [Testes.Competencia],
};

tracosPos[TracosPositivos.Otimismo] = {
    id: 13,
    nome: TracosPositivos.Otimismo,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Coragem] = {
    id: 14,
    nome: TracosPositivos.Coragem,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Honradez] = {
    id: 15,
    nome: TracosPositivos.Honradez,
    testes_afetados: [Testes.Manipulacao],
};

tracosPos[TracosPositivos.Hipertrofia] = {
    id: 16,
    nome: TracosPositivos.Hipertrofia,
    testes_afetados: [Testes.Forca],
};

tracosPos[TracosPositivos.Robustez] = {
    id: 17,
    nome: TracosPositivos.Robustez,
    testes_afetados: [Testes.ResFisica],
};

tracosPos[TracosPositivos.Atraente] = {
    id: 18,
    nome: TracosPositivos.Atraente,
    testes_afetados: [Testes.Manipulacao],
};

tracosPos[TracosPositivos.ConhecidoComoJusto] = {
    id: 19,
    nome: TracosPositivos.ConhecidoComoJusto,
    testes_afetados: [Testes.Manipulacao],
};

tracosPos[TracosPositivos.Paciencia] = {
    id: 20,
    nome: TracosPositivos.Paciencia,
    testes_afetados: [Testes.Manipulacao],
};

tracosPos[TracosPositivos.BomHumor] = {
    id: 21,
    nome: TracosPositivos.BomHumor,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Ceticismo] = {
    id: 22,
    nome: TracosPositivos.Ceticismo,
    testes_afetados: [Testes.ResMental],
};

tracosPos[TracosPositivos.Flexibilidade] = {
    id: 23,
    nome: TracosPositivos.Flexibilidade,
    testes_afetados: [Testes.Criatividade],
};

tracosPos[TracosPositivos.Extroversao] = {
    id: 24,
    nome: TracosPositivos.Extroversao,
    testes_afetados: [Testes.Manipulacao],
};

tracosPos[TracosPositivos.Perspicacia] = {
    id: 25,
    nome: TracosPositivos.Perspicacia,
    testes_afetados: [Testes.Criatividade, Testes.Agilidade],
};

tracosPos[TracosPositivos.Sagacidade] = {
    id: 26,
    nome: TracosPositivos.Sagacidade,
    testes_afetados: [Testes.Criatividade, Testes.Agilidade],
};

tracosPos[TracosPositivos.Eloquencia] = {
    id: 27,
    nome: TracosPositivos.Eloquencia,
    testes_afetados: [Testes.Manipulacao],
};
