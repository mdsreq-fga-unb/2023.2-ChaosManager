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

<p align = "justify"> &emsp;&emsp;
&emsp;&emsp;O Processo Unificado possui um Workflow contendo as atividades que serão realizadas em cada
iteração onde há também a equipe se dividirá para para que cada um seja responsável por cada parte. As atividades desse workflow são as seguintes:
<ul>
  <li>Requisitos: As atividades primárias do fluxo de trabalho Requisitos visam construir o modelo de caso de uso, que captura os requisitos funcionais do sistema que está sendo definido. Este modelo ajuda as partes interessadas do projeto a chegarem a um acordo sobre as capacidades do sistema e as condições às quais ele deve estar em conformidade. O modelo de caso de uso também serve como base para todos os outros trabalhos de desenvolvimento.</li>
  <li>Análise: O fluxo de trabalho de análise visa construir o modelo de análise, o que ajuda os desenvolvedores a refinar e estruturar os requisitos funcionais capturados no modelo de caso de uso. Este modelo contém realizações de casos de uso que se prestam melhor ao trabalho de design e implementação do que os casos de uso.</li>
  <li>Design: visam construir o modelo de design, que descreve as realizações físicas dos casos de uso do modelo de caso de uso, e também o conteúdo do modelo de análise. O modelo de design serve como uma abstração do modelo de desenvolvimento. O fluxo de trabalho Design também se concentra no modelo de implantação, que define a organização física do sistema em termos de nós computacionais.</li>
  <li>Desenvolvimento:  O fluxo de trabalho de desenvolvimento visa construir o modelo de implementação, que descreve como os elementos do modelo de design são empacotados em componentes de software, como arquivos de código-fonte.</li>
  <li>Teste: Os fluxos de trabalho de teste visam construir o modelo de teste, que descreve como os testes de integração e de sistema exercitarão os componentes executáveis ​​do modelo de implementação. O modelo de teste também descreve como a equipe realizará esses testes, bem como os testes unitários. O modelo de teste contém casos de teste que geralmente são derivados diretamente de casos de uso. Os testadores realizam testes de caixa preta usando o texto do caso de uso original e testes de caixa branca das realizações desses casos de uso, conforme especificado no modelo de análise. O modelo de teste também contém os resultados de todos os níveis de teste.</li>
</ul>

&emsp;&emsp;Como visto no diagrama, o Processo unificado possui 4 fases, Início, Elaboração, Implementação e Transição. O fluxo de trabalho de requisitos e de análise serão prioridade na fase de Início. Na fase de Elaboração será focado o fluxo de trabalho do Design e um pouco do desenvolvimento e teste. Nas fases de Implementação e Transição, os fluxos de trabalho de Desenvolvimento e Teste estarão em suas plenas atividades
até que o produto seja entregue.
</p>

<p align = "justify"> &emsp;&emsp;
&emsp;&emsp;Por fim, o Processo Unificado segue um ciclo de vida iterativo, de forma que o uso de iterações pode evitar o impacto de mudanças no projeto, o que gera um gerenciamento de mudanças e abordagens dos pontos de maior risco o mais cedo possível, o que era um dos problemas identificados pela equipe.
</p>

<p align = "justify"> &emsp;&emsp;
Em síntese, o processo de desenvolvimento definido oferece uma estrutura sólida para o desenvolvimento do projeto, com um roteiro claro, gestão organizada, análise detalhada de requisitos e comunicação eficiente da equipe. No contexto do ChaosManager, que lida com sistemas complexos, com muitas funcionalidades, que envolvem cálculos e regras, essa abordagem se destaca como a escolha mais adequada para garantir o sucesso e a eficácia na entrega do produto final.
</p>

### 3.2 Processo de Engenharia de Requisitos

<p align="justify"> &emsp;&emsp;
A Engenharia de requisitos é utilizada para capturar os requisitos necessários a construção de um software de qualidade. Atentando a isso, selecionamos o modelo proposto por George Marsicano (2023), apresentado na Figura 3, onde consta as atividades da Engenharia de Requisitos (ER):</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/ativER.jpeg">

<p>Figura 3: Atividades da Engenharia de Requisitos. George Marsicano (2023)</p>
</div>

Uma breve síntese para rápido entendimento das atividades:

<ul>
  <li>Elicitação e Descoberta: Na fase de Início do UP será usada essa atividade para levantar e descobrir o máximo de requitos que o sistema irá ter, utilizando as atividades de requisitos do UP (ver seção anterior).</li>
  <li>Análise e Consenso: Ainda na fase de Início do UP, será analisado cada requisito em sua forma bruta para ser refinado, priorizado e/ou descartado com base no consenso da equipe com o cliente, utilizando as atividades de Análise do UP (ver seção anterior)</li>
  <li>Declaração: Depois do passo anterior será comunicado todos os requisitos levantados, se houver alguma irregularidade será necessário refazer os passos anteriores, utilizando as atividades de análise e Design do UP (ver seção anterior)</li>
  <li>Representação: Após o passo anterior, através de casos de uso e user stories, serão representados os requisitos com base nas atividades de Design do UP (ver seção anterior)</li>
  <li>Organização e Atualização: Todos os requisitos refinados (user story) e priorizados serão organizados e atualizados se surgir mais algum requisito durante as fases, utilizando as atividades de Design do UP (ver seção anterior)</li>
  <li>Verificação e Validação: Essa atividade será executada após cada um dos passos anteriores para que seja reduzido ao máximo o número de riscos do projeto, fazendo parte das atividades do fluxo de trabalho Teste (ver seção anterior)</li>
</ul>

<p align="justify"> &emsp;&emsp;

Para desenvolver as atividades do projeto é necessário escolher uma abordagem que se adeque às especificidades do software, e para isso utilizaremos um método proposto pela IREB (2022) no qual é apresentado diferentes facetas e configurações 'típicas' para um processo de ER, representado na Figura 4. </p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/facetasireb.png">

<p>Figura 4: Facetas do processo de ER. IREB (2023).</p>
</div>

<p align="justify"> &emsp;&emsp;
Com base no que foi avaliado no sommerville e na abordagem de desenvolvimento ja definida, identificamos que faceta do <b>Processo de ER Participativo</b>  compartilhava seus principais pontos. Os pontos para análise foram:

<ul>
  <li>Customer-specific: o produto foi encomendado por um cliente específico, onde o cliente é a principal fonte de requisitos.</li>
  <li>Iterativo: devido ser um produto grande e complexo, dividí-lo em pequenas iterações se torna uma forma de gerenciar e minimizar os riscos.</li>
  <li>Exploratório: a equipe possui conhecimento de diversas funcionalidades, mas não de todas devido sua extensão, além de não saber de quais serão de fato viáveis ao projeto ou não, de forma que é necessário explorar melhor os requisitos.</li>
</ul>
</p>

### 3.3 Atividades

&emsp;&emsp;Por fim, diante do processo de desenvolvimento estabelecido, foi criado uma tabela para orientar a realização das atividades, orientado pelo ciclo de vida do processo UP. A Tabela 1 apresenta essas atividades.</p>

//TABELA

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
