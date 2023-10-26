---
hide:
  - toc
---

# Backlog SAFe



## Personas

<p style="text-align:justify; text-indent:20px;">
Uma persona é o personagem fictício da user story que representa o usuário ideal do produto. Todas as histórias são escritas a partir da perspectiva de um tipo de usuário.
</p>

<ul style="text-align:justify;">
<li> <b>Mestre:</b> refere-se ao jogador de campanha de RPG que dejesa mestrar uma campanha no ChaosManager.</li>
<li> <b>Jogador:</b> refere-se jogador de uma campanha de RPG que deseja participar de um campanha mestrada pela persona metre.</li>
</ul>


## Requisitos funcionais

<p style="text-align:justify; text-indent:20px;">
Um requisito funcional é uma especificação de uma funcionalidade ou comportamento que um sistema ou software deve ser capaz de realizar. No caso do ChaosManager esses requisitos serão modelados usando o modelo de backlog SAFe, dividido em Histórias de Usuário (US), Funcionalidade (FN), Capacidade (CP) e Épicos (EP).
</p>

<p style="text-align:justify; text-indent:20px;">
Para a criação do backlog foi utilizado o mural abaixo, a versão dos requisitos aqui apresentada esta demarcada como "Segunda versão do Backlog após verificação e validação":
</p>

<iframe src='https://app.mural.co/embed/37616178-ef92-45f6-98c0-bea833159e45'
  width='100%'
  height='480px'
  style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef'
  sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox'></iframe>

<p style="text-align:justify; text-indent:20px;">
Para fins de registro abaixo está a tabela com os requisitos.
</p>

<table>
    <thead>
        <tr>
            <th>Épico</th>
            <th>Capacidade</th>
            <th>Funcionalidade</th>
            <th>Nome da História de Usuário</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td rowspan="38">Plataforma de gereciamento de campanha de rpg</td>
        <td rowspan="8">Administração caracteristicas de personagem</td>
        <td rowspan="4">Gerenciar raça</td>
        <td>Criar raça </td>
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
        <td rowspan="4">Gerenciar profissão </td>
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
        <td rowspan="14">Administração de fichas</td>
        <td rowspan="4">Gerenciar ficha de personagem</td>
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
        <td rowspan="2">Gerenciar estados</td>
        <td>Atribuir estados</td>
    </tr>
    <tr>
        <td>Retirar estado</td>
    </tr>
    <tr>
        <td rowspan="2">Gerenciar magia</td>
        <td>Adicionar magia </td>
    </tr>
    <tr>
        <td>Retirar magia </td>
    </tr>
    <tr>
        <td rowspan="2">Gerenciar arma</td>
        <td>Adicionar arma </td>
    </tr>
    <tr>
        <td>Retirar arma</td>
    </tr>
    <tr>
        <td rowspan="2">Gerenciar equipamento</td>
        <td>Adicionar equipamento</td>
    </tr>
    <tr>
        <td>Retirar equipamento</td>
    </tr>
    <tr>
        <td rowspan="2">Gerenciar item</td>
        <td>Administrar item</td>
    </tr>
    <tr>
        <td>Retirar item</td>
    </tr>
        <tr>
        <td rowspan="6">Administração de dinâmicas	</td>
        <td rowspan="3">Gerenciar testes	</td>
        <td>Realizar teste</td>
    </tr>
    <tr>
        <td>Usar Pontos de Energia</td>
    </tr>
    <tr>
        <td>Visualizar resultado do teste</td>
    </tr>
    <tr>
        <td rowspan="3">Gerenciar combate</td>
        <td>Ordenar iniciativa de combate</td>
    </tr>
    <tr>
        <td>Realizar efeito do combate</td>
    </tr>
        <tr>
        <td>Visualizar efeito do combate</td>
    </tr>
    <tr>
        <td rowspan="9">Administração sala da campanha</td>
        <td rowspan="3">Gerenciar mapa</td>
        <td>Visualizar mapa</td>
    </tr>
    <tr>
        <td>Importar mapa</td>
    </tr>
    <tr>
        <td>Editar mapa</td>
    </tr>
    <tr>
        <td rowspan="6">Gerenciar sala da campanha</td>
        <td>Criar campanha de rpg</td>
    </tr>
    <tr>
        <td>Visualizar campanha de rpg</td>
    </tr>
    <tr>
        <td>Editar campanha de rpg</td>
    </tr>
    <tr>
        <td>Excluir campanha de rpg</td>
    </tr>
    <tr>
        <td>Acessar campanha de rpg (mestre)</td>
    </tr>
    <tr>
        <td>Acessar campanha de rpg (jogador)</td>
    </tr>
    </tbody>
</table>



### Declaração das histórias de usuário

| Número | Nome                              | Declaração                                                                                                                                           |
| :----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|  US01  | Criar raça                        | Eu, como mestre quero ser capaz de criar uma raça para ter variedade de raças na campanha.                                                           |
|  US02  | Visualizar raça                   | Eu, como mestre ou jogador quero ser capaz de visualizar a lista de raças para ver as raças que estão na campanha.                                   |
|  US03  | Editar raça                       | Eu, como mestre quero ser capaz de editar uma raçapara que eu possa ajustar suas informações relevantes.                                             |
|  US04  | Excluir raça                      | Eu, como mestre quero ser capaz de excluir uma raça para manter a lista de raças atualizada.                                                         |
|  US05  | Criar profissão                   | Eu, como mestre quero ser capaz de criar uma profissão para ter variedade de profissões na campanha.                                                 |
|  US06  | Visualizar profissão              | Eu, como mestre ou jogador quero ser capaz de visualizar a lista de profissões para ver as profissões que estão na campanha.                         |
|  US07  | Editar profissão                  | Eu, como mestre quero ser capaz de editar uma profissãopara que eu possa ajustar suas informações relevantes.                                        |
|  US08  | Excluir profissão                 | Eu, como mestre quero ser capaz de excluir uma profissão para manter a lista de profissões atualizada.                                               |
|  US09  | Criar ficha de personagem         | Eu, como mestre/jogador quero ser capaz de criar uma ficha de personagem para registrar as informações do personagem                                 |
|  US10  | Visualizar ficha de personagem    | Eu, como mestre/ jogador quero ser capaz de visualizar a ficha do personagem para que eu possa acessar informações detalhadas sobre o personagem     |
|  US11  | Editar ficha de personagem        | Eu, como mestre/ jogador quero ser capaz de editar a ficha do personagem para manter suas informações atualizadas.                                   |
|  US12  | Excluir ficha de personagem       | Eu, como mestre quero ser capaz de excluir a ficha do personagem para quando o personagem morrer ou sair da campanha.                                |
|  US13  | Atribuir estados                  | Eu, como mestre/jogador quero ser capaz de atribuir um estado para definir uma penalidade a algumas ações.                                           |
|  US14  | Retirar estado                    | Eu, como mestre/jogador quero ser capaz de retirar um estado para quando uma penalidade não é mais válida.                                           |
|  US15  | Adicionar magia                   | Eu, como mestre/jogador quero ser capaz de adicionar uma magia na ficha para saber quais possuo.                                                     |
|  US16  | Retirar magia                     | Eu, como mestre/jogador quero ser capaz de retirar uma magia da ficha para quando não quiser mais usar ela.                                          |
|  US17  | Adicionar arma                    | Eu, como mestre/jogador quero ser capaz de adicionar uma arma na ficha para saber quais possuo.                                                      |
|  US18  | Retirar arma                      | Eu, como mestre/jogador quero ser capaz de retirar uma arma da ficha para quando não quiser permanecer com ela.                                      |
|  US19  | Adicionar equipamento             | Eu, como mestre/jogador quero ser capaz de adicionar um equipamento na ficha para saber quais possuo.                                                |
|  US20  | Retirar equipamento               | Eu, como mestre/jogador quero ser capaz de retirar um equipamento da ficha para quando não quiser permanecer com ele.                                |
|  US21  | Administrar item                  | Eu, como mestre/jogador quero ser capaz de administrar um item na ficha para saber quais e quantos possuo .                                          |
|  US22  | Retirar item                      | Eu, como mestre/jogador quero ser capaz retirar um item da ficha para quando não quiser permanecer com ele.                                          |
|  US23  | Realizar teste                    | Eu, como jogadorquero ser capaz de realizar um teste de ações vinculado a um personagem para que ele tente superar uma dificuldade da narrativa.     |
|  US24  | Usar Pontos de Energia            | Eu, como mestre ou jogador, quero ser capaz de usar pontos de energia para aumentar a chance de sucesso nos testes.                                  |
|  US25  | Visualizar resultado do teste     | Eu, como mestre ou jogador, quero ser capaz de visualizar os resultados do teste para verificar se obtive sucesso ou fracasso no teste               |
|  US26  | Ordenar iniciativa de combate     | Eu, como mestrequero ser capaz de adicionar fichas em uma lista para determinar a ordem de quem tomará a primeira ação em um combate.                |
|  US27  | Realizar efeito do combate        | Eu, como mestre quero ser capaz de realizar efeito de combate para agilizar a dinâmica com os jogadores.                                             |
|  US28  | Visualizar efeito do combate      | Eu, como mestre ou jogador, quero ser capaz de visualizar o efeito no turno de combate para verificar os dados que devem ser atualizados na ficha    |
|  US29  | Visualizar mapa                   | Eu, como mestre ou jogador quero ser capaz de visualizar o mapa para compreender como é a geografia do mundo da campanha.                            |
|  US30  | Importar mapa                     | Eu, como mestre quero ser capaz de importar uma imagem para representar como é a geografia do mundo da campanha.                                     |
|  US31  | Editar mapa                       | Eu, como mestre quero ser capaz de editar o mapa exibido para manter atualizado como está a geografia do mundo da campanha.                          |
|  US32  | Criar campanha de rpg             | Eu, como mestre quero ser capaz de criar uma sala de campanha para que possa reunir todos os jogadores, informações e ferramentas da minha campanha. |
|  US33  | Visualizar campanha de rpg        | Eu, como mestre ou jogador quero ser capaz de visualizar as informações da campanha para que possa estar informado de sua história.                  |
|  US34  | Editar campanha de rpg            | Eu, como mestre quero ser capaz de editar as informações da minha sala para mante-las atualizadas com o decorrer da campanha.                        |
|  US35  | Excluir campanha de rpg           | Eu, como mestre quero ser capaz de excluir a minha sala de campanha para caso ela seja finalizada ou não queira mais continuá-la.                    |
|  US36  | Acessar campanha de rpg (mestre)  | Eu, como mestre quero ser capaz de acessar a minha sala para poder mestrar uma campanha de RPG.                                                      |
|  US37  | Acessar campanha de rpg (jogador) | Eu, como jogador quero ser capaz de acessar uma sala para poder participar de uma campanha de RPG.                                                   |



## Requisitos não-funcionais

<p style="text-align:justify; text-indent:20px;">
Um requisito não funcional é uma especificação de uma característica ou propriedade do sistema ou software que não esta diretamente relacionada à sua funcionalidade, como desempenho, segurança, usabilidade, entre outras.
</p>

| Número | Declaração                                                                                                     |
| :----: | -------------------------------------------------------------------------------------------------------------- |
| RNF01  | A aplicação deve seguir o livro base de regras Order & Chaos                                                   |
| RNF02  | A aplicação deve ser responsiva a diferentes tamanhos de tela                                                  |
| RNF03  | A aplicação deve ser desenvolvida utilizando NextJS e Node                                                     |
| RNF04  | A aplicação deverá rodar nos browsers mais comumente utilizados (Chrome, Edge, Opera) em suas versões recentes |
| RNF05  | O sistema deve ser desenvolvido orientado a objetos                                                            |
| RNF06  | O sistema deve ser desenvolvido em paradigma funcional                                                         |
| RNF07  | O sistema deve utilizar Jest como biblioteca de testes                                                         |
| RNF08  | O sistema deve utilizar Github Actions para automação de processos e testes                                    |



## Histórico de versão

| Data  | Versão | Descrição          | Autor           |
| :---: | :----: | ------------------ | --------------- |
| 25/10 |  1.0   | Criação do backlog | Luciano Ricardo |