import { Testes } from "@/models/estado";

export class Tracos {
    nome: string;
    testes_afetados: Testes[] = [];
    valor: number;
  
    constructor(nome: string, valor: number) {
      this.nome = nome;
      this.valor = valor;
      this.testes_afetados = estados[nome].testes_afetados;
    }
    
    afetaTeste(teste: Testes):boolean{
      return this.testes_afetados.includes(teste);
    }
    
}

enum Estados {
    Medo,
    Desespero,
    Estresse,
    Descontrole,
    Inconsciente,
    Tontura,
    Embriaguez,
    Náusea,
    Hemorragia,
    "Fratura óssea",
    Envenenamento,
    Fome,
    Frio,
    Calor,
    Humilhação,
    "Trauma físico",
    "Trauma psicológico",
    "Mente controlada",
    "Estado crítico de saúde",
}

interface estado {
    nome: string;
    testes_afetados: Testes[];
}

var estados: { [id: string] : estado; } = {};

estados["Medo"] = { 
    nome: "Medo", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Competência] 
};

estados["Desespero"] = { 
    nome: "Desespero", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Competência, Testes.Destreza] 
};

estados["Estresse"] = { 
    nome: "Estresse", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Criatividade, Testes.Manipulação] 
};

estados["Descontrole"] = { 
    nome: "Descontrole", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Criatividade, Testes.Manipulação] 
};

estados["Inconsciente"] = { 
    nome: "Inconsciente", 
    testes_afetados: [Testes["Resistência Física"], Testes.Sobrevivência] 
};

estados["Tontura"] = { 
    nome: "Tontura", 
    testes_afetados: [Testes.Força, Testes.Criatividade, Testes.Manipulação] 
};

estados["Embriaguez"] = { 
    nome: "Embriaguez", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Competência, Testes.Destreza] 
};

estados["Náusea"] = { 
    nome: "Náusea", 
    testes_afetados: [Testes.Força, Testes.Criatividade, Testes.Competência] 
};

estados["Hemorragia"] = { 
    nome: "Hemorragia", 
    testes_afetados: [Testes.Força, Testes["Resistência Física"], Testes.Destreza] 
};

estados["Fratura óssea"] = { 
    nome: "Fratura óssea", 
    testes_afetados: [Testes.Força, Testes["Resistência Física"], Testes.Destreza] 
};

estados["Envenenamento"] = { 
    nome: "Envenenamento", 
    testes_afetados: [Testes.Força, Testes.Sobrevivência] 
};

estados["Fome"] = { 
    nome: "Fome", 
    testes_afetados: [Testes.Força, Testes.Sobrevivência] 
};

estados["Frio"] = { 
    nome: "Frio", 
    testes_afetados: [Testes.Força, Testes.Agilidade] 
};

estados["Calor"] = { 
    nome: "Calor", 
    testes_afetados: [Testes.Força, Testes.Agilidade] 
};

estados["Humilhação"] = { 
    nome: "Humilhação", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Criatividade, Testes.Manipulação] 
};

estados["Trauma físico"] = { 
    nome: "Trauma físico", 
    testes_afetados: [Testes.Força, Testes["Resistência Física"]] 
};

estados["Trauma psicológico"] = { 
    nome: "Trauma psicológico", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Criatividade, Testes.Competência] 
};

estados["Mente controlada"] = { 
    nome: "Mente controlada", 
    testes_afetados: [Testes["Resistência Mental"], Testes.Criatividade, Testes.Competência] 
};

estados["Estado crítico de saúde"] = { 
    nome: "Estado crítico de saúde", 
    testes_afetados: [
    Testes.Agilidade,
    Testes.Competência,
    Testes.Criatividade,
    Testes.Destreza,
    Testes.Força,
    Testes.Manipulação,
    Testes["Resistência Física"],
    Testes["Resistência Mental"], 
    Testes.Sobrevivência,
    Testes.Sorte] 
};
