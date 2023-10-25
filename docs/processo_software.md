---
hide:
  - toc
---

## 3.1 Critérios Sommerville

<p style="text-align:justify; text-indent:20px;"> 
Ao escolhermos uma abordagem de desenvolvimento de software, nos orientamos através dos critérios propostos por Sommerville (2018) cujo método oferece uma série de perguntas a serem respondidas, envolvendo questões técnicas, humanas e organizacionais. Apresentamos abaixo a Figura 1 representando os fatores de Sommerville (2018) com suas respectivas respostas.
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/sommerville.png">
<p><b>Figura 1:</b> Fatores que influenciam a escolha do desenvolvimento dirigido por plano ou ágil. (Fonte: Sommerville, 2018).</p>
</div>

##### Questões Técnicas

**Qual é o tamanho do sistema que está sendo desenvolvido?** 

<p style="text-align:justify; text-indent:20px;">
É um sistema grande, possuindo alta complexidade.
</p>

**Que tipo de sistema está sendo desenvolvido?** 

<p style="text-align:justify; text-indent:20px;">
Uma aplicação Web.
</p>

**Qual é a vida útil prevista para o sistema?** 

<p style="text-align:justify; text-indent:20px;">
A princípio, vida útil de curta a média duração.
</p>

**O sistema está sujeito a controle externo?** 

<p style="text-align:justify; text-indent:20px;">
Não.
</p>

##### Questões Humanas

**Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento?** 

<p style="text-align:justify; text-indent:20px;">
Médio, tendo em vista que alguns podem não conhecer as ferramentas a serem utilizadas.
</p>

**Como está organizado o time de desenvolvimento?** 

<p style="text-align:justify; text-indent:20px;">
O time contém 6 pessoas, possuindo uma organização multidisciplinar em todas as tarefas.
</p>

**Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema?** 

<p style="text-align:justify; text-indent:20px;">
Descrito no <a href="../visao_produto">tópico 1.4</a>.
</p>

##### Questões Organizacionais

**É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação — talvez por motivos contratuais?** 

<p style="text-align:justify; text-indent:20px;">
Sim, por mais que existam outros sistemas modelos para serem observados e estudados (Roll20, Taulukko, Kanka), há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto solicitado pelo cliente em decorrência do tempo de desenvolvimento disponível.
</p>

**É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido?** 

<p style="text-align:justify; text-indent:20px;">
Sim.
</p>

**Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?** 

<p style="text-align:justify; text-indent:20px;">
Estão disponiveis de maneira parcial. Tendo mais liberdade no começo do projeto.
</p>

**Existem questões culturais que possam afetar o desenvolvimento do sistema?** 

<p style="text-align:justify; text-indent:20px;">
Não.
</p>

<p style="text-align:justify; text-indent:20px;">
Ao analisar as respostas fornecidas no modelo Sommerville, concluimos que o sistema é grande e complexo, há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto em decorrência do tempo de desenvolvimento disponível, além de o grupo não possui completo conhecimento em todas as ferramentas a serem utilizadas, o que requer um alto grau de organização para um bom desempenho e desenvolver do projeto.
</p>



## 3.2 Abordagem, Ciclo de Vida e Processo de Software

<p style="text-align:justify; text-indent:20px;">
Após a análise das respostas chegamos ao resultado final de uma abordagem dirigida a plano baseado no processo UP (Processo Unificado), tornando mais eficiente o pouco tempo que teríamos para o desenvolvimento, aproveitando melhor o tempo disponível para o planejamento. A Figura 2 demonstra o funcionamento do Processo Unificado:
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/up.png">
<p><b>Figura 2:</b> Diagrama do Processo Unificado.</p>
</div>

<p style="text-align:justify; text-indent:20px;">
O Processo Unificado foi selecionado por tornar claro a necessidade de atribuições de tarefas aos envolvidos diretamente no desenvolvimento do projeto. Nesse processo são definidas o quanto antes quais as etapas e os artefatos que serão envolvidos durante o processo. Essa característica do processo foi um ponto importante para lidar com a questão do tempo e conhecimento distinto dos integrantes da equipe.
</p>



## 3.3 Processo de Engenharia de Requisitos

<p style="text-align:justify; text-indent:20px;">
A Engenharia de requisitos é utilizada para capturar os requisitos necessários a construção de um software de qualidade. Atentando a isso, selecionamos o modelo proposto por George Marsicano (2023), apresentado na Figura 3, onde consta as atividades da Engenharia de Requisitos (ER):</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/ativER.jpeg">
<p><b>Figura 3:</b> Atividades da Engenharia de Requisitos. George Marsicano (2023)</p>
</div>

#### Uma breve síntese para rápido entendimento das atividades:

<ul style="text-align:justify;">
  <li>Elicitação e Descoberta: extrair uma resposta ou encontrar algo não conhecido.</li>
  <li>Análise e Consenso: analisar os requisitos "brutos" e conciliar suas divergências.</li>
  <li>Declaração: comunicação dos requisitos entre os envolvidos.</li>
  <li>Representação: apresentação dos requisitos em modelos e/ou visualizações do produto, sendo informal, semiformal e formal.</li>
  <li>Verificação e Validação: os requisitos definem a solução correta e foram realizados da maneira correta.</li>
  <li>Organização e Atualização: como os requisitos serão estruturados, rastreados, refinados e priorizados, além de mantê-los sempre em seu estado mais atual.</li>
</ul>

&nbsp;
<p style="text-align:justify; text-indent:20px;">
Para desenvolver as atividades do projeto é necessário escolher uma abordagem que se adeque às especificidades do software, e para isso utilizaremos um método proposto pela IREB (2022) no qual é apresentado diferentes facetas e configurações 'típicas' para um processo de ER, representado na Figura 4. </p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/facetasireb.png">
<p><b>Figura 4:</b>  Facetas do processo de ER. IREB (2023).</p>
</div>


<p style="text-align:justify; text-indent:20px;">
Com base no que foi avaliado no sommerville e na abordagem de desenvolvimento ja definida, identificamos que faceta do <b>Processo de ER Contratual</b>  compartilhava seus principais pontos. Os pontos para análise foram:
</p>

<ul style="text-align:justify;">
  <li>Customer-specific: o produto foi encomendado por um cliente específico, onde o cliente é a principal fonte de requisitos.</li>
  <li>Linear para Iterativo: devido ser um produto grande e complexo, dividí-lo em pequenas iterações se torna uma forma de gerenciar e minimizar os riscos.</li>
  <li>Prescritivo: a equipe possui conhecimento de diversas funcionalidades, e há um cliente e outros produtos similares para ajudar a elicitar e priorizar os requisitos.</li>
</ul>

## 3.3 Atividades

<p style="text-align:justify; text-indent:20px;">
Por fim, diante do processo de desenvolvimento estabelecido, foi criado tabelas para orientar a realização das atividades, orientado pelo ciclo de vida do processo UP.
</p>

#### Engenharia de requisitos do processo unificado

<p style="text-align:justify; text-indent:20px;">
Conversão da Engenharia de Requisitos do Processo Unificado para novo modelo.
</p>
<p style="text-align:justify; text-indent:20px;">
O Processo Unificado já possui uma ER, com determinadas tarefas a serem seguidas. Entretanto, para esse projeto optamos por adaptar a ER original ao modelo proposto pelo George Marscicano. A Tabela 1 apresenta as atividades de Engenharia de Software a serem realizadas no PU e seu objetivo, a Tabela 2 apresenta a nova representação do conjunto de tarefas a serem realizadas após correlacionar os objetivos em comum.
</p>

| Atividades    | Objetivo         |
| :-----------: | :--------------: |
| [Captar um Vocabulário Comum](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/capture_common_vocabulary_9BA76DA7.html)                        | Na disciplina Requisitos, você deve definir um vocabulário comum que utilize os termos e as expressões mais frequentes do domínio de problemas.                                                                     |
| [Desenvolver a Visão](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_vision_D9584F04.html)                                           | Esta tarefa descreve como desenvolver a visão geral para o sistema, incluindo o problema a ser resolvido, as partes interessadas chave, o escopo/limite do sistema, os recursos-chave do sistema e quaisquer restrições.       |
| [Desenvolver Especificações Suplementares](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_supplementary_specification_52FC4CAE.html) | Capturar os requisitos que não são prontamente capturados em Casos de Uso, como requisitos de conformidade, de documentação, qualidades do sistema ou restrições.                                     |
| [Desenvolver Plano de Gerenciamento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_rm_plan_89FFEB9A.html)             | A finalidade dessa tarefa é desenvolver um [Plano de Desenvolvimento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_requirements_management_plan_1CA2ED11.html) que especifique as informações e os mecanismos de controle que serão coletados e utilizados para medir, reportar e controlar mudanças nos requisitos de produtos. |
| [Detalhar os Requisitos de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_software_requirements_A7F0A215.html)              | A finalidade dessa tarefa é coletar, detalhar e organizar o conjunto (pacote) de produtos de trabalho que descrevem completamente os requisitos de software do sistema.                                          |
| [Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html)                                    | <p>Descrever um ou mais dos fluxos de eventos do caso de uso em detalhes suficientes para permitir que o desenvolvimento do software seja iniciado nele.</p><p>Detalhar o caso de uso para a compreensão e satisfação do representante agente ou cliente.</p>                                                                                                        |
| [Estruturar o Modelo de Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/structure_use_case_model_93D8F44.html)                   | Esta tarefa é onde o modelo de casos de uso é estruturado, para tornar os requisitos mais fáceis de compreender e de manter. Isso inclui alavancar a semelhança entre casos de usos e agentes e identificar o comportamento excepcional e opcional.                                                                                                                  |
| [Gerenciar Dependências](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/manage_dependencies_4F6CEFAA.html)                                   | A finalidade dessa tarefa é utilizar os atributos e a rastreabilidade dos requisitos do projeto para auxiliar no gerenciamento do escopo do projeto e gerenciar os requisitos variáveis.                     |
| [Identificar Pedidos dos Envolvidos](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/elicit_stakeholder_requests_vc_5B7948C2.html)           | Pedidos dos Investidores são obtidos e reunidos ativamente a partir de origens existentes para obter uma "lista de desejos" do que os diferentes investidores do projeto (clientes, usuários, patrocinadores do produto) esperam ou desejam que o sistema inclua, juntamente com informações sobre como cada pedido foi considerado pelo projeto.                    |
| [Localizar Atores e Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/find_actors_and_use_cases_1ACB35F0.html)                    | Essa tarefa é onde os agentes e casos de uso são identificados para suportar os requisitos que estão sendo implementados. Identificar os agentes e os casos de uso explicitamente define o escopo do sistema.    |
| [Priorizar Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/prioritize_use_cases_vc_5D6764AD.html)                              | Essa tarefa é onde os agentes e casos de uso são identificados para suportar os requisitos que estão sendo implementados. Identificar os agentes e os casos de uso explicitamente define o escopo do sistema.  |
| [Revisar Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/review_requirements_5DF661FE.html)                                       | A finalidade dessa tarefa é garantir formalmente que os resultados das tarefas dos requisitos estejam em conformidade com a visão que o cliente tem do sistema.                                                                                                                                                                                                      |

<div align="center" style="text-align: center">
<p><b>Tabela 1:</b>  ER do Processo Unificado.</p>
</div>

| Atividades novo modelo    | Atividades adaptadas do PU   |
| :-----------------------: | :--------------------------: |
| Elicitação e Descoberta   | [Identificar Pedidos dos Envolvidos](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/elicit_stakeholder_requests_vc_5B7948C2.html)<br>[Localizar Atores e Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/find_actors_and_use_cases_1ACB35F0.html)<br>[Captar um Vocabulário Comum](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/capture_common_vocabulary_9BA76DA7.html) |
| Análise e Consenso        |   Não tinha atividade equivalente  |
| Declaração                | [Especificação Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) <br>[Desenvolver Especificações Suplementares](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_supplementary_specification_52FC4CAE.html)<br>[Desenvolver a Visão](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_vision_D9584F04.html)   |
| Representação             | [Modelagem Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) (Representar os fluxos de evento produzidos no [Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) )     |
| Verificação e Validação   | [Revisar Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/review_requirements_5DF661FE.html)    |
| Organização e Atualização | [Detalhar os Requisitos de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_software_requirements_A7F0A215.html)<br>[Desenvolver Plano de Gerenciamento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_rm_plan_89FFEB9A.html)<br>[Gerenciar Dependências](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/manage_dependencies_4F6CEFAA.html)<br>[Priorizar Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/prioritize_use_cases_vc_5D6764AD.html)    |

<div align="center" style="text-align: center">
<p><b>Tabela 2:</b> Adaptação para o modelo de ER de George Marsciano.</p>
</div>

#### Tabela de tarefas

<p style="text-align:justify; text-indent:20px;">
Para auxiliar a execução das atividades a serem realizadas durante o desenvolvimento do projeto, foi definido quais tarefas devem ser executadas no fluxo de trabalho de requisito, que passa por todas as 4 fases do processo unificado (Iniciação, Elaboração, Construção e Transição), quais métodos e quais ferramentas serão utilizados para executá-las e qual a entrega gerado ao fim da atividade. 
</p>

##### Requisitos

| Atividades  | Método  | Ferramenta   | Entregas  |
| :---------: | :-----: | :----------: | :--------: |
| Elicitação e Descoberta   | Entrevista, Análise Documental | Teams, Livro de regras Caos&Manager, Word  | Lista de Requisitos Funcionais e Não Funcionais Brutos  |
| Análise e Consenso        | Reunião com o cliente, reunião entre a equipe  | Teams, Word | Lista de Requisitos Funcionais e Não Funcionais Refinada |
| Declaração                | Casos de Uso, Especificação de Casos de Uso | Teams, Lucidchart, gitpages  | Especificação de Casos de Uso |
| Representação             | Diagramas(UML, SysML, BPMN)  | Lucidchart, Figma  | Diagrama Caso de Uso |
| Verificação e Validação   | Checklist de Verificação, Revisão, Feedback | Word, site UFPE | Qualidade dos casos de uso verificadas e validadas se condizem com o objetivo do projeto  |
| Organização e Atualização | Análise de Custo-Benefício  | Word, Mural | Backlog de requisitos |
 
## 3.4 Referências

> Handbook IREB CPRE Foundation Level, Version 1.1.0, september 2022.

> SCOTT, Kendall. The Unified process explained. Nov 26, 2001. Disponível em: <https://www.informit.com/articles/article.aspx?p=24671&seqNum=8>

> MARSICANO, George. Requisitos de Software: Introdução a Engenharia de Requisitos (ER). Brasília, 2023. Disponível em: <https://aprender3.unb.br/course/view.php?id=20236>. Acesso em: 16 set. 2023.

> SOMMERVILLE, Ian. Engenharia de software. 10.ed. São Paulo: Pearson Education do Brasil, 2018.


## 3.5 Histórico de versão

| Data  | Versão | Descrição                                                        | Autor                                          |
| :---: | :----: | ---------------------------------------------------------------- | ---------------------------------------------- |
| 16/09 |  1.0   | Processo de desenvolvimento de software                          | Gustavo França e Oscar de Brito                |
| 16/09 |  1.1   | Atualiza os tópicos 3.1 e 3.2 e adiciona o tópico de referências | Gustavo França e Oscar de Brito                |
| 17/09 |  1.2   | Corrige o tópico 3.1 para adequar ao sommerville                 | Larissa Gomes                                  |
| 18/09 |  1.3   | Corrige o tópico 3.2 para adequar ao sommerville                 | Larissa Gomes                                  |
| 26/09 |  1.4   | Criação das tabelas de atividades                                | Gustavo França, Oscar de Brito e Larissa Gomes |
| 24/10 |  2.0   | Realização das modificações sugeridas pós apresentação           | Gustavo França, Oscar de Brito e Larissa Gomes |

