export class Estado {
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

enum Estados {
    Medo = 'Medo',
    Desespero = 'Desespero',
    Estresse = 'Estresse',
    Descontrole = 'Descontrole',
    Inconsciente = 'Inconsciente',
    Tontura = 'Tontura',
    Embriaguez = 'Embriaguez',
    Nausea = 'Náusea',
    Hemorragia = 'Hemorragia',
    Fratura = 'Fratura óssea',
    Envenenamento = 'Envenenamento',
    Fome = 'Fome',
    Frio = 'Frio',
    Calor = 'Calor',
    Humilhacao = 'Humilhação',
    TraumaFisico = 'Trauma físico',
    TraumaPsicologico = 'Trauma psicológico',
    MenteControlada = 'Mente controlada',
    EstadoCritico = 'Estado crítico de saúde',
}

interface estado {
    nome: string;
    testes_afetados: Testes[];
}

console.log(Testes.ResMental);


let estados: { [id: string] : estado; } = {};

estados["Medo"] = { 
    nome: "Medo", 
    testes_afetados: [Testes.ResMental, Testes.Competencia] 
};

estados["Desespero"] = { 
    nome: "Desespero", 
    testes_afetados: [Testes.ResMental, Testes.Competencia, Testes.Destreza] 
};

estados["Estresse"] = { 
    nome: "Estresse", 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados["Descontrole"] = { 
    nome: "Descontrole", 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados["Inconsciente"] = { 
    nome: "Inconsciente", 
    testes_afetados: [Testes.ResFisica, Testes.Sobrevivencia] 
};

estados["Tontura"] = { 
    nome: "Tontura", 
    testes_afetados: [Testes.Forca, Testes.Criatividade, Testes.Manipulacao] 
};

estados["Embriaguez"] = { 
    nome: "Embriaguez", 
    testes_afetados: [Testes.ResMental, Testes.Competencia, Testes.Destreza] 
};

estados["Náusea"] = { 
    nome: "Náusea", 
    testes_afetados: [Testes.Forca, Testes.Criatividade, Testes.Competencia] 
};

estados["Hemorragia"] = { 
    nome: "Hemorragia", 
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Destreza] 
};

estados["Fratura óssea"] = { 
    nome: "Fratura óssea", 
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Destreza] 
};

estados["Envenenamento"] = { 
    nome: "Envenenamento", 
    testes_afetados: [Testes.Forca, Testes.Sobrevivencia] 
};

estados["Fome"] = { 
    nome: "Fome", 
    testes_afetados: [Testes.Forca, Testes.Sobrevivencia] 
};

estados["Frio"] = { 
    nome: "Frio", 
    testes_afetados: [Testes.Forca, Testes.Agilidade] 
};

estados["Calor"] = { 
    nome: "Calor", 
    testes_afetados: [Testes.Forca, Testes.Agilidade] 
};

estados["Humilhação"] = { 
    nome: "Humilhação", 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados["Trauma físico"] = { 
    nome: "Trauma físico", 
    testes_afetados: [Testes.Forca, Testes.ResFisica] 
};

estados["Trauma psicológico"] = { 
    nome: "Trauma psicológico", 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Competencia] 
};

estados["Mente controlada"] = { 
    nome: "Mente controlada", 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Competencia] 
};

estados["Estado crítico de saúde"] = { 
    nome: "Estado crítico de saúde", 
    testes_afetados: [
    Testes.Agilidade,
    Testes.Competencia,
    Testes.Criatividade,
    Testes.Destreza,
    Testes.Forca,
    Testes.Manipulacao,
    Testes.ResFisica,
    Testes.ResMental, 
    Testes.Sobrevivencia,
    Testes.Sorte] 
};
