# Backlog Casos de Uso

## Introdução
<p align="justify">&emsp;&emsp; O Processo Unificado utiliza casos de uso como forma de declaração e especificação de requisitos. Tendo isso em vista, antes de especificar os casos de uso, foi necessário elicitar os requisitos a serem declarados. Para isso, foram realizadas previamente as atividades de Elicitação e Descoberta, Análise e Consenso, Verificação e Validação da Engenharia de Requisitos. Esse processo pode ser observado na Figura 1 e os requisitos finais elicitados e passados pela verificação e validação na Tabela 1. </p> 

<div align="center" style="text-align: center">
<img src="../assets/casosUso/requisitos.png">
<p><b>Figura 1:</b> Elicitação dos Requisitos. </p>
</div>

<table>
    <thead>
        <tr>
            <th>Requisitos Elicitados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Criar raça</td>
        </tr>
        <tr>
            <td>Visualizar raça</td>
        </tr>
        <tr>
            <td>Editar raça</td>
        </tr>
        <tr>
            <td>Excluir raça</td>
        </tr>
        <tr>
            <td>Criar profissão</td>
        </tr>
        <tr>
            <td>Visualizar profissão</td>
        </tr>
        <tr>
            <td>Editar profissão</td>
        </tr>
        <tr>
            <td>Excluir profissão</td>
        </tr>
        <tr>
            <td>Criar ficha de personagem</td>
        </tr>
        <tr>
            <td>Visualizar ficha de personagem</td>
        </tr>
        <tr>
            <td>Editar ficha de personagem</td>
        </tr>
        <tr>
            <td>Excluir ficha de personagem</td>
        </tr>
        <tr>
            <td>Atribuir estados</td>
        </tr>
        <tr>
            <td>Retirar estado</td>
        </tr>
        <tr>
            <td>Adicionar magia</td>
        </tr>
        <tr>
            <td>Retirar magia</td>
        </tr>
        <tr>
            <td>Adicionar arma</td>
        </tr>
        <tr>
            <td>Retirar arma</td>
        </tr>
        <tr>
            <td>Adicionar equipamento</td>
        </tr>
        <tr>
            <td>Retirar equipamento</td>
        </tr>
        <tr>
            <td>Administrar item</td>
        </tr>
        <tr>
            <td>Retirar item</td>
        </tr>
        <tr>
            <td>Realizar teste</td>
        </tr>
        <tr>
            <td>Visualizar resultado do teste</td>
        </tr>
        <tr>
            <td>Ordenar iniciativa de combate</td>
        </tr>
        <tr>
            <td>Realizar efeito do combate</td>
        </tr>
        <tr>
            <td>Visualizar efeito do combate</td>
        </tr>
        <tr>
            <td>Visualizar mapa</td>
        </tr>
        <tr>
            <td>Importar mapa</td>
        </tr>
        <tr>
            <td>Editar mapa</td>
        </tr>
        <tr>
            <td>Criar campanha de RPG</td>
        </tr>
        <tr>
            <td>Visualizar campanha de RPG</td>
        </tr>
        <tr>
            <td>Editar campanha de RPG</td>
        </tr>
        <tr>
            <td>Excluir campanha de RPG</td>
        </tr>
        <tr>
            <td>Acessar campanha de RPG</td>
        </tr>
    </tbody>
</table>

<div align="center" style="text-align: center">
<p><b>Tabela 1:</b> Requisitos Elicitados. </p>
</div>

<p align="justify">&emsp;&emsp; Para um melhor entendimento do que seriam alguns dos requisitos citados, a Figura 2 representa a <b>Ficha do Personagem</b> onde é o item que mantém todas as informações de um personagem durante a campanha.</p> 

<div align="center" style="text-align: center">

<img src="../assets/casosUso/ficha.png">

<p><b>Figura 2:</b> Ficha do personagem. </p>
</div>

## Casos de Uso

### Atores

<p align="justify">&emsp;&emsp; Foram identificados 2 atores dos fluxos de eventos do nosso sistema, são eles: </p>

- <b>Mestre:</b> refere-se ao jogador de uma campanha de RPG que deseja mestrar uma campanha no ChaosManager.
- <b>Jogador:</b> refere-se ao jogador de uma campanha de RPG que deseja participar de um campanha mestrada pela persona mestre

### Casos de Uso Identificados

<p align="justify">&emsp;&emsp; Com base nos requisitos elicitados, foram identificados 15 casos de uso, como apresentado na Tabela 2. </p>

<div align="center" style="text-align: center">

| ID | Nome do Caso de Uso | Descrição | Requisitos Envolvidos |
| :--- | :----: | :--- | :----: |
| CdU-01  | Criar Campanha de RPG | Este caso de uso permite o mestre criar uma sala de campanha onde possa administrar todas as suas sessões. Ele deve poder informar o nome, história e senha para a campanha ser criada. | Criar campanha de RPG Visualizar campanha de RPG </br> Editar campanha de RPG </br> Excluir campanha de RPG |
| CdU-02  | Gerenciar acesso da campanha de RPG | Este caso de uso permite os mestre e os jogadores acessarem uma sala de campanha onde possam ter acesso às ferramentas que os auxiliarão nas sessões. Eles devem poder acessar informando o nome da sala e sua senha de acesso. | Acessar campanha de RPG |
| CdU-03  | Gerenciar campanha de RPG |Esse caso de uso permite o mestre gerenciar sua sala de campanha como necessário, editando as informações que deseja ou até mesmo excluindo a campanha. | Visualizar campanha de RPG </br> Editar campanha de RPG </br> Excluir campanha de RPG |
| CdU-04  | Gerenciar ficha de personagem | Este caso de uso permite o mestre e os jogadores gerenciarem a ficha de personagem para que consigam administrar todas as informações do seu personagem durante a campanha, bem como criar a ficha e posteriormente editá-la. As fichas do mestre apenas ele poderá acessar, enquanto todos podem ver as dos outros jogadores.  | Criar ficha de personagem </br> Visualizar ficha de personagem </br> Editar ficha de personagem  |
| CdU-05  | Excluir ficha de personagem | Este caso de uso é utilizado pelo mestre para excluir uma ficha de personagem quando não mais necessária. | Excluir ficha de personagem |
| CdU-06  | Gerenciar teste | Este caso de uso protagoniza momentos em que os Jogadores e os personagens do Mestre precisam realizar ações que demandem alguma dificuldade, onde é possível realizar 10 testes diferentes. | Realizar teste </br> Visualizar resultado do teste |
| CdU-07  | Gerenciar combate | Este caso de uso será utilizado pelo mestre para gerenciar o combate e pelo jogador para reagir as ações do mestre no combate. Para tanto, o mestre pode indicar quem participa do combate e em que ordem, indicar quem participa do turno atacando e sendo atacado e por fim executando o efeito desse combate. | Ordenar iniciativa de combate </br> Realizar efeito do combate </br> Visualizar efeito do combate |
| CdU-08  | Gerenciar estados | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os estados que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem. | Atribuir estados </br> Retirar estado |
| CdU-09  | Gerenciar magia | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as magias que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las do sistema. | Adicionar magia </br> Retirar magia |
| CdU-10  | Gerenciar arma | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as armas que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem. | Adicionar arma </br> Retirar arma |
| CdU-11  | Gerenciar equipamento | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os equipamentos que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem. | Adicionar equipamento </br> Retirar equipamento |
| CdU-12  | Gerenciar item  | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os itens que utilizarão durante a campanha de RPG, bem como adicioná-las, alterar suas quantidades para acrescentá-las ou deduzí-las e retirá-los de suas fichas de personagem. | Administrar item </br> Retirar item |
| CdU-13  | Gerenciar raça | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as raças que utilizarão durante a campanha de RPG, bem como adicioná-las, editá-las e removê-las do sistema.  | Criar raça </br> Editar raça </br> Excluir raça |
| CdU-14  | Visualizar raça | Este caso de uso é utilizado pelos jogadores e mestre para visualizar as raças que existem durante a campanha de RPG, assim como as informações de cada uma delas. | Visualizar raça |
| CdU-15  | Gerenciar profissão | Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as profissões que utilizarão durante a campanha de RPG, bem como adicioná-las, editá-las e removê-las do sistema.  | Criar profissão </br> Editar profissão </br> Excluir profissão |
| CdU-16  | Visualizar profissão | Este caso de uso é utilizado pelos jogadores e mestre para visualizar as profissões que existem durante a campanha de RPG, assim como as informações de cada uma delas. | Visualizar profissão |


<p><b>Tabela 2:</b> Casos de Uso. </p>
</div>

### Especificação dos Casos de Uso

#### CdU-01 - Criar Campanha de RPG

|**Nome do caso de uso** |Criar Campanha de RPG|
| :----------- | :- |
|**Autor**|Emerson Teles e Larissa Gomes|
|**1. Atores**|Mestre|
|**2. Breve Descrição**|Este caso de uso permite o mestre criar uma sala de campanha onde possa administrar todas as suas sessões. Ele deve poder informar o nome, história e senha para a campanha ser criada.|
|**3. Fluxo básico de eventos**| <p>FB.</p><p>3\.1. O mestre seleciona a opção “Criar nova sala de campanha de RPG”.</p><p>3\.2. O mestre fornece um nome e história para a sala de campanha.</p><p>3\.3. O mestre define uma senha de acesso à sala de campanha. </p><p>3\.4. O mestre seleciona a opção de “Criar”. (FE01)</p><p>3\.5. O sistema faz a validação das informações. (FE02)</p><p>3\.6. O sistema cria a sala de campanha.</p><p>3\.7. O sistema gera um código de acesso para que os jogadores possam acessar a sala de campanha.</p><p>3\.7. O sistema informa ao mestre as instruções de acesso e o código de acesso dos jogadores.</p>|
|**4. Fluxo Alternativos**|Não há|
|**5. Fluxos de exceção**|<p>FE01 – Senha inválida </p><p>No passo 3.4 do FB, caso a senha digitada seja menor que 5 dígitos, o sistema deve emitir a mensagem: “Senha inválida, defina uma senha com pelo menos 5 dígitos”. E, o caso de uso retorna ao 3.3 do FB.</p><p>FE02 –Campanha já existe</p><p>No passo 3.5 do FB, caso o nome da campanha informado já exista, o sistema deve emitir a mensagem: “Nome de campanha já existe, informe um novo”. E, o caso de uso retorna ao 3.2 do FB.</p>|
|**6. Pré-condições**|Não há|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 3:</b> Especificação Caso de Uso 01. </p>
</div>

#### CdU-02 - Gerenciar acesso da campanha de RPG

|**Nome do caso de uso** |Gerenciar acesso da campanha de RPG|
| :----------- | :- |
|**Autor**|Emerson Teles e Larissa Gomes |
|**1. Atores**|Mestre e jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.|
|**2. Breve Descrição**|Este caso de uso permite os mestre e os jogadores acessarem uma sala de campanha onde possam ter acesso às ferramentas que os auxiliarão nas sessões. Eles devem poder acessar informando o nome da sala e sua senha de acesso.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário seleciona a opção “Acessar sala de campanha de RPG”.</p><p>3\.2. O usuário fornece o nome e a senha de acesso. </p><p>3\.3. O usuário seleciona a opção “Acessar”. </p><p>3\.4. O sistema valida as informações. (FE01) </p><p>3\.5. O sistema exibe a sala de campanha.  </p>|
|**4. Fluxo Alternativos**|Não há.|
|**5. Fluxos de exceção**|<p>FE01 – Senha inválida </p><p>No passo 3.4 do FB, caso a senha digitada for incorreta ou não seja válida ao tipo de acesso informado (mestre ou jogador), o sistema deve emitir a mensagem: “Senha inválida, digite novamente”. E, o caso de uso retorna ao 3.2 do FB.</p>|
|**6. Pré-condições**|6\.1. Sala de campanha criada.|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 4:</b> Especificação Caso de Uso 02. </p>
</div>

#### CdU-03 - Gerenciar campanha de RPG

|**Nome do caso de uso** |Gerenciar campanha de RPG|
| :----------- | :- |
|**Autor**|Larissa Gomes |
|**1. Atores**|Mestre.|
|**2. Breve Descrição**|Esse caso de uso permite o mestre gerenciar sua sala de campanha como necessário, editando as informações que deseja ou até mesmo excluindo a campanha.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O mestre seleciona a opção “Configurações”.</p><p>3\.2. O sistema apresenta as informações da campanha, o nome, história e senhas de acesso.</p><p>3\.3. O sistema apresenta as seguintes opções:</p><p>- Editar</p><p>- Excluir campanha (FA01)</p><p>3\.4. O mestre seleciona a opção “Editar”.</p><p>3\.5. O mestre altera as informações que deseja.</p><p>3\.6. O mestre seleciona a opção de “Confirmar”. </p><p>3\.7. O sistema faz a validação das informações. (FE01) (FE02)</p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Excluir Campanha</p><p> &emsp;&emsp; 4.1.1. O mestre seleciona a opção “Configurações”.</p><p> &emsp;&emsp; 4.1.2. O mestre seleciona a opção “Excluir campanha”</p><p> &emsp;&emsp; 4.1.3. O sistema confirma se o mestre deseja realizar essa ação. </p><p> &emsp;&emsp; 4.1.4. O mestre seleciona a opção de “Confirmar”.</p><p> &emsp;&emsp; 4.1.5. O sistema exclui a campanha.</p>|
|**5. Fluxos de exceção**|<p>FE01 – Senha inválida </p><p>No passo 3.7 do FB, caso a senha digitada seja menor que 5 dígitos, o sistema deve emitir a mensagem: “Senha inválida, defina uma senha com pelo menos 5 dígitos”. E, o caso de uso retorna ao 3.5 do FB.</p><p>FE02 –Campanha já existe</p><p>No passo 3.7 do FB, caso o nome da campanha informado já exista, o sistema deve emitir a mensagem: “Nome de campanha já existe, informe um novo”. E, o caso de uso retorna ao 3.5 do FB.</p>|
|**6. Pré-condições**|6\.1. Sala de campanha criada.|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 5:</b> Especificação Caso de Uso 03. </p>
</div>

#### CdU-04 - Gerenciar ficha de personagem

|**Nome do caso de uso** |Gerenciar ficha de personagem|
| :----------- | :- |
|**Autores**|Gustavo França, Larissa Gomes e Pedro Eduardo|
|**1. Atores**|Mestre e jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.|
|**2. Breve Descrição**|Este caso de uso permite o mestre e os jogadores gerenciarem a ficha de personagem para que consigam administrar todas as informações do seu personagem durante a campanha, bem como criar a ficha e posteriormente editá-la. As fichas do mestre apenas ele poderá acessar, enquanto todos podem ver as dos outros jogadores.|
|**3. Fluxo básico de eventos**|<p>FB</p><p>3\.1. O usuário seleciona a opção “Ficha de personagem”.</p><p>3\.2. O usuário fornece informações sobre o personagem, incluindo nome do usuário, nome do personagem, raça, profissão, idade, gênero, dinheiro, história, notas e descrição física.</p><p>3\.3. O usuário seleciona os traços do personagem.</p><p>3\.4. O usuário atribui os valores dos atributos do personagem. </p><p>3\.5. O usuário seleciona a opção “Criar ficha”. </p><p>3\.6. O sistema valida as informações da ficha. </p><p>3\.7. O sistema adiciona a ficha criada a lista de fichas de personagens.</p><p>3\.8. O usuário pode acessar a ficha do personagem para editá-la ao selecioná-la na lista de fichas de personagens. (FA01)</p>|
|**4. Fluxo Alternativos**|<p>FA01 – Editar ficha</p><p> &emsp;&emsp; 4.1.1. O sistema exibe as informações que podem ser editadas:</p><p> &emsp;&emsp;&emsp;&emsp; - Nome do usuário e do personagem</p><p> &emsp;&emsp;&emsp;&emsp; - Raça e profissão</p><p> &emsp;&emsp;&emsp;&emsp; - Idade e gênero</p><p> &emsp;&emsp;&emsp;&emsp; - Dinheiro</p><p> &emsp;&emsp;&emsp;&emsp; - Traços</p><p> &emsp;&emsp;&emsp;&emsp; - Pontos de vida, armadura, energia e experiência</p><p> &emsp;&emsp;&emsp;&emsp; - História, notas e descrição física.</p><p> &emsp;&emsp; 4.1.2. O usuário seleciona o campo da informação que deseja alterar. </p><p> &emsp;&emsp; 4.1.3. O usuário fornece os novos dados.</p><p> &emsp;&emsp; 4.1.4. O usuário seleciona a opção de “Confirmar”. (FE01)</p><p> &emsp;&emsp; 4.1.5. O sistema atualiza os dados da ficha.</p>|
|**5. Fluxos de exceção**|<p>FE01 – Personagem Morto</p><p>No passo 4.1.4 do FA01, caso os pontos de vida informados sejam ≤0, o sistema deve emitir a mensagem: “Personagem morto”. </p>|
|**6. Pré-condições**|6\.1. Sala de campanha criada.|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 6:</b> Especificação Caso de Uso 04. </p>
</div>

#### CdU-05 - Excluir ficha de personagem

|**Nome do caso de uso** |Excluir ficha de personagem|
| :----------- | :- |
|**Autores**|Gustavo França e Pedro Eduardo|
|**1. Atores**|Mestre|
|**2. Breve Descrição**|Este caso de uso é utilizado pelo mestre para excluir uma ficha de personagem quando não mais necessária.|
|**3. Fluxo básico de eventos**|<p>FB<br>3\.1. O mestre acessa a página de fichas.</p><p>3\.2. O mestre seleciona qual ficha deseja excluir.</p><p>3\.3. O mestre seleciona a opção “Confirmar”.</p><p>3\.4. O sistema exclui a ficha da lista de fichas de personagens.</p>|
|**4. Fluxo Alternativos**|Não há|
|**5. Fluxos de exceção**|Não há|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de personagem criada.</p>|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 7:</b> Especificação Caso de Uso 05. </p>
</div>

#### CdU-06 - Gerenciar teste

|**Nome do caso de uso** |Gerenciar teste|
| :----------- | :- |
|**Autores**|Gustavo França, Pedro Eduardo e Larissa Gomes|
|**1. Atores**|Mestre e Jogador são os atores designados para utilizar essas funcionalidades. Serão referenciados como usuário.|
|**2. Breve Descrição**|Este caso de uso protagoniza momentos em que os Jogadores e os personagens do Mestre precisam realizar ações que demandem alguma dificuldade, onde é possível realizar 10 testes diferentes.|
|**3. Fluxo básico de eventos**|<p>FB</p><p>3\.1. O usuário abre o campo de teste.</p><p>3\.2. O usuário seleciona o teste que irá realizar. (FA01)</p><p>3\.3. O usuário seleciona “rolar dados”.</p><p>3\.4. O sistema mostra o resultado do teste no registro de ações. (FE01)(FE02) (RN01)</p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Teste de Competência</p><p> &emsp;&emsp; 4.1.1. O usuário seleciona o teste de competência.</p><p> &emsp;&emsp; 4.1.2. O usuário informa quanto pontos de energia deseja utilizar.</p><p> &emsp;&emsp; 4.1.3. O usuário seleciona “rolar dados”.</p><p> &emsp;&emsp; 4.1.4. O sistema deduz os pontos de energia utilizados da ficha do personagem.</p><p> &emsp;&emsp; 4.1.5. O resultado do teste é mostrado no registro de ações. (FE01)(FE02) (RN01)</p>|
|**5. Fluxos de exceção**|<p>5\.1. FE01 - Falha crítica</p><p>No passo 3.4 do FB e 4.1.5 do FA01, se valor do dado for 1, o sistema deve emitir a mensagem: “Falha crítica” no Registro de Ações.</p><p>5\.2. FE02 - Acerto crítico</p><p>No passo 3.4 do FB e 4.1.5 do FA01, se o valor do dado for 20, o sistema deve emitir a mensagem: “Acerto crítico” no Registro de Ações.</p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de personagem criada.</p>|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Regra de negócio (RN01): cálculo do teste = um inteiro randomizado de 1 a 20 (valor do dado) + o valor do teste + o valor dos pontos de energia (se for teste de competência)|

<div align="center" style="text-align: center">
<p><b>Tabela 8:</b> Especificação Caso de Uso 06. </p>
</div>

#### CdU-07 - Gerenciar combate

|**Nome do caso de uso** |Gerenciar combate|
| :----------- | :- |
|**Autor**|Pedro Eduardo e Larissa Gomes|
|**1. Atores**|Mestre e Jogador são os atores designados para utilizar essas funcionalidades. Em caso que ambos são elegíveis para o passo, serão referenciados como usuário.|
|**2. Breve Descrição**|Este caso de uso será utilizado pelo mestre para gerenciar o combate e pelo jogador para reagir as ações do mestre no combate. Para tanto, o mestre pode indicar quem participa do combate e em que ordem, indicar quem participa do turno atacando e sendo atacado e por fim executando o efeito desse combate.|
|**3. Fluxo básico de eventos**|<p>FB</p><p>3\.1. O mestre abre o “Gerenciador de combate”.</p><p>3\.2. O mestre seleciona a opção “Adicionar ordem do combate”.</p><p>3\.3. O mestre adiciona as fichas dos personagens que participarão do combate na ordem que será realizado.</p><p>3\.4. O mestre seleciona as fichas de personagem de quem vai realizar e sofrer a ação.</p><p>3\.5. O usuário realizando a ação realiza o teste indicado pelo mestre de acordo com a ação desejada. </p><p>3\.6. O usuário sofrendo a ação realiza o teste indicado pelo mestre de acordo com a ação de reação desejada. (FA01)</p><p>3\.7. O mestre adiciona o valor da ação.</p><p>3\.8. O mestre adiciona o valor do dano/Pontos de energia.</p><p>3\.9. O mestre adiciona o valor da reação (defesa)</p><p>3\.10. O mestre executa o efeito do combate. </p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Escolheu receber o golpe</p><p> &emsp;&emsp; 4.1.1. O usuário realizando a retaliação realiza o teste indicado pelo mestre de acordo com a ação desejada.</p><p> &emsp;&emsp; 4.1.2. O usuário sofrendo a ação realiza o teste indicado pelo mestre (Resistência Física ou Mental).</p><p> &emsp;&emsp; 4.1.3. O mestre adiciona o valor da retaliação.</p><p> &emsp;&emsp; 4.1.4. O mestre adiciona o valor da dano/Pontos de energia.</p><p> &emsp;&emsp; 4.1.5. O mestre executa o efeito do combate.</p>|
|**5. Fluxos de exceção**|Não há|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de personagem criada.</p><p>6\.3. Testes criados.</p>|
|**7. Pós-condições**|As fichas que sofreram danos devem ter os pontos de vida e de armadura atualizados|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 9:</b> Especificação Caso de Uso 07. </p>
</div>

#### CdU-08 - Gerenciar estados

|**Nome do caso de uso** |Gerenciar estados|
| :----------- | :- |
|**Autor**|Larissa Gomes|
|**1. Atores**|Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os estados que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a ficha.</p><p>3\.2. O usuário seleciona um campo vazio na seção de estados da ficha. </p><p>3\.3. O usuário seleciona o estado desejado.</p><p>3\.4. O usuário seleciona a opção de “confirmar”.</p><p>3\.5. O sistema valida o estado. (FE01)</p><p>3\.6. O sistema adiciona o estado na ficha. </p><p>3\.6. O sistema aplica as penalidades do estado na ficha do personagem.</p><p>3\.6. O sistema ativa a opção de retirar estado da ficha ao selecioná-la. (FA01).</p>|
|**4. Fluxo Alternativos**|<p>4\.2. FA02 – Retirar Estado</p><p> &emsp;&emsp; 4.2.1. O usuário seleciona o campo do estado que deseja retirar na seção de Traços&Estados da ficha.</p><p> &emsp;&emsp; 4.2.2. O usuário seleciona a opção “retirar estado”.</p><p> &emsp;&emsp; 4.2.3. O sistema retira o estado da ficha do personagem.</p><p> &emsp;&emsp; 4.2.4. O sistema remove as penalidades do estado aplicadas na ficha do personagem.</p>|
|**5. Fluxos de exceção**|<p>FE01 – Estado já aplicado</p><p>No passo 3.5 do FB, caso o usuário selecione um estado que já esteja aplicado, o sistema deve emitir a mensagem: “Estado já aplicado”. E, o caso de uso retorna ao 3.3 do FB.</p><p></p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada. </p><p>6\.2. Ficha de Personagem criada. </p><p></p>|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 10:</b> Especificação Caso de Uso 08. </p>
</div>

#### CdU-09 - Gerenciar magia

|**Nome do caso de uso** |Gerenciar magia|
| :----------- | :- |
|**Autor**|Oscar Brito e Larissa Gomes|
|**1. Atores**|Mestre e Jogador são os atores designados para utilizar essas funcionalidades. Serão referenciados como usuário.|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as magias que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las do sistema.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a ficha.</p><p>3\.2. O usuário seleciona um campo vazio na seção de magia da ficha. </p><p>3\.3. O usuário preenche os campos de nome.</p><p>3\.4. O usuário seleciona a classe da magia.</p><p>3\.5. O usuário seleciona a opção de “confirmar”.</p><p>3\.6. O sistema adiciona a magia na ficha.</p><p>3\.7. O sistema ativa a opção de retirar magia da ficha ao selecioná-la. (FA01)</p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Retirar magia</p><p> &emsp;&emsp; 4.2.1. O usuário seleciona o campo da magia que deseja retirar na seção de magia da ficha.</p><p> &emsp;&emsp; 4.2.2. O usuário seleciona a opção “retirar magia”.</p><p> &emsp;&emsp; 4.2.3. O sistema retira a magia da ficha do personagem.</p>|
|**5. Fluxos de exceção**|Não há.|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2 Ficha de personagem criada.</p>|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 11:</b> Especificação Caso de Uso 09. </p>
</div>

#### CdU-10 - Gerenciar arma

|**Nome do caso de uso** |Gerenciar arma|
| :----------- | :- |
|**Autor**|Larissa Gomes|
|**1. Atores**|<p>Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.</p><p></p>|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as armas que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a ficha.</p><p>3\.2. O usuário seleciona um campo vazio na seção de arma da ficha. </p><p>3\.3. O sistema verifica se o usuário seleciona opção “arma existente”.(FA01)</p><p>3\.4. O usuário preenche os campos de nome, teste usado e peso. </p><p>3\.5. O usuário seleciona o modificador de dano da arma.</p><p>3\.6. O usuário seleciona a opção de “confirmar”.</p><p>3\.7. O sistema faz a validação da arma. (FE01)</p><p>3\.8. O sistema adiciona a arma na ficha.</p><p>3\.9. O sistema adiciona a arma a lista de armas existentes.</p><p>3\.10. O sistema adiciona o peso da arma ao peso carregado do personagem.</p><p>3\.11. O sistema ativa a opção de retirar arma da ficha ao selecioná-la. (FA02)</p><p></p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Seleciona Arma Existente</p><p> &emsp;&emsp; 4.1.1. O usuário seleciona opção “arma existente”.</p><p> &emsp;&emsp; 4.1.2. O usuário seleciona uma arma da lista.</p><p> &emsp;&emsp; 4.1.3. O usuário seleciona a opção de “confirmar”.</p><p> &emsp;&emsp; 4.1.4. O sistema adiciona essa arma na ficha.</p><p> &emsp;&emsp; 4.1.5. O <a name="_int_gxm2addx"></a>sistema ativa a opção de retirar arma da ficha ao selecioná-la. (FA02)</p><p>4\.2. FA02 – Retirar Arma</p><p> &emsp;&emsp; 4.2.1. O usuário seleciona o campo da arma que deseja retirar na seção de arma da ficha.</p><p> &emsp;&emsp; 4.2.2. O usuário seleciona a opção “retirar arma”.</p><p> &emsp;&emsp; 4.2.3. O sistema retira a arma da ficha do personagem.</p><p> &emsp;&emsp; 4.2.4. O sistema remove o peso da arma do peso carregado do personagem.</p><p></p>|
|**5. Fluxos de exceção**|<p>FE01 – Arma já existe</p><p>No passo 3.7 do fluxo básico, caso o usuário informe o nome de uma arma existente, porém com dados diferentes da já cadastrada, o sistema deve emitir a mensagem: “Arma já cadastrada no sistema”. E, o caso de uso retorna ao 3.3 do FB.</p><p></p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de Personagem criada.</p>|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 12:</b> Especificação Caso de Uso 10. </p>
</div>

#### CdU-11 - Gerenciar equipamento

|**Nome do caso de uso** |Gerenciar equipamento|
| :----------- | :- |
|**Autor**|Larissa Gomes |
|**1. Atores**|<p>Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.</p><p></p>|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os equipamentos que utilizarão durante a campanha de RPG, bem como adicioná-las e retirá-las de suas fichas de personagem.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a ficha.</p><p>3\.2. O usuário seleciona um campo vazio na seção de equipamentos da ficha.</p><p>3\.3. O sistema verifica se o usuário seleciona opção “equipamento existente”. (FA01)</p><p>3\.4. O usuário preenche os campos de nome, pontos de armadura (PdA) e peso. </p><p>3\.5. O usuário seleciona a opção de “confirmar”.</p><p>3\.6. O sistema faz a validação do equipamento. (FE01)</p><p>3\.7. O sistema adiciona o equipamento na ficha.</p><p>3\.8. O sistema adiciona a arma a lista de equipamentos existentes.</p><p>3\.9. O sistema adiciona o peso do equipamento ao peso carregado do personagem.</p><p>3\.10. O sistema ativa a opção de retirar equipamento da ficha ao selecioná-la. (FA02)</p><p></p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Seleciona Equipamento Existente</p><p> &emsp;&emsp; 4.1.1. O usuário seleciona opção “equipamento existente”.</p><p> &emsp;&emsp; 4.1.2. O usuário seleciona um equipamento da lista.</p><p> &emsp;&emsp; 4.1.3. O usuário seleciona a opção de “confirmar”.</p><p> &emsp;&emsp; 4.1.4. O sistema adiciona esse equipamento na ficha.</p><p> &emsp;&emsp; 4.1.5. O sistema ativa a opção de retirar equipamento da ficha ao selecioná-la. (FA02)</p><p>4\.2. FA02 – Retirar Equipamento</p><p> &emsp;&emsp; 4.2.1. O usuário seleciona o campo do equipamento que deseja retirar na seção de equipamento da ficha.</p><p> &emsp;&emsp; 4.2.2. O usuário seleciona a opção “retirar equipamento”.</p><p> &emsp;&emsp; 4.2.3. O sistema retira o equipamento da ficha do personagem.</p><p> &emsp;&emsp; 4.2.4. O sistema remove o peso do equipamento do peso carregado do personagem.</p><p></p>|
|**5. Fluxos de exceção**|<p>FE01 – Equipamento já existe</p><p>No passo 3.6 do FB, caso o usuário informe o nome de um equipamento existente, porém com dados diferentes do já cadastrado, o sistema deve emitir a mensagem: “Equipamento já cadastrado no sistema”. E, o caso de uso retorna ao 3.3 do FB.</p><p></p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de Personagem criada.</p>|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 13:</b> Especificação Caso de Uso 11. </p>
</div>

#### CdU-12 - Gerenciar item

|**Nome do caso de uso** |Gerenciar item|
| :----------- | :- |
|**Autor**|Larissa Gomes|
|**1. Atores**|<p>Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.</p><p></p>|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para gerenciar os itens que utilizarão durante a campanha de RPG, bem como adicioná-las, alterar suas quantidades para acrescentá-las ou deduzí-las e retirá-los de suas fichas de personagem.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a ficha.</p><p>3\.2. O usuário seleciona um campo vazio na seção de item da ficha. </p><p>3\.3. O usuário preencher os campos de nome e peso. </p><p>3\.6. O usuário seleciona a opção de “confirmar”.</p><p>3\.8. O sistema adiciona uma unidade do item na ficha.</p><p>3\.10. O sistema adiciona o peso do item ao peso carregado do personagem.</p><p>3\.11. O sistema ativa as opções de alterar quantidade do item, além de retirar arma da ficha ao selecioná-la. (FA01)(FA02)</p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Alterar quantidade do item</p><p> &emsp;&emsp; 4.1.1. O usuário seleciona o item que deseja alterar a quantidade.</p><p> &emsp;&emsp; 4.1.2. O usuário seleciona o campo de quantidade.</p><p> &emsp;&emsp; 4.1.3. O usuário altera a quantidade de itens para o desejado.</p><p> &emsp;&emsp; 4.1.4. O usuário seleciona a opção de “confirmar”.</p><p> &emsp;&emsp; 4.1.5. O sistema valida a nova quantidade. (FE01) (FE02)</p><p> &emsp;&emsp; 4.1.6. O sistema atualiza a nova quantidade do item na ficha.</p><p> &emsp;&emsp; 4.1.7. O sistema adiciona o (peso do item)x(quantidade- quantidade Anterior) ao peso carregado do personagem.</p><p></p><p>4\.2. FA02 – Retirar Item</p><p> &emsp;&emsp; 4.2.1. O usuário seleciona o campo do item que deseja retirar na seção de item da ficha.</p><p> &emsp;&emsp; 4.2.2. O usuário seleciona a opção “retirar item”.</p><p> &emsp;&emsp; 4.2.3. O sistema retira o item da ficha do personagem.</p><p> &emsp;&emsp; 4.2.4. O sistema remove o (peso do item)x(quantidade) do peso carregado do personagem.</p><p></p>|
|**5. Fluxos de exceção**|<p>FE01 – Nova quantidade negativa</p><p>No passo 4.1.5 do FA01, caso o usuário informe a quantidade do item como 0, o sistema deve emitir a mensagem: “Quantidade inválida”. E, o caso de uso retorna ao 4.1.3 do FA01.</p><p>FE01 – Nova quantidade 0</p><p>No passo 4.1.5 do FA01, caso o usuário a quantidade do item como 0, o sistema deve emitir a mensagem: “Quantidade inválida, deseja retirar o item?”. Em caso negativo, o caso de uso retorna ao 4.1.3 do FA01, em caso positivo o caso de uso passa para o passo 4.2.3 do FA02.</p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada.</p><p>6\.2. Ficha de Personagem criada.</p>|
|**7. Pós-condições**|Não há.|
|**8. Pontos de extensão**|Não há.|
|**9. Requisitos especiais**|Não há.|
|**10. Informações adicionais**|Não há.|

<div align="center" style="text-align: center">
<p><b>Tabela 14:</b> Especificação Caso de Uso 12. </p>
</div>

#### CdU-13 - Gerenciar raça

|**Nome do caso de uso** |Gerenciar raça|
| :----------- | :- |
|**Autor**|Oscar Brito|
|**1. Atores**|<p>Mestre e Jogador são os atores designados para utilizar essas funcionalidades. </p><p></p>|
|**2. Breve Descrição**|<p>Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as raças que utilizarão durante a campanha de RPG, bem como adicioná-las, editá-las e removê-las do sistema. </p><p></p>|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O mestre seleciona a opção “Gerenciar Raça”.</p><p>3\.2. O sistema apresenta as seguintes opções:</p><p>  &emsp;&emsp; - Criar Raça</p><p>  &emsp;&emsp; - Editar Raça (FA01)</p><p>  &emsp;&emsp; - Excluir Raças (FA02)</p><p>3\.3. O mestre seleciona a opção de criar raça </p><p>3\.4. O mestre preenche os campos de nome, detalhamento, atributos e tabela de idades com seus testes afetados.  </p><p>3\.5. O mestre seleciona a opção de “confirmar”. </p><p>3\.6. O sistema faz a validação da raça. (FE01) </p><p>3\.7. O sistema adiciona a raça na lista de raças existentes. </p><p></p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Editar Raça  </p><p> &emsp;&emsp; 4.1.1. O mestre seleciona a opção de editar raça.</p><p> &emsp;&emsp; 4.1.2. O mestre seleciona a raça desejada da lista de raças existentes.</p><p> &emsp;&emsp; 4.1.3. O mestre edita as informações desejadas da raça.</p><p> &emsp;&emsp; 4.1.4. O mestre seleciona a opção de “confirmar”. </p><p> &emsp;&emsp; 4.1.5. O sistema faz a validação da raça. (FE01) </p><p> &emsp;&emsp; 4.1.6. O sistema atualiza as informações da raça.</p><p> &emsp;&emsp; 4.1.7. O sistema atualiza as informações nas fichas que tem a raça.</p><p></p><p>4.2. FA02 – Remover Raça </p><p> &emsp;&emsp; 4.2.1. O mestre seleciona a opção de “remover raça”. </p><p> &emsp;&emsp; 4.2.2. O mestre seleciona a raça desejada da lista de raças existentes.</p><p> &emsp;&emsp; 4.2.3. O sistema remove a raça da lista de raça existentes.</p><p> &emsp;&emsp; 4.2.4. O sistema remove as raças das fichas dos personagens</p><p> &emsp;&emsp; 4.2.5. O sistema remove as raças das fichas dos personagens</p><p> &emsp;&emsp; 4.2.6. O sistema remove os atributos alterados pela raça.</p><p> &emsp;&emsp; 4.2.7. O sistema remove os testes afetados pela idade alterados pela raça.</p><p></p>|
|**5. Fluxos de exceção**|<p>FE01 – Raça já existe </p><p>No passo 3.6 do fluxo básico, caso o usuário informe o nome de uma raça existente, porém com dados diferentes da já cadastrada, o sistema deve emitir a mensagem: “Raça já cadastrada no sistema”. E, o caso de uso retorna ao 3.4 do FB.</p>|
|**6. Pré-condições**|6\.1. Sala de campanha criada.|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 15:</b> Especificação Caso de Uso 13. </p>
</div>

#### CdU-14 - Visualizar raça

|**Nome do caso de uso** |Visualizar raça|
| :----------- | :- |
|**Autor**|Oscar Brito e Larissa Gomes|
|**1. Atores**|Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para visualizar as raças que existem durante a campanha de RPG, assim como as informações de cada uma delas.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a área da lista de raças.</p><p>3\.2. O usuário seleciona a raça que deseja visualizar. </p><p>3\.3. O sistema mostra as informações de nome, detalhamento, atributos, tabela de idades e quais testes cada faixa etária afeta associado a raça.</p><p></p>|
|**4. Fluxo Alternativos**|Não há.|
|**5. Fluxos de exceção**|Não há.|
|**6. Pré-condições**|6\.1. Sala de campanha criada. |
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|
 
<div align="center" style="text-align: center">
<p><b>Tabela 16:</b> Especificação Caso de Uso 14. </p>
</div>

#### CdU-15 - Gerenciar profissão

|**Nome do caso de uso** |Gerenciar profissão|
| :----------- | :- |
|**Autor**|Gustavo França|
|**1. Atores**|<p>Mestre e Jogador são os atores designados para utilizar essas funcionalidades. </p><p></p>|
|**2. Breve Descrição**|<p>Este caso de uso é utilizado pelos jogadores e mestre para gerenciar as profissões que utilizarão durante a campanha de RPG, bem como adicioná-las, editá-las e removê-las do sistema. </p><p></p>|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O mestre seleciona a opção “Gerenciar Profissão”.</p><p>3\.2. O sistema apresenta as seguintes opções:</p><p> &emsp;&emsp; - Criar Profissão</p><p> &emsp;&emsp; - Editar Profissão (FA01)</p><p> &emsp;&emsp; - Excluir Profissão (FA02)</p><p>3\.3. O mestre seleciona a opção de criar profissão.</p><p>3\.4. O mestre preenche os campos de nome, descrição, bônus e/ou penalidades e um objeto associado a essa profissão .</p><p>3\.5. O mestre seleciona a opção de “confirmar”. </p><p>3\.6. O sistema faz a validação da profissão. (FE01) </p><p>3\.7. O sistema adiciona a profissão na lista de raças existentes. </p><p></p>|
|**4. Fluxo Alternativos**|<p>4\.1. FA01 – Editar Profissão  </p><p> &emsp;&emsp; 4.1.1. O mestre seleciona a opção de editar profissão.</p><p> &emsp;&emsp; 4.1.2. O mestre seleciona a profissão desejada da lista de profissões existentes.</p><p> &emsp;&emsp; 4.1.3. O mestre edita as informações desejadas da raça.</p><p> &emsp;&emsp; 4.1.4. O mestre seleciona a opção de “confirmar”. </p><p> &emsp;&emsp; 4.1.5. O sistema faz a validação da raça. (FE01) </p><p> &emsp;&emsp; 4.1.6. O sistema atualiza as informações da profissão.</p><p> &emsp;&emsp; 4.1.7. O sistema atualiza as informações nas fichas que tem a profissão.</p><p></p><p>4\.2. FA02 – Remover profissão</p><p> &emsp;&emsp; 4.2.1. O mestre seleciona a opção de “remover profissão”. </p><p> &emsp;&emsp; 4.2.2. O mestre seleciona a profissão desejada da lista de profissões existentes.</p><p> &emsp;&emsp; 4.2.3. O sistema remove a profissão da lista de profissões existentes.</p><p> &emsp;&emsp; 4.2.4. O sistema remove as profissões das fichas dos personagens.</p><p> &emsp;&emsp; 4.2.5. O sistema remove os atributos alterados pela profissão.</p><p> &emsp;&emsp; 4.2.6. O sistema remove o objeto associado a essa profissão se ainda estiver na ficha.</p><p></p>|
|**5. Fluxos de exceção**|<p>FE01 – Profissão já existe </p><p>No passo 3.6 do FB, caso o usuário informe o nome de uma profissão existente, porém com dados diferentes da já cadastrada, o sistema deve emitir a mensagem: “Profissão já cadastrada no sistema”. E, o caso de uso retorna ao 3.4 do FB.</p><p></p>|
|**6. Pré-condições**|<p>6\.1. Sala de campanha criada. </p><p>6\.2. Ficha de Personagem criada.</p>|
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 17:</b> Especificação Caso de Uso 15. </p>
</div>

#### CdU-16 - Visualizar profissão

|**Nome do caso de uso** |Visualizar profissão|
| :----------- | :- |
|**Autor**|Gustavo França e Larissa Gomes|
|**1. Atores**|Mestre e Jogador possuem essa mesma funcionalidade, nos fluxos serão referidos como usuário.|
|**2. Breve Descrição**|Este caso de uso é utilizado pelos jogadores e mestre para visualizar as profissões que existem durante a campanha de RPG, assim como as informações de cada uma delas.|
|**3. Fluxo básico de eventos**|<p>FB.</p><p>3\.1. O usuário acessa a área da lista de profissões.</p><p>3\.2. O usuário seleciona a profissão que deseja visualizar.</p><p>3\.3. O sistema mostra as informações de nome, descrição, bônus e/ou penalidades e objeto (arma, equipamento, item) associado a profissão se houver.</p><p></p>|
|**4. Fluxo Alternativos**|Não há.|
|**5. Fluxos de exceção**|Não há.|
|**6. Pré-condições**|6\.1. Sala de campanha criada. |
|**7. Pós-condições**|Não há|
|**8. Pontos de extensão**|Não há|
|**9. Requisitos especiais**|Não há|
|**10. Informações adicionais**|Não há|

<div align="center" style="text-align: center">
<p><b>Tabela 18:</b> Especificação Caso de Uso 16. </p>
</div>

### Backlog priorizado

<p align="justify">&emsp;&emsp; Para Organizar e Atualizar o Backlog, realizamos a priorização dos Casos de Uso utilizando a técnica MoSCoW para determinar a prioridade dos requisitos, os critérios utilizados para definir o que seria Must, Should, Could ou Would foram o <b>valor de negócio</b>, a <b>complexidad</b>e e a <b>viabilidade</b>, tendo um maior peso os que possuiam valor de negócio que ajudava a cumprir os objetivos e necessidades mais urgentes do cliente. A execução da técnica pode ser vista na Figura 2.</p>

<div align="center" style="text-align: center">

<img src="../assets/casosUso/priorizacaoCdU.png">

<p><b>Figura 3:</b> Priorização MoSCoW. </p>
</div>

### MVP

<p align="justify">&emsp;&emsp; Com base nos objetivos a serem atingidos no projeto, os Casos de Uso a fazerem parte do MVP foram selecionados com isso em vista. A Tabela 3 apresenta a relação dos Casos de Uso e qual objetivo secundário estariam contribuindo para ser atingido. Cumprindo todos os objetivos secundários, o objetivo principal de <b>“Unificar ferramentas de Combate, fichas de personagem, ação/teste de habilidade e interpretação de um rpg de mesa por meio da implementação do sistema de regras Order&Caos.
”</b> será alcançado.</p>

| Objetivos secundários  | Casos de Uso do MVP |
| :---: | :----: |
| Permitir que jogadores se reunam em um único ambiente | CdU-01 - Criar Campanha de RPG </br> CdU-02 - Gerenciar acesso da campanha de RPG |
| Os usuários devem conseguir ter acesso a todas as suas informações por meio da ficha de personagem | CdU-04 - Gerenciar ficha de personagem </br> CdU-08 - Gerenciar estados </br> CdU-09 - Gerenciar magia </br> CdU-10 - Gerenciar arma </br> CdU-11 - Gerenciar equipamento </br> CdU-12 - Gerenciar item |
| Os usuários devem poder usufruir das dinâmicas disponíveis (Testes e combate) | CdU-06 - Gerenciar teste </br> CdU-07 - Gerenciar combate |

## Histórico de versão

| Data  | Versão | Descrição                            | Autor                          |
| :---: | :----: | ------------------------------------ | ------------------------------ |
| 25/10 |  1.0   | Criação documento de casos de uso | Larissa Gomes e Oscar de Brito |
| 25/10 |  1.1   | Adição das especificações | Emerson Teles, Gustavo França, Larissa Gomes, Oscar de Brito e Pedro Eduardo|
| 01/10 |  2.0   | Atualização descrições de caso de uso e correção de especificações | Larissa Gomes |
| 01/10 |  2.1   | Adicionando DOR e DOD | Larissa Gomes, Emerson Teles e Luciano |
