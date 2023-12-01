import { Testes } from "@/models/teste";

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

var estados: { [id: string] : estado; } = {};

estados[Estados.Medo] = { 
    nome: Estados.Medo, 
    testes_afetados: [Testes.ResMental, Testes.Competencia] 
};

estados[Estados.Desespero] = { 
    nome: Estados.Desespero, 
    testes_afetados: [Testes.ResMental, Testes.Competencia, Testes.Destreza] 
};

estados[Estados.Estresse] = { 
    nome: Estados.Estresse, 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados[Estados.Descontrole] = { 
    nome: Estados.Descontrole, 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados[Estados.Inconsciente] = { 
    nome: Estados.Inconsciente, 
    testes_afetados: [Testes.ResFisica, Testes.Sobrevivencia] 
};

estados[Estados.Tontura] = { 
    nome: Estados.Tontura, 
    testes_afetados: [Testes.Forca, Testes.Criatividade, Testes.Manipulacao] 
};

estados[Estados.Embriaguez] = { 
    nome: Estados.Embriaguez, 
    testes_afetados: [Testes.ResMental, Testes.Competencia, Testes.Destreza] 
};

estados[Estados.Nausea] = { 
    nome: Estados.Nausea, 
    testes_afetados: [Testes.Forca, Testes.Criatividade, Testes.Competencia] 
};

estados[Estados.Hemorragia] = { 
    nome: Estados.Hemorragia, 
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Destreza] 
};

estados[Estados.Fratura] = { 
    nome: Estados.Fratura, 
    testes_afetados: [Testes.Forca, Testes.ResFisica, Testes.Destreza] 
};

estados[Estados.Envenenamento] = { 
    nome: Estados.Envenenamento, 
    testes_afetados: [Testes.Forca, Testes.Sobrevivencia] 
};

estados[Estados.Fome] = { 
    nome: Estados.Fome, 
    testes_afetados: [Testes.Forca, Testes.Sobrevivencia] 
};

estados[Estados.Frio] = { 
    nome: Estados.Frio, 
    testes_afetados: [Testes.Forca, Testes.Agilidade] 
};

estados[Estados.Calor] = { 
    nome: Estados.Calor, 
    testes_afetados: [Testes.Forca, Testes.Agilidade] 
};

estados[Estados.Humilhacao] = { 
    nome: Estados.Humilhacao, 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Manipulacao] 
};

estados[Estados.TraumaFisico] = { 
    nome: Estados.TraumaFisico, 
    testes_afetados: [Testes.Forca, Testes.ResFisica] 
};

estados[Estados.TraumaPsicologico] = { 
    nome: Estados.TraumaPsicologico, 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Competencia] 
};

estados[Estados.MenteControlada] = { 
    nome: Estados.MenteControlada, 
    testes_afetados: [Testes.ResMental, Testes.Criatividade, Testes.Competencia] 
};

estados[Estados.EstadoCritico] = { 
    nome: Estados.EstadoCritico, 
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
