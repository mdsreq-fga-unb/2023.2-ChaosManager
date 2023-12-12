---
hide:
  - toc
---

# Missão 2 -Chaos Manager

## Backlog SAFe

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
        <td rowspan="37">Plataforma de gereciamento de campanha de rpg</td>
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
        <td rowspan="5">Administração de dinâmicas	</td>
        <td rowspan="2">Gerenciar testes</td>
        <td>Realizar teste</td>
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

| Número | Nome                              | Declaração                                                                                                                                           | Critérios de aceitação                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  US01  | Criar raça                        | Eu, como mestre quero ser capaz de criar uma raça para ter variedade de raças na campanha.                                                           | Deve ser possível incluir características das raças (nome, descrição e atributos afetados) <br>  Deve ser possivel determinar como as idades afetam essa raça. <br> Deve ser possivel que a raça altere os valores caracteristicos do personagem (atributos).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  US02  | Visualizar raça                   | Eu, como mestre ou jogador quero ser capaz de visualizar a lista de raças para ver as raças que estão na campanha.                                   | Deve ser possível selecionar a raça para visualiza-la. <br> Deve ser possível visualizar características das raças (nome, descrição, atributos afetados e valores de modificação).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  US03  | Editar raça                       | Eu, como mestre quero ser capaz de editar uma raçapara que eu possa ajustar suas informações relevantes.                                             | O sistema deve permitir que o mestre modifique características das raças (nome, descrição e atributos afetados).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  US04  | Excluir raça                      | Eu, como mestre quero ser capaz de excluir uma raça para manter a lista de raças atualizada.                                                         | Deve haver uma confirmação antes de remover a raça para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  US05  | Criar profissão                   | Eu, como mestre quero ser capaz de criar uma profissão para ter variedade de profissões na campanha.                                                 | Deve ser possível adicionar um nome e uma descrição. <br> Deve ser possível adicionar objetos da profissão. <br> Deve ser possível adicionar bônus e penalidades para os testes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  US06  | Visualizar profissão              | Eu, como mestre ou jogador quero ser capaz de visualizar a lista de profissões para ver as profissões que estão na campanha.                         | Deve ser possível selecionar a profissão para visualizar a sua descrição e objetos. <br> Deve ser possível visualizar características das profissões (nome, descrição, atributos afetados e valores de modificação).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  US07  | Editar profissão                  | Eu, como mestre quero ser capaz de editar uma profissão para que eu possa ajustar suas informações relevantes.                                       | O sistema deve permitir que o mestre modifique as características da profissão (nome, descrição e objetos).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  US08  | Excluir profissão                 | Eu, como mestre quero ser capaz de excluir uma profissão para manter a lista de profissões atualizada.                                               | Deve haver uma confirmação antes de remover a profissão para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  US09  | Criar ficha de personagem         | Eu, como mestre ou jogador quero ser capaz de criar uma ficha de personagem para registrar as informações do personagem                              | Deve ser possível cadastrar o nome, a raça, a profissão, a idade, o gênero. <br> Deve ser possível atribuir o personagem à um jogador ou ao mestre. <br> Deve ser possível escrever historia, as notas e a descrição fisica do personagem. <br> Deve ser possível atribuir atributos. <br> Deve ser possível redistribuir atributos.  Somente o mestre deve poder ver as fichas atribuídas a ele.                                                                                                                                                                                                                                                                                                                                                                |
|  US10  | Visualizar ficha de personagem    | Eu, como mestre ou jogador quero ser capaz de visualizar a ficha do personagem para que eu possa acessar informações detalhadas sobre o personagem   | Deve ser possível ver o nome, a raça, a profissão, a idade, o genero. <br> Deve ser possível ver magias, armas, equipamentos e itens. <br> Deve ser possível ver estados e traços. <br> Deve ser possível ver pontos de vida, pontos de armadura e pontos de energia. <br> Deve ser ver à quem o personagem está atribuido (mestre ou jogador). <br> Deve ser possível ver historia e a descrição fisica do personagem. <br> Deve ser possível ver o campo de anotações. <br> Deve ser possível ver os atributos.                                                                                                                                                                                                                                                |
|  US11  | Editar ficha de personagem        | Eu, como mestre ou jogador quero ser capaz de editar a ficha do personagem para manter suas informações atualizadas.                                 | O sistema deve permitir o jogador/mestre editar o nome, a raça, a profissão, a idade, o gênero, a experiência e o dinheiro do personagem. <br> Deve ser possível editar possível ver magias, armas, equipamentos e itens. <br> Deve ser possível editar possível ver estados e traços. <br> O sistema deve permitir o jogador/mestre mudar à quem o personagem está atribuido (mestre ou jogador). <br> O sistema deve permitir que o mestre/jogador edite os pontos atuais de vida, de energia e de armadura. <br> O sistema deve permitir o jogador/mestre editar a história e a descrição física do personagem. <br> O sistema deve permitir o jogador/mestre editar o campo de anotações. <br> O sistema deve permitir o jogador/mestre editar os atributos. |
|  US12  | Excluir ficha de personagem       | Eu, como mestre quero ser capaz de excluir a ficha do personagem para quando o personagem morrer ou sair da campanha.                                | Deve haver uma confirmação antes de remover a ficha para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  US13  | Atribuir estados                  | Eu, como mestre ou jogador quero ser capaz de atribuir um estado para definir uma penalidade a algumas ações.                                        | Deve ser possivel selecionar estados já existentes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  US14  | Retirar estado                    | Eu, como mestre ou jogador quero ser capaz de retirar um estado para quando uma penalidade não é mais válida.                                        | O sistema deve permitir que o mestre/jogador retirar um estado da ficha ao selecioná-lo e clicar em um botão que indique remoção. <br> Deve haver uma confirmação antes de remover o estado para evitar erros. <br> Deve poder alterar os testes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  US15  | Adicionar magia                   | Eu, como mestre ou jogador quero ser capaz de adicionar uma magia na ficha para saber quais possuo.                                                  | Para adicionar uma nova magia deve ser possivel adicionar os valores caracteristicos da magia (classe da magia, nome e descrição). <br> Deve ser possível adicionar no máximo 10 magias.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  US16  | Retirar magia                     | Eu, como mestre ou jogador quero ser capaz de retirar uma magia da ficha para quando não quiser mais usar ela.                                       | O sistema deve permitir que o mestre/jogador retirar uma magia da ficha ao selecioná-la e clicar em um botão que indique remoção. <br> Deve haver uma confirmação antes de remover a magia para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  US17  | Adicionar arma                    | Eu, como mestre ou jogador quero ser capaz de adicionar uma arma na ficha para saber quais possuo.                                                   | Deve ser possivel selecionar armas já existentes.  <br> Deve ser possível que o jogador/mestre adicione uma nova arma a ficha. <br> O sistema deve validar se a arma sendo adicionada não possui informações diferentes de alguma já existente. <br> US18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  US18  | Retirar arma                      | Eu, como mestre/jogador quero ser capaz de retirar uma arma da ficha para quando não quiser permanecer com ela.                                      | O sistema deve permitir o jogador/mestre retirar uma arma da ficha ao selecioná-la e clicar em um botão que indique remoção. <br>  Deve haver uma confirmação antes de remover a arma para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  US19  | Adicionar equipamento             | Eu, como mestre ou jogador quero ser capaz de adicionar um equipamento na ficha para saber quais possuo.                                             | Deve ser possivel selecionar equipamentos já existentes. <br> Deve ser possível que o jogador/mestre adicione um novo equipamento a ficha. <br> Para adicionar um novo equipamento o jogador/mestre deve preencher os campos de nome, modificador de dano, teste usado e peso. <br> O sistema deve validar se o equipamento sendo adicionada não possui informações diferentes de alguma já existente. <br> Deve ser possível adicionar no máximo 5 equipamentos.                                                                                                                                                                                                                                                                                                |
|  US20  | Retirar equipamento               | Eu, como mestre ou jogador quero ser capaz de retirar um equipamento da ficha para quando não quiser permanecer com ele.                             | Deve ser possível retirar um equipamento da ficha ao selecioná-lo e clicar em um botão que indique remoção. <br> Deve haver uma confirmação antes de remover o equipamento para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  US21  | Administrar item                  | Eu, como mestre ou jogador quero ser capaz de administrar um item na ficha para saber quais e quantos possuo .                                       | De ser possível adicionar novos itens. <br>  Para adicionar um novo item devem ser preenchidos os campos de nome e peso. <br>  Ao adicionar um novo item a quantidade será 1 por padrão. <br> Deve ser possível adicionar no máximo 15 itens. <br> Deve ser possível aumentar e diminuir a quantidade de um item.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  US22  | Retirar item                      | Eu, como mestre ou jogador quero ser capaz retirar um item da ficha para quando não quiser permanecer com ele.                                       | O sistema deve permitir o jogador/mestre retirar um item da ficha ao selecioná-lo e clicar em um botão que indique remoção. <br Deve haver uma confirmação antes de remover o item para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  US23  | Realizar teste                    | Eu, como jogadorquero ser capaz de realizar um teste de ações vinculado a um personagem para que ele tente superar uma dificuldade da narrativa.     | Deve ser possível realizar os 10 testes possíveis de acordo com o livro de regras (Força, Res. Física, Res. Mental, Sobrevivência, Agilidade, Destreza, Criatividade, Manipulação, Competência, Sorte). <br> Deve ter o campo para randomizar um inteiro de 1 a 20. <br> O sistema deve verificar se foi utilizado pontos de energia para realizar o teste de competência.                                                                                                                                                                                                                                                                                                                                                                                       |
|  US24  | Visualizar resultado do teste     | Eu, como mestre ou jogador, quero ser capaz de visualizar os resultados do teste para verificar se obtive sucesso ou fracasso no teste               | Deve ser possivel visualizar os resultados do teste por meio do registro de ações. <br> Deve mostrar o inteiro de 1 a 20 randomizado quando realiza teste no registro de ações. <br>  Deve mostrar o valor do teste de acordo com a ficha. <br> Se o valor do inteiro de 1 a 20 randomizado for igual a 1, deve mostrar a mensagem "falha crítica". <br> Se o valor do inteiro de 1 a 20 randomizado for igual a 20, deve mostrar a mensagem "Acerto crítico".                                                                                                                                                                                                                                                                                                   |
|  US25  | Ordenar iniciativa de combate     | Eu, como mestrequero ser capaz de adicionar fichas em uma lista para determinar a ordem de quem tomará a primeira ação em um combate.                | Ao iniciar um novo turno de um combate o mestre deve ser capaz de adicionar em uma lista as fichas dos personagens que irão participar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  US26  | Realizar efeito do combate        | Eu, como mestre quero ser capaz de realizar efeito de combate para agilizar a dinâmica com os jogadores.                                             | Deve adicionar o valor da ação/retaliação. <br> Deve adicionar valor de dano/PdE, se houver. <br> Deve adicionar reação de defender ou a resistência física. <br> Deve escolher a ficha de quem vai sofrer o dano (Ou a ficha ser por padrão a ordem do turno do combate que vai mudando quando passa pra proxima pessoa)                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  US27  | Visualizar efeito do combate      | Eu, como mestre ou jogador, quero ser capaz de visualizar o efeito no turno de combate para verificar os dados que devem ser atualizados na ficha    | Deve ser possivel visualizar o efeito do combate por meio do registro de ações. <br> Deve ser possível visualizar os danos causados no registro de ações.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  US28  | Visualizar mapa                   | Eu, como mestre ou jogador quero ser capaz de visualizar o mapa para compreender como é a geografia do mundo da campanha.                            | Todos os jogadores devem ver as alterações no mapa simultaneamente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  US29  | Importar mapa                     | Eu, como mestre quero ser capaz de importar uma imagem para representar como é a geografia do mundo da campanha.                                     | A imagem precisa ser .png ou .jpg. <br> A imagem precisa ter a resolução mínima de 1280 x 720 pixels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  US30  | Editar mapa                       | Eu, como mestre quero ser capaz de editar o mapa exibido para manter atualizado como está a geografia do mundo da campanha.                          | Deve ser possível desenhar sobre o mapa com um pincel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  US31  | Criar campanha de rpg             | Eu, como mestre quero ser capaz de criar uma sala de campanha para que possa reunir todos os jogadores, informações e ferramentas da minha campanha. | Deve ser possível o mestre nomear a sala de campanha. <br> Deve ser possível adicionar uma senha de acesso a sala de campanha para o mestre. <br>  A senha deve ser obrigatória ao mestre, e deve ter no mínimo 5 dígitos. <br>  Deve ser possível incluir informações relacionadas à campanha. <br> Deve ser gerado um código de acesso para que os jogadores acessem a campanha.                                                                                                                                                                                                                                                                                                                                                                               |
|  US32  | Visualizar campanha de rpg        | Eu, como mestre ou jogador quero ser capaz de visualizar as informações da campanha para que possa estar informado de sua história.                  | Deve ser possível visualizar as informações da campanha como: nome e história da campanha. <br> O sistema deve permitir o mestre visualizar o nome e as senhas da sala. <br> O sistema deve permitir o jogador visualizar o nome e a senha dos jogadores da sala.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  US33  | Editar campanha de rpg            | Eu, como mestre quero ser capaz de editar as informações da minha sala para mante-las atualizadas com o decorrer da campanha.                        | O mestre deve ser capaz de editar as informações da campanha como nome e história da campanha.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  US34  | Excluir campanha de rpg           | Eu, como mestre quero ser capaz de excluir a minha sala de campanha para caso ela seja finalizada ou não queira mais continuá-la.                    | Apenas mestre deve ser capaz de excluir a sala de campanha. <br> Ao excluir a sala, todas as informações associadas à campanha também devem ser removidas. <br> Deve haver uma confirmação antes de remover a sala de campanha para evitar erros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  US35  | Acessar campanha de rpg (mestre)  | Eu, como mestre quero ser capaz de acessar a minha sala para poder mestrar uma campanha de RPG.                                                      | O acesso deve ser concedido ao mestre através da senha de acesso. <br> Deverá haver uma notificação caso a senha seja digitada incorretamente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  US36  | Acessar campanha de rpg (jogador) | Eu, como jogador quero ser capaz de acessar uma sala para poder participar de uma campanha de RPG.                                                   | Jogadores devem ser capazes de inserir um um nickname para acessar a sala de campanha. <br> O acesso deve ser concedido através de um código de acesso.                                                                                                                                                                                                                
## Requisitos não-funcionais

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

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/priorizacaoMVP/ftf.png">
<p><b>Figura 1:</b> Priorização das features pelo FTF. </p>
</div>

<p style="text-align:justify; text-indent:20px;"> 
Apenas as features com prioridade maior que 0,25 foram consideradas viáveis para o MVP, então passamos para priorizar as User Stories.
</p>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/priorizacaoMVP/moscow.png">
<p><b>Figura 2:</b> Priorização das US pelo MoSCoW.</p>
</div>