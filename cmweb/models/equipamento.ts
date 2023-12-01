
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

equipamentos[EquipamentosExistentes.TrajePeles] = {
nome: EquipamentosExistentes.TrajePeles,
PdA: 4,
peso: 2,
};

equipamentos[EquipamentosExistentes.TrajeCouro] = {
nome: EquipamentosExistentes.TrajeCouro,
PdA: 6,
peso: 2.5,
};

equipamentos[EquipamentosExistentes.CotaMalha] = {
nome: EquipamentosExistentes.CotaMalha,
PdA: 13,
peso: 5,
};

equipamentos[EquipamentosExistentes.ArmCouro] = {
nome: EquipamentosExistentes.ArmCouro,
PdA: 12,
peso: 6,
};

equipamentos[EquipamentosExistentes.Peitoral] = {
nome: EquipamentosExistentes.Peitoral,
PdA: 20,
peso: 10,
};

equipamentos[EquipamentosExistentes.ColeteLeve] = {
nome: EquipamentosExistentes.ColeteLeve,
PdA: 30,
peso: 5,
};

equipamentos[EquipamentosExistentes.ColeteMedio] = {
nome: EquipamentosExistentes.ColeteMedio,
PdA: 40,
peso: 6,
};

equipamentos[EquipamentosExistentes.ArmSamurai] = {
nome: EquipamentosExistentes.ArmSamurai,
PdA: 30,
peso: 15,
};

equipamentos[EquipamentosExistentes.ArmCenturiao] = {
nome: EquipamentosExistentes.ArmCenturiao,
PdA: 32,
peso: 15,
};

equipamentos[EquipamentosExistentes.Couraca] = {
nome: EquipamentosExistentes.Couraca,
PdA: 35,
peso: 20,
};

equipamentos[EquipamentosExistentes.ColetePesado] = {
nome: EquipamentosExistentes.ColetePesado,
PdA: 50,
peso: 10,
};

equipamentos[EquipamentosExistentes.ArmCavaleiro] = {
nome: EquipamentosExistentes.ArmCavaleiro,
PdA: 60,
peso: 30,
};

equipamentos[EquipamentosExistentes.EscudoMadeira] = {
nome: EquipamentosExistentes.EscudoMadeira,
PdA: 15,
peso: 5,
};

equipamentos[EquipamentosExistentes.Scutum] = {
nome: EquipamentosExistentes.Scutum,
PdA: 18,
peso: 6,
};

equipamentos[EquipamentosExistentes.Broquel] = {
nome: EquipamentosExistentes.Broquel,
PdA: 12,
peso: 2,
};

equipamentos[EquipamentosExistentes.EscudoFerro] = {
nome: EquipamentosExistentes.EscudoFerro,
PdA: 22,
peso: 5,
};

equipamentos[EquipamentosExistentes.EscudoAco] = {
nome: EquipamentosExistentes.EscudoAco,
PdA: 28,
peso: 4,
};

equipamentos[EquipamentosExistentes.EscudoEletro] = {
nome: EquipamentosExistentes.EscudoEletro,
PdA: 50,
peso: 2,
};

equipamentos[EquipamentosExistentes.CapCouro] = {
nome: EquipamentosExistentes.CapCouro,
PdA: 4,
peso: 1,
};

equipamentos[EquipamentosExistentes.CapObras] = {
nome: EquipamentosExistentes.CapObras,
PdA: 6,
peso: 0.5,
};

equipamentos[EquipamentosExistentes.CapMilitar] = {
nome: EquipamentosExistentes.CapMilitar,
PdA: 12,
peso: 1.5,
};

equipamentos[EquipamentosExistentes.ElmoViking] = {
nome: EquipamentosExistentes.ElmoViking,
PdA: 5,
peso: 1.5,
};

equipamentos[EquipamentosExistentes.ElmoCavaleiro] = {
nome: EquipamentosExistentes.ElmoCavaleiro,
PdA: 10,
peso: 2,
};