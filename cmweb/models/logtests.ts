import { Campanha } from "@/models/campanha";
import { Ficha } from "@/models/ficha";
import { Classes } from "@/models/item-magia";
import { Estados  } from "@/models/estado";
import { ArmasExistentes } from "@/models/arma";
import { EquipamentosExistentes } from "@/models/equipamento";
import { Testes } from "@/models/teste";
import { TracosPositivos } from "@/models/traco-positivo";
import { TracosNegativos } from "@/models/traco-negativo";
import { rolarDados, realizarTeste } from "@/models/teste";

console.log("----------Teste campanha----------");
let listaDeCampanhas: Campanha[] = [];
listaDeCampanhas.push(
  new Campanha(
    "Campanha 1",
    "Historia da ordem e do caos",
    "senha",
  )
);

listaDeCampanhas.push(
  new Campanha(
    "Campanha 2",
    "",
    "",
  )
);
console.log(listaDeCampanhas);

let ficha = new Ficha(true);
let ficha_ = new Ficha(false);
listaDeCampanhas[0].addFicha(ficha);
listaDeCampanhas[1].addFicha(ficha_);
console.log(listaDeCampanhas);
console.log(listaDeCampanhas[0]);

console.log("\n----------Teste Ficha----------");

ficha.Dados(["aaa","bbb","string","string","string","string","string","string"], ["string"]);
ficha.Recursos([3,1,10,1,1]);
ficha.Atributos([5,1,1,1,1]);

console.log("\n----------Dados----------");
console.log(ficha.dados);
console.log(ficha.recursos);
console.log(ficha.atributos);
console.log("Capacidade de combate: " + ficha.CapacidadeCombate());

console.log("\n----------Teste Tracos----------");
console.log("Lista traços positivos possui itens: " + (ficha.tracosPositivos.length > 0));
console.log("Lista traços negativos possui itens: " + (ficha.tracosNegativos.length > 0));
console.log("Certo: " + ficha.addTracoPositivo(TracosPositivos.SentidosAgucados, 3));
console.log("Errado:" + ficha.addTracoNegativo(TracosNegativos.LimitacaoFisicaSensorial, 3));
console.log("Penalidade em Testes (Competência): " + ficha.penalidadeTraco(Testes.Competencia));
console.log("Certo: " + ficha.addTracoNegativo(TracosNegativos.DoencaDegenerativa, 1));
console.log("Errado: " + ficha.addTracoPositivo(TracosPositivos.SaudeDeFerro, 3))
console.log("Penalidade em Testes (Força): " + ficha.penalidadeTraco(Testes.Forca));
console.log("Certo: " + ficha.addTracoNegativo(TracosNegativos.DoencaCronicaMental, 5));
console.log("Penalidade em Testes (Competência): " + ficha.penalidadeTraco(Testes.Competencia));
console.log("\n");
console.log(ficha.tracosPositivos);
console.log(ficha.tracosNegativos);
console.log("Lista traços positivos possui itens: " + (ficha.tracosPositivos.length > 0));
console.log("Lista traços negativos possui itens: " + (ficha.tracosNegativos.length > 0));
ficha.removeTracoNegativo(1);
console.log("\nApós remoção indice 1: ");
console.log(ficha.tracosNegativos);
console.log("Penalidade em Testes (Competência): " + ficha.penalidadeTraco(Testes.Competencia));
ficha.removeTracoNegativo(0);
console.log("\n Após remoção indice 0: ");
console.log(ficha.tracosNegativos);
console.log("Penalidade em Testes (Força): " + ficha.penalidadeTraco(Testes.Forca));
console.log("Lista traços positivos possui itens: " + (ficha.tracosPositivos.length > 0));
console.log("Lista traços negativos possui itens: " + (ficha.tracosNegativos.length > 0));
ficha.addTracoNegativo(TracosNegativos.DoencaDegenerativa, 1);

console.log("\n----------Teste Estados----------");
ficha.addEstado(Estados.Medo, 5);
ficha.addEstado(Estados.Desespero, 2);
ficha.addEstado(Estados.Estresse, 3);
console.log(ficha.estados);
console.log("\nPenalidade em Testes (Competência): " + ficha.penalidadeEstado(Testes.Competencia));
console.log("Penalidade em Testes (Destreza): " + ficha.penalidadeEstado(Testes.Destreza));
console.log("Penalidade em Testes (Resistencia Mental): " + ficha.penalidadeEstado(Testes.ResMental));
ficha.removeEstado(2);
console.log("\n Após remoção indice 2: ");
console.log(ficha.estados);
console.log("Penalidade em Testes (Resistencia Mental): " + ficha.penalidadeEstado(Testes.ResMental));

console.log("\n----------Teste Equipamentos----------");
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("Adicionado Equipamento Existente Traje de Peles");
ficha.addEquipamentoExistente(EquipamentosExistentes.TrajePeles)
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("Certo: " + ficha.addEquipamento("Capacete", 4, 3));
console.log("Errado: " + ficha.addEquipamento(EquipamentosExistentes.TrajePeles, 4, 2));
console.log(ficha.equipamentos);
console.log("Peso carregado: " + ficha.pesoCarregado);
ficha.removeEquipamento(0);
console.log("\n Após remoção indice 0: ");
console.log(ficha.equipamentos);
console.log("Peso carregado: " + ficha.pesoCarregado);
ficha.removeEquipamento(0);

console.log("\n----------Teste Armas----------");
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("Adicionado Arma Existente Alabarda");
ficha.addArmaExistente(ArmasExistentes.Alabarda)
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("Certo: " + ficha.addArma("Cutelo", 40, Testes.Destreza, 3));
console.log("Errado: " + ficha.addArma(ArmasExistentes.Alabarda, 40, Testes.Destreza, 3));
console.log(ficha.armas);
console.log("Peso carregado: " + ficha.pesoCarregado);
ficha.removeArma(0);
console.log("\n Após remoção indice 0: ");
console.log(ficha.armas);
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("Teste usado no Cutelo: " + ficha.armas[0].teste);
ficha.removeArma(0);

console.log("\n----------Teste Itens----------");
ficha.addMagia("Bola de fogo", Classes.Conjuracao);
ficha.addMagia("Enfeitiçar", Classes.Encantamentos);
ficha.addMagia("Virar gato", Classes.Transmutacao);
console.log(ficha.magias);
console.log("\n Após remoção indice 2: ");
ficha.removeMagia(2);
console.log(ficha.magias);

console.log("\n----------Teste Itens----------");
console.log("Peso carregado: " + ficha.pesoCarregado);
ficha.addItem("moedas", 0.1);
ficha.addItem("livro", 1);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);

console.log("\nApós quantidade alterada para 40 das moedas: ");
ficha.alterarQtd(0, 40);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("\nApós quantidade alterada para 60 das moedas: ");
ficha.alterarQtd(0, 60);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("\nApós quantidade alterada para 20 das moedas: ");
ficha.alterarQtd(0, 20);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);
console.log("\nApós quantidade alterada para 0 das moedas: ");
ficha.alterarQtd(0, 0);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);

console.log("\n Após remoção indice 0: ");
ficha.removeItem(0);
console.log(ficha.itens);
console.log("Peso carregado: " + ficha.pesoCarregado);

console.log("\n----------Teste Realizar teste----------");
let d20 = rolarDados();
console.log(d20);
console.log(realizarTeste(ficha, Testes.Competencia, 5, d20));
console.log(ficha.recursos.PE);
d20 = rolarDados();
console.log(d20);
console.log(realizarTeste(ficha, Testes.Destreza, 5, d20));
console.log(ficha.recursos.PE);
d20 = rolarDados();
console.log(d20);
console.log(realizarTeste(ficha, Testes.ResMental, 5, d20));
console.log(ficha.recursos.PE);
d20 = rolarDados();
console.log(d20);
console.log(realizarTeste(ficha, Testes.Competencia, 6, d20));
console.log(ficha.recursos.PE);