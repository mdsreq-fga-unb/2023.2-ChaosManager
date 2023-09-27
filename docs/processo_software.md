## 3. Processo de desenvolvimento de software

### 3.1 Critérios Sommerville

<p align="justify"> &emsp;&emsp;

Ao escolhermos uma abordagem de desenvolvimento de software, nos orientamos através dos critérios propostos por Sommerville (2018) cujo método oferece uma série de perguntas a serem respondidas, envolvendo questões técnicas, humanas e organizacionais. Apresentamos abaixo a Figura 1 representando os fatores de Sommerville (2018) com suas respectivas respostas.</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/sommerville.png">

<p>Figura 1: Fatores que influenciam a escolha do desenvolvimento dirigido por plano ou ágil. Sommerville (2018).</p>
</div>

#### Questões Técnicas

- **Qual é o tamanho do sistema que está sendo desenvolvido?** É um sistema grande, possuindo alta complexidade.

- **Que tipo de sistema está sendo desenvolvido?** Uma aplicação Web.

- **Qual é a vida útil prevista para o sistema?** A princípio, vida útil de curta a média duração.

- **O sistema está sujeito a controle externo?** Não.

#### Questões Humanas

- **Qual é o nível de competência dos projetistas e programadores do time de desenvolvimento?** Médio, tendo em vista que alguns podem não conhecer as ferramentas a serem utilizadas.

- **Como está organizado o time de desenvolvimento?** O time contém 6 pessoas, possuindo uma organização multidisciplinar em todas as tarefas.

- **Quais são as tecnologias disponíveis para apoiar o desenvolvimento do sistema?** Descrito no [tópico 1.4](#14-tecnologias-a-serem-utilizadas).

#### Questões Organizacionais

- **É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação — talvez por motivos contratuais?** Sim, por mais que existam outros sistemas modelos para serem observados e estudados (Roll20, Taulukko, Kanka), há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto solicitado pelo cliente em decorrência do tempo de desenvolvimento disponível.

- **É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido?** Sim.

- **Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?** Estão disponiveis de maneira parcial. Tendo mais liberdade no começo do projeto.

- **Existem questões culturais que possam afetar o desenvolvimento do sistema?** Não.

<p align="justify"> &emsp;&emsp;
Analisando as respostas fornecidas no modelo Sommerville, concluimos os seguintes pontos:

&emsp;&emsp;O sistema é grande e complexo, há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto em decorrência do tempo de desenvolvimento disponível, além de o grupo não possui completo conhecimento em todas as ferramentas a serem utilizadas, o que requer um alto grau de organização para um bom desempenho e desenvolver do projeto. </p>

### 3.2 Abordagem, Ciclo de Vida e Processo de Software

<p align = "justify"> &emsp;&emsp;
Após a análise das respostas chegamos ao resultado final de uma abordagem dirigida a plano baseado no processo UP (Processo Unificado), tornando mais eficiente o pouco tempo que teríamos para o desenvolvimento, aproveitando melhor o tempo disponível para o planejamento. A Figura 2 demonstra o funcionamento do Processo Unificado:</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/up.png">
<p>Figura 2: Diagrama do Processo Unificado.</p>
</div>

<p align = "justify"> &emsp;&emsp;
&emsp;&emsp;O Processo Unificado foi selecionado por tornar claro a necessidade de atribuições de tarefas aos envolvidos diretamente no desenvolvimento do projeto. Nesse processo são definidas o quanto antes quais as etapas e os artefatos que serão envolvidos durante o processo. Essa característica do processo foi um ponto importante para lidar com a questão do tempo e conhecimento distinto dos integrantes da equipe.
</p>

<p align="justify"> &emsp;&emsp;

Para desenvolver as atividades do projeto é necessário escolher uma abordagem que se adeque às especificidades do software, e para isso utilizaremos um método proposto pela IREB (2022) no qual é apresentado diferentes facetas e configurações 'típicas' para um processo de ER, representado na Figura 4. </p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/facetasireb.png">

<p>Figura 4: Facetas do processo de ER. IREB (2023).</p>
</div>

<p align="justify"> &emsp;&emsp;
Com base no que foi avaliado no sommerville e na abordagem de desenvolvimento ja definida, identificamos que faceta do <b>Processo de ER Contratual</b>  compartilhava seus principais pontos. Os pontos para análise foram:

<ul>
  <li>Customer-specific: o produto foi encomendado por um cliente específico, onde o cliente é a principal fonte de requisitos.</li>
  <li>Linear para Iterativo: devido ser um produto grande e complexo, dividí-lo em pequenas iterações se torna uma forma de gerenciar e minimizar os riscos.</li>
  <li>Prescritivo: a equipe possui conhecimento de diversas funcionalidades, e há um cliente e outros produtos similares para ajudar a levantar e priorizar os requisitos.</li>
</ul>
</p>

### 3.3 Atividades

&emsp;&emsp;Por fim, diante do processo de desenvolvimento estabelecido, foi criado tabelas para orientar a realização das atividades, orientado pelo ciclo de vida do processo UP.</p>

#### TABELAS

#### Engenharia de requisitos do processo unificado

Conversão da Engenharia de Requisitos do Processo Unificado para novo modelo

O Processo Unificado já possui uma ER, com determinadas tarefas a serem seguidas. Entretanto, para esse projeto optamos por adaptar a ER original ao modelo proposto pelo George Marscicano. A Tabela X apresenta as atividades de Engenharia de Software a serem realizadas no PU e seu objetivo, a Tabela Y apresenta a nova representação do conjunto de tarefas a serem realizadas após correlacionar os objetivos em comum.

|Atividades|Objetivo|
| :-: | :-: |
|[Captar um Vocabulário Comum](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/capture_common_vocabulary_9BA76DA7.html)|Na disciplina Requisitos, você deve definir um vocabulário comum que utilize os termos e as expressões mais frequentes do domínio de problemas.|
|[Desenvolver a Visão](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_vision_D9584F04.html)|Esta tarefa descreve como desenvolver a visão geral para o sistema, incluindo o problema a ser resolvido, as partes interessadas chave, o escopo/limite do sistema, os recursos-chave do sistema e quaisquer restrições.|
|[Desenvolver Especificações Suplementares](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_supplementary_specification_52FC4CAE.html)|Capturar os requisitos que não são prontamente capturados em Casos de Uso, como requisitos de conformidade, de documentação, qualidades do sistema ou restrições.|
|[Desenvolver Plano de Gerenciamento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_rm_plan_89FFEB9A.html)|A finalidade dessa tarefa é desenvolver um [Plano de Desenvolvimento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_requirements_management_plan_1CA2ED11.html) que especifique as informações e os mecanismos de controle que serão coletados e utilizados para medir, reportar e controlar mudanças nos requisitos de produtos. |
|[Detalhar os Requisitos de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_software_requirements_A7F0A215.html)|A finalidade dessa tarefa é coletar, detalhar e organizar o conjunto (pacote) de produtos de trabalho que descrevem completamente os requisitos de software do sistema.|
|[Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html)|<p>Descrever um ou mais dos fluxos de eventos do caso de uso em detalhes suficientes para permitir que o desenvolvimento do software seja iniciado nele.</p><p>Detalhar o caso de uso para a compreensão e satisfação do representante agente ou cliente.</p>|
|[Estruturar o Modelo de Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/structure_use_case_model_93D8F44.html)|Esta tarefa é onde o modelo de casos de uso é estruturado, para tornar os requisitos mais fáceis de compreender e de manter. Isso inclui alavancar a semelhança entre casos de usos e agentes e identificar o comportamento excepcional e opcional.|
|[Gerenciar Dependências](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/manage_dependencies_4F6CEFAA.html)|A finalidade dessa tarefa é utilizar os atributos e a rastreabilidade dos requisitos do projeto para auxiliar no gerenciamento do escopo do projeto e gerenciar os requisitos variáveis.|
|[Identificar Pedidos dos Envolvidos](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/elicit_stakeholder_requests_vc_5B7948C2.html)|Pedidos dos Investidores são obtidos e reunidos ativamente a partir de origens existentes para obter uma "lista de desejos" do que os diferentes investidores do projeto (clientes, usuários, patrocinadores do produto) esperam ou desejam que o sistema inclua, juntamente com informações sobre como cada pedido foi considerado pelo projeto.|
|[Localizar Atores e Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/find_actors_and_use_cases_1ACB35F0.html)|Essa tarefa é onde os agentes e casos de uso são identificados para suportar os requisitos que estão sendo implementados. Identificar os agentes e os casos de uso explicitamente define o escopo do sistema.|
|[Priorizar Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/prioritize_use_cases_vc_5D6764AD.html)|Essa tarefa é onde os agentes e casos de uso são identificados para suportar os requisitos que estão sendo implementados. Identificar os agentes e os casos de uso explicitamente define o escopo do sistema.|
|[Revisar Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/review_requirements_5DF661FE.html)|A finalidade dessa tarefa é garantir formalmente que os resultados das tarefas dos requisitos estejam em conformidade com a visão que o cliente tem do sistema.|



|Atividades novo modelo|Atividades adaptadas do PU|
| :- | :- |
|Elicitação e Descoberta|[Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) [Desenvolver Especificações Suplementares](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_supplementary_specification_52FC4CAE.html)[Identificar Pedidos dos Envolvidos](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/elicit_stakeholder_requests_vc_5B7948C2.html)[Localizar Atores e Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/find_actors_and_use_cases_1ACB35F0.html)[Captar um Vocabulário Comum](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/capture_common_vocabulary_9BA76DA7.html)|
|Análise e Consenso|[Estruturar o Modelo de Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/structure_use_case_model_93D8F44.html) |
|Declaração |Especificação[ Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) (Gera documentação do [Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) )[Desenvolver a Visão](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_vision_D9584F04.html) |
|Representação |[Modelagem Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) (Representar os fluxos de evento produzidos no [Detalhar um Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) )|
|Verificação e Validação|[Revisar Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/review_requirements_5DF661FE.html) |
|Organização e Atualização|[Detalhar os Requisitos de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_software_requirements_A7F0A215.html)[Desenvolver Plano de Gerenciamento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_rm_plan_89FFEB9A.html)[Gerenciar Dependências](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/manage_dependencies_4F6CEFAA.html)[Priorizar Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/tasks/prioritize_use_cases_vc_5D6764AD.html)|

Tabela de tarefas 

Para auxiliar a execução das atividades a serem realizadas durante o desenvolvimento do projeto, foi definido quais tarefas devem ser executadas nos 5 fluxos de trabalho principais, quais métodos e quais ferramentas serão utilizados para executá-las e qual o artefato gerado ao fim da atividade. Em algumas atividades determinados artefatos são atualizados após sua execução, entretanto foram adicionados apenas os artefatos gerados específicos por aquela tarefa. Além disso, muitos documentos citados são uma parte produzida para um artefato maior, que não necessariamente terão um artefato específico para documentá-los todos. Por fim, devido o prazo curto da disciplina, algumas atividades ou artefatos que seriam destinados a projetos de grande porte foram desconsiderados inicialmente.

Requisitos



|Atividades|Método|Ferramenta|Artefatos|
| :- | :- | :- | :- |
|Elicitação e Descoberta|Entrevista, histórias e cenários, introspecção, Análise Documental|Teams|<p>[Agente](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_actor_1F9CE9.html) </p><p>Especificação[ Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/detail_a_use_case_D9BECBF4.html) </p><p>[Esboço Seqüencial](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_storyboard_33EEA89E.html)</p><p>[Pedidos dos Envolvidos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_stakeholder_requests_A89D2BF9.html)</p><p>[Especificações Suplementares](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_supplementary_specification_F5ACAA22.html)</p>|
|Análise e Consenso|<p>Casos de Uso,</p><p>Entrevista,</p><p>Prototipagem</p>|Gitpages, Teams, Lucidchart, Word|<p>[Modelo de Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_usecase_model_EF15E534.html?nodeId=e43280ab)</p>|
|Declaração |Casos de Uso, Documento de Visão de Produto, Especificação de Requisitos, Análise Documental|Teams, Lucidchart, gitpages|<p>[Casos de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_usecase_A5D30E62.html)</p><p>[Atributos de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_requirements_attributes_EFE5ABAC.html)</p><p>[Glossário](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_glossary_A5D79A0C.html)</p><p>[Visão](https://www.cin.ufpe.br/~gta/rup-vc/value_creation/workproducts/rup_vision_vc_EDBFA94C.html)</p>|
|Representação |Diagramas (UML, SysML, BPMN), Prototipagem, Design Thinking|Lucidchart, Figma, Mirko|[Diagrama Caso de Uso](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_usecase_A5D30E62.html)|
|Verificação e Validação|Checklist de Verificação, Revisão, Feedback|Gitpages, Word, site UFPE|[Registro de Revisão](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_review_record_CA816ECE.html)|
|Organização e Atualização|Product backlog, Casos de Uso, Feedback|` `Github, Lucidchart|<p>[Requisito de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_software_requirement_32CECE14.html)</p><p>[Plano de Gerenciamento de Requisitos](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_requirements_management_plan_1CA2ED11.html) </p>|

Análise e Design

|Atividades|Método|Ferramenta|Artefatos|
| :- | :- | :- | :- |
|<p>[Análise Arquitetural](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/architectural_analysis_2B9BE03.html)</p><p></p>|Diagrama UML|Lucidchart|[Documento de Arquitetura de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_software_architecture_document_C367485C.html)|
|[Projetar a Interface com o Usuário](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/design_user_interface_DAABE09F.html)|Prototipagem de baixa fidelidade|Miro|[Mapa de Navegação](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_navmap_73AF74E2.html)|
|[Criar um Protótipo da Interface do Usuário](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/prototype_user_interface_C495CB55.html)|Prototipagem de Alta fidelidade|Figma|[Protótipo da Interface do Usuário](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_user_interface_prototype_7237E5AA.html?nodeId=ee708887)|

Implantação

|Atividades|Método|Ferramenta|Artefatos|
| :- | :- | :- | :- |
|[Desenvolver Manual de Guia de Estilo](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_manual_styleguide_EF16A491.html)|Entrevista, avaliação heurística.|Teams|[Manual de Guia de Estilo](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_manual_styleguide_2E6E0412.html)|
|[Desenvolver Material de Suporte](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/develop_end_user_support_materials_E46AC109.html)|Análise documental, teste de usabilidade|Google, artefatos gerados|[Material de Suporte do Usuário](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_support_material_F6EEF661.html)|

Implementação

|Atividades|Método|Ferramenta|Artefatos|
| :- | :- | :- | :- |
|Desenvolvimento do software|Desenvolvimento|Git, github, IDEs|Código-fonte|
|[Estruturar o Modelo de Implementação](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/structure_implementation_model_E0E0DEF9.html)|Análise documental, Representação do modelo (UML)|Lucidchart, gitpages|[Modelo de Implementação](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_implementation_model_5858DB65.html)|
|[Implementar Teste do Desenvolvedor](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/implement_developer_test_66FE6BEE.html)|Teste unitário|IDE, github actions|[Teste do Desenvolvedor](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_developer_test_44109C5.html)|

Teste

|Atividades|Método|Ferramenta|Artefatos|
| :- | :- | :- | :- |
|[Definir Elementos de Testabilidade](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/define_testability_elements_B792858D.html)|Mapeamento das ferramentas e especificações dos testes|Gitpages, github actions|<p>[Arquitetura para Automatização de Testes](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_automation_architecture_650DD06A.html)</p><p>[Design de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_design_DD152CC4.html)</p><p>[Especificação da Interface de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_interface_specification_F1C8A203.html)</p>|
|<p>[Definir Detalhes do Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/define_test_details_2B6BD36F.html)</p><p></p>|Identificação das prioridades, entradas e saídas de cada teste|gitpages|<p>[Caso de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_case_8AFEC963.html)</p><p>[Dados de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_data_AD333F7A.html)</p><p>[Modelo de Análise de Carga de Trabalho](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_workload_analysis_model_E86A32FF.html)</p><p>[Script de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_script_2140080.html)</p>|
|[Executar o Conjunto de Testes](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/execute_test_suite_492795DE.html)|Teste local e automatizado|Github actions, IDEs|[Log de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_log_50821860.html)|
|[Definir Abordagem do Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/define_test_approach_51A370C3.html)|Planejamento de testes|gitpages|[Plano de Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_plan_53712941.html)|
|[Determinar Resultados do Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/tasks/determine_test_results_630C9EC9.html)|Análise de resultados dos testes locais e automatizados|IDEs, github actions|<p>[Resultados do Teste](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_results_189F0BEF.html)</p><p>[Resumo de Avaliação de Testes](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_test_evaluation_summary_D9B4016B.html)</p>|


### 3.4 Referências

> Handbook IREB CPRE Foundation Level, Version 1.1.0, september 2022.

> SCOTT, Kendall. The Unified process explained. Nov 26, 2001. Disponível em: <https://www.informit.com/articles/article.aspx?p=24671&seqNum=8>

> MARSICANO, George. Requisitos de Software: Introdução a Engenharia de Requisitos (ER). Brasília, 2023. Disponível em: <https://aprender3.unb.br/course/view.php?id=20236>. Acesso em: 16 set. 2023.

> SOMMERVILLE, Ian. Engenharia de software. 10.ed. São Paulo: Pearson Education do Brasil, 2018.

### 3.5 Histórico de versão

| Data  | Versão |                            Descrição                             |             Autor              |
| :---: | :----: | :--------------------------------------------------------------: | :----------------------------: |
| 16/09 |  1.0   |             Processo de desenvolvimento de software              | Gustavo França, Oscar de Brito |
| 16/09 |  1.1   | Atualiza os tópicos 3.1 e 3.2 e adiciona o tópico de referências | Gustavo França, Oscar de Brito |
| 17/09 |  1.2   |         Corrige o tópico 3.1 para adequar ao sommerville         |         Larissa Gomes          |
| 18/09 |  1.3   |         Corrige o tópico 3.2 para adequar ao sommerville         |         Larissa Gomes          |
| 26/09 |  1.4   |        Criação das tabelas de atividades        |         Gustavo França, Oscar de Brito, Larissa Gomes          |