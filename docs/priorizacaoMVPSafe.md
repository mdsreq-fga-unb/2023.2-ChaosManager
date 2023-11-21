---
hide:
  - toc
---

# Priorização e definição do MVP

## Introdução
<p style="text-align:justify; text-indent:20px;"> 
O principal propósito das estratégias de priorização de requisitos é fornecer orientação na seleção das funções ou funcionalidades mais cruciais em um sistema em desenvolvimento. Isso envolve a elaboração de estratégias e parâmetros específicos para otimizar a resposta a diferentes tipos de desafios. A fim de realizar essa tarefa com eficácia, é necessário estabelecer critérios claros e cuidadosamente considerados. Para definir as prioridades de cada requisito foram utilizadas duas técnicas: MoSCoW, First Things First(FTF). A priorização foi realizada com base na declaração dos requisitos feita no <a href="https://mdsreq-fga-unb.github.io/2023.2-ChaosManager/backlog/">Backlog safe</a>: 
</p> 

<p style="text-align:justify; text-indent:20px;"> 
O MVP - Minimum Viable Product, é um conceito amplamente utilizado no desenvolvimento de produtos . Um MVP é uma versão simplificada de um produto ou serviço que contém apenas os recursos essenciais necessários para atender às necessidades básicas dos clientes e validar a viabilidade do conceito. 
</p>

## Técnicas Utilizadas

<p style="text-align:justify; text-indent:20px;"> 
A priorização dos requisitos foi feita por meio das seguintes técnicas:
</p>

- <a href="#1">First Things First (FTF)<sup></sup></a>
- <a href="#2">MosCoW<sup></sup></a>

### <p id="1" align="justify"> Técnica de Priorização "First Things First" (FTF) </p>

<p style="text-align:justify; text-indent:20px;"> 
A técnica "First Things First"[1] é um método de priorização que envolve a análise ponderada de valor(valor de negócio), custo(complexidade) e riscos(viabilidade) associados a cada requisito, atribuindo pesos a cada um deles de forma a ter mais peso no cálculo o mais importante para o projeto. Essa técnica é empregada para estabelecer uma hierarquia de prioridades para os requisitos a serem implementados.
</p>

### Metodologia - FTF

<p style="text-align:justify; text-indent:20px;"> 
Nessa técnica de priorização específica, é criada uma tabela que engloba os riscos, custos, benefícios e a penalidade relativa de cada requisito identificado para o projeto. Além disso, busca-se equilibrar as perspectivas do cliente e do desenvolvedor.
</p>

Aqui está o procedimento:

1. **Listagem de Requisitos:** Compile todos os requisitos em uma tabela, excluindo aqueles que são dependentes de outros requisitos.

2. **Avaliação de Benefício Relativo:** Avalie o benefício relativo que cada recurso proporcionaria ao cliente ou ao negócio em uma escala de 1 a 9, onde 1 representa a menor relevância e 9 a maior relevância.

3. **Estimativa de Penalidade Relativa:** Estime a penalidade que o negócio sofreria caso o recurso não fosse incluído, também em uma escala de 1 a 9, com 1 indicando a menor penalidade e 9 a maior penalidade.

4. **Cálculo do Valor Total:** A coluna "Valor Total" é calculada somando o produto do "Benefício Relativo" pelo "Peso Relativo" e o produto da "Penalidade Relativa" pelo "Peso Relativo". Neste caso, o peso relativo é definido como 1.

5. **Avaliação de Custo Relativo:** Avalie o custo relativo da implementação de cada requisito em uma escala de 1 a 9.

6. **Avaliação de Risco Relativo:** Avalie o grau relativo de risco associado a cada requisito em uma escala de 1 a 9.

7. **Cálculo da Prioridade:** Calcule a prioridade de cada requisito utilizando a fórmula: "Valor % / (Custo % * Peso do Custo + Risco % * Peso do Risco)". Os pesos de custo e risco neste caso são ambos definidos como 1.

8. **Ordenação da Lista:** Ordene a lista em ordem decrescente com base nas prioridades calculadas.

<p style="text-align:justify; text-indent:20px;"> 
Para o nosso  contexto, foi escolhida a escala de 1 a 5. A escolha de uma escala de 1 a 5 visa simplificar o processo de avaliação e torná-lo mais prático, especialmente se o contexto do projeto não exige uma granularidade tão alta quanto uma escala de 1 a 9. A Figura 1 mostra a priorização realizada das features do projeto. Essa técnica foi escolhida para avaliar as features por considerarmos que seria mais precisa em quais conjuntos de funcionalidades deveriamos focar devido seus critérios de avaliação.
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/priorizacaoMVP/ftf.png">
<p><b>Figura 1:</b> Priorização das features pelo FTF. </p>
</div>

<p style="text-align:justify; text-indent:20px;"> 
Apenas as features com prioridade maior que 0,25 foram consideradas viáveis para o MVP, então passamos para priorizar as User Stories.
</p>

## <p id="2" align="justify"> Priorização MoSCoW

O Método MoSCoW é uma técnica útil para priorizar requisitos e auxiliar a equipe de desenvolvimento na tomada de decisões. Esta estrutura visa alcançar dois principais objetivos:

1. Avaliar a prioridade das tarefas em um projeto.
2. Alinhar os stakeholders em relação ao que deve ser realizado, considerando a ordem de importância dos elementos.

### Metodologia - MoSCoW

A sigla **MoSCoW** representa:

- **Must-Have**
- **Should**
- **Could-Have**
- **Would/Want/Won't-Have**

#### Must-Have

Os requisitos classificados como **Must-Have** incluem tarefas essenciais para a conclusão do projeto e requerem priorização máxima. Tudo o que é classificado como Must-Have é crucial para o produto. Essas iniciativas têm alto impacto e agregam valor. A não realização delas prejudica a experiência do cliente, tornando-as as demandas mais urgentes a serem tratadas pelo time.

#### Should-Have

Os **Should-Have** incluem elementos importantes para o projeto, embora não sejam vitais, quando comparados às atividades Must-Have.

#### Could-Have

Os requisitos classificados como **Could-Have** apresentam menor criticidade em comparação com os Should-Have. Ainda assim, contribuem para o projeto, embora com um impacto menor em caso de ausência.

#### Would/Want/Won't-Have

Os elementos **Would/Want/Won't-Have** referem-se a requisitos com pouca ou nenhuma relevância para o projeto. A presença ou ausência desses requisitos não afeta a conclusão satisfatória do projeto.

<p style="text-align:justify; text-indent:20px;"> 
A Figura 2 mostra a priorização realizada das US do projeto. Essa técnica foi escolhida para avaliar as US por considerarmos que seria mais adequada ao que deveria ou não ter no produto dentro das features principais.
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/priorizacaoMVP/moscow.png">
<p><b>Figura 2:</b> Priorização das US pelo MoSCoW.</p>
</div>

## Mínimo Produto Viável

<p style="text-align:justify; text-indent:20px;"> 
Foi utilizado o Canvas MVP do Lean Inception para definir o MVP como apresentado na Figura 3. Em resultados esperados, é indicado também quais objetivos secundários esperamos atingir naquele resultado e quais os requisitos responsáveis por tornar isso possível. Esses resultados juntos visam atingir o resultado principal do projeto.
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/priorizacaoMVP/mvp.png">
<p><b>Figura 3:</b> MVP.</p>
</div>

<iframe src='https://app.mural.co/embed/37616178-ef92-45f6-98c0-bea833159e45'
  width='100%'
  height='480px'
  style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef'
  sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox'></iframe>

## Bibliografia 

[1] WIEGERS Karl E. First Things First: Prioritizing Requirements. Setembro de 1999. Disponível no [link](https://www.processimpact.com/articles/prioritizing.pdf).

## Histórico de versão

| Data  | Versão | Descrição                            | Autor                          |
| :---: | :----: | ------------------------------------ | ------------------------------ |
| 25/10 |  1.0   | Criação da priorização de requisitos | Oscar de Brito e Larissa Gomes |