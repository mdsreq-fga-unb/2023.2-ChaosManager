export class Equipamento {
  nome: string;
  PdA: number;
  peso: number;

  constructor(nome: string, PdA: number, peso: number) {
    this.nome = nome;
    this.peso = peso;
    this.PdA = PdA;
  }
  
}

export enum EquipamentosExistentes{
TrajePeles = 'Traje de peles',
TrajeCouro = 'Traje de couro',
CotaMalha = 'Cota de malha',
ArmCouro = 'Armadura de couro de crocodilo',
Peitoral = 'Peitoral de ferro',
ColeteLeve = 'Colete à prova de balas (leve)',
ColeteMedio = 'Colete à prova de balas (médio)',
ArmSamurai = 'Ō-yoroi/armadura samurai',
ArmCenturiao = 'Armadura de centurião',
Couraca = 'Couraça de aço',
ColetePesado = 'Colete à prova de balas (pesado)',
ArmCavaleiro = 'Armadura de cavaleiro',
EscudoMadeira = 'Escudo de madeira',
Scutum = 'Scutum (escudo romano)',
Broquel = 'Broquel (escudo pequeno)',
EscudoFerro = 'Escudo de ferro',
EscudoAco = 'Escudo de aço',
EscudoEletro = 'Escudo eletrônico',
CapCouro = 'Capacete de couro',
CapObras = 'Capacete de obras',
CapMilitar = 'Capacete militar moderno',
ElmoViking = 'Elmo viking',
ElmoCavaleiro = 'Elmo de cavaleiro',
}


interface Equipamentos {
nome: string;
PdA: number;
peso: number;
}

export var equipamentos: { [id: string] : Equipamentos; } = {};

equipamentos["Traje de peles"] = {
nome: "Traje de peles",
PdA: 4,
peso: 2,
};

equipamentos["Traje de couro"] = {
nome: "Traje de couro",
PdA: 6,
peso: 2.5,
};

equipamentos["Cota de malha"] = {
nome: "Cota de malha",
PdA: 13,
peso: 5,
};

equipamentos["Armadura de couro de crocodilo"] = {
nome: "Armadura de couro de crocodilo",
PdA: 12,
peso: 6,
};

equipamentos["Peitoral de ferro"] = {
nome: "Peitoral de ferro",
PdA: 20,
peso: 10,
};

equipamentos["Colete à prova de balas (leve)"] = {
nome: "Colete à prova de balas (leve)",
PdA: 30,
peso: 5,
};

equipamentos["Colete à prova de balas (médio)"] = {
nome: "Colete à prova de balas (médio)",
PdA: 40,
peso: 6,
};

equipamentos["Ō-yoroi/armadura samurai"] = {
nome: "Ō-yoroi/armadura samurai",
PdA: 30,
peso: 15,
};

equipamentos["Armadura de centurião"] = {
nome: "Armadura de centurião",
PdA: 32,
peso: 15,
};

equipamentos["Couraça de aço"] = {
nome: "Couraça de aço",
PdA: 35,
peso: 20,
};

equipamentos["Colete à prova de balas (pesado)"] = {
nome: "Colete à prova de balas (pesado)",
PdA: 50,
peso: 10,
};

equipamentos["Armadura de cavaleiro"] = {
nome: "Armadura de cavaleiro",
PdA: 60,
peso: 30,
};

equipamentos["Escudo de madeira"] = {
nome: "Escudo de madeira",
PdA: 15,
peso: 5,
};

equipamentos["Scutum (escudo romano)"] = {
nome: "Scutum (escudo romano)",
PdA: 18,
peso: 6,
};

equipamentos["Broquel (escudo pequeno)"] = {
nome: "Broquel (escudo pequeno)",
PdA: 12,
peso: 2,
};

equipamentos["Escudo de ferro"] = {
nome: "Escudo de ferro",
PdA: 22,
peso: 5,
};

equipamentos["Escudo de aço"] = {
nome: "Escudo de aço",
PdA: 28,
peso: 4,
};

equipamentos["Escudo eletrônico"] = {
nome: "Escudo eletrônico",
PdA: 50,
peso: 2,
};

equipamentos["Capacete de couro"] = {
nome: "Capacete de couro",
PdA: 4,
peso: 1,
};

equipamentos["Capacete de obras"] = {
nome: "Capacete de obras",
PdA: 6,
peso: 0.5,
};

equipamentos["Capacete militar moderno"] = {
nome: "Capacete militar moderno",
PdA: 12,
peso: 1.5,
};

equipamentos["Elmo viking"] = {
nome: "Elmo viking",
PdA: 5,
peso: 1.5,
};

equipamentos["Elmo de cavaleiro"] = {
nome: "Elmo de cavaleiro",
PdA: 10,
peso: 2,
};