<h1 align="center"> Chaos Manager </h1>
<h3 align="center"> 2023.2 </h3>

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

- **É importante ter uma especificação e um projeto (design) bem detalhados antes de passar para a implementação — talvez por motivos contratuais?** Sim, por mais que existam outros sistemas modelos para serem observados e estudados (Roll20, Taulukko, Kanka), há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto em decorrência do tempo de desenvolvimento disponível.

- **É realista uma estratégia de entrega incremental, na qual o software é entregue aos clientes ou outros stakeholders e um rápido feedback é obtido?** Sim. 

- **Os representantes do cliente estarão disponíveis e dispostos a participar do time de desenvolvimento?** Estão disponiveis de maneira parcial. Tendo mais liberdade no começo do projeto. 

- **Existem questões culturais que possam afetar o desenvolvimento do sistema?** Não.

<p align="justify"> &emsp;&emsp;
Analisando as respostas fornecidas no modelo Sommerville, concluimos os seguintes pontos:

&emsp;&emsp;O sistema é grande e complexo, há uma grande quantidade de funcionalidades, o que torna essencial especificar adequadamente o que estará dentro do escopo do projeto em decorrência do tempo de desenvolvimento disponível, além de o grupo não possui completo conhecimento em todas as ferramentas a serem utilizadas, o que requer um alto grau de organização para um bom desempenho e desenvolver do projeto.  </p>

### 3.2 Abordagem, Ciclo de Vida e Processo de Software

<p align = "justify"> &emsp;&emsp;
Após a análise das respostas chegamos ao resultado final de uma abordagem dirigida a plano baseado no processo UP (Processo Unificado), tornando mais eficiente o pouco tempo que teríamos para o desenvolvimento, aproveitando melhor o tempo disponível para o planejamento. A Figura 2 demonstra o funcionamento do Processo Unificado:</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/up.png">
<p>Figura 2: Diagrama do Processo Unificado.</p>
</div>

&emsp;&emsp;O Processo Unificado foi selecionado por tornar claro a necessidade de atribuições de tarefas aos envolvidos diretamente no desenvolvimento do projeto. Nesse processo são definidas o quanto antes quais as etapas e os artefatos que serão envolvidos durante o processo. Essa característica do processo foi um ponto importante para lidar com a questão do tempo e conhecimento distinto dos integrantes da equipe.

&emsp;&emsp;Por fim, o Processo Unificado segue um ciclo de vida iterativo, de forma que o uso de iterações pode evitar o impacto de mudanças no projeto, o que gera um gerenciamento de mudanças e abordagens dos pontos de maior risco o mais cedo possível, o que era um dos problemas identificados pela equipe.</p>

<p align = "justify"> &emsp;&emsp;
Em síntese, o processo de desenvolvimento definido oferece uma estrutura sólida para o desenvolvimento do projeto, com um roteiro claro, gestão organizada, análise detalhada de requisitos e comunicação eficiente da equipe. No contexto do ChaosManager, que lida com sistemas complexos, com muitas funcionalidades, que envolvem cálculos e regras, essa abordagem se destaca como a escolha mais adequada para garantir o sucesso e a eficácia na entrega do produto final. 

&emsp;&emsp;Por fim, diante da abordagem estabelecida, a Tabela 1 define como cada uma das atividades desse processo será realizada, por meio de métodos e ferramentas. </p>

//TABELA

### 3.2 Processo de Engenharia de Requisitos

<p align="justify"> &emsp;&emsp;
Conforme George Marsicano (2023), é apresentado na Figura 3 as atividades da Engenharia de Requisitos (ER):</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/ativER.png">

<p>Figura 3: Atividades da Engenharia de Requisitos. George Marsicano (2023)</p>
</div>

<p align="justify"> &emsp;&emsp;
Com as atividades apresentadas, é necessário escolher uma abordagem que se adeque às especificidades do software, e para isso utilizaremos um método proposto pela IREB (2022) no qual é apresentado diferentes facetas do projeto. </p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/processo/facetasireb.png">

<p>Figura 4: Facetas do processo de ER. IREB (2023).</p>
</div>

<p align="justify"> &emsp;&emsp;
É feita uma análise baseado nesse método conforme as características do produto que irá ser desenvolvido com o ciclo de vida e processo de software já determinados, definindo-se um processo para a execução das atividades da Engenharia de Requisitos. A escolha segue uma característica "Participativo", no qual é um modelo iterativo, exploratório e com um cliente específico, tornando-se uma abordagem ideal para o nosso produto. </p>

## 4. Referências
> Handbook IREB CPRE Foundation Level, Version 1.1.0, september 2022.

> MARSICANO, George. Requisitos de Software: Introdução a Engenharia de Requisitos (ER). Brasília, 2023. Disponível em: <https://aprender3.unb.br/course/view.php?id=20236>. Acesso em: 16 set. 2023.

> SOMMERVILLE, Ian. Engenharia de software. 10.ed. São Paulo: Pearson Education do Brasil, 2018.

## 5. Histórico de versão
|  Data | Versão |       Descrição      |     Autor     |
|:-----:|:------:|:--------------------:|:-------------:|
| 16/09 |   1.0  | Processo de desenvolvimento de software | Gustavo França, Oscar de Brito |
| 16/09 |   1.1  | Atualiza os tópicos 3.1 e 3.2 e adiciona o tópico de referências        | Gustavo França, Oscar de Brito
