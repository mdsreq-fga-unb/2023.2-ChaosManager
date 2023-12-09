# Estudo de Caso - VoyageX

## Introdução

VoyageX foi contruído pelo professor George Marsicano (2023) como um Estudo de Caso almejando uma contribuição na matéria envolvendo o assunto "Casos de Uso". Neste artefato, é apresentado o que foi realizado pela facção Insurgentes Estelares, sintetizando os Atores, Casos de Uso identificado além das suas especificações com base no documento proposto.

## Casos de Uso

### Atores

Foram identificados 2 atores dos fluxos de eventos do nosso sistema, são eles:

- Viajante: Destinado a quem utiliza os serviços do aplicativo VoyageX
- Provedor de Serviços: Destinado a quem organiza os serviços que serão ofertados
- Usuário: Refere-se a ações compartilhadas em que os outros dois atores participam

## Casos de Uso Identificados

É apresentado na Tabela 1 os Casos de Uso que foram encontrados:

<table>
    <tr>
      <th>ID</th>
      <th>NOME DO CASO DE USO</th>
      <th>ATOR</th>
      <th>RESULTADO</th>
    </tr>
    <tr>
      <td>CdU-01</td>
      <td>Realizar cadastro</td>
      <td>Usuário</td>
      <td>Cadastro realizado no aplicativo</td>
    </tr>
    <tr>
      <td>CdU-02</td>
      <td>Efetuar login</td>
      <td>Usuário</td>
      <td>Acesso autorizado ao "VoyageX"</td>
    </tr>
    <tr>
      <td>CdU-03</td>
      <td>Realizar feedbacks de serviços</td>
      <td>Viajante</td>
      <td>Os viajantes podem avaliar os serviços utilizados e os provedores de hospedagem podem avaliar o comportamento do contratante</td>
    </tr>
    <tr>
      <td>CdU-04</td>
      <td>Acessar informações de diversos destinos</td>
      <td>Viajante</td>
      <td>Visualizar conteúdos de destinos disponíveis</td>
    </tr>
    <tr>
      <td>CdU-05</td>
      <td>Gerenciar itinerário</td>
      <td>Usuário</td>
      <td>Manter viagem com calendário e o cronograma atualizado</td>
    </tr>
    <tr>
      <td>CdU-06</td>
      <td>Receber recomendações</td>
      <td>Viajante</td>
      <td>Obter sugestões de acomodações e atividades de acordo com preferências</td>
    </tr>
    <tr>
      <td>CdU-07</td>
      <td>Pesquisar informações do destino escolhido</td>
      <td>Viajante</td>
      <td>Pesquisar conteúdo do destino escolhido</td>
    </tr>
    <tr>
      <td>CdU-08</td>
      <td>Reservar acomodação</td>
      <td>Viajante</td>
      <td>Acomodação reservada</td>
    </tr>
    <tr>
      <td>CdU-09</td>
      <td>Reservar atividade</td>
      <td>Viajante</td>
      <td>Atividade reservada</td>
    </tr>
    <tr>
      <td>CdU-10</td>
      <td>Efetuar pagamento</td>
      <td>Viajante</td>
      <td>Acessar informações da atividade escolhida</td>
    </tr>
    <tr>
      <td>CdU-11</td>
      <td>Gerenciar reserva de atividades</td>
      <td>Viajante</td>
      <td>Reservar, atualizar e cancelar reserva de acomodação</td>
    </tr>
    <tr>
      <td>CdU-12</td>
      <td>Gerenciar reserva de acomodações</td>
      <td>Provedor de Serviços</td>
      <td>Cadastrar e remover serviços de hospedagem e atividades</td>
    </tr>
  </table>

Com os atores e casos de usos identificados, foi criado o diagrama de casos de uso para visualizar como e por quem as ações são realizadas dentro do sistema, assim como a ligação entre casos quando existiam. O diagrama está disponível na Figura 1.

<img src="../assets/casosUso/diagVX" alt="diagVX">

## Especificação dos Casos de Uso

### CdU-07 - Pesquisar informações do destino escolhido

<table>
    <tr>
      <td>Nome do caso de uso</td>
      <td>Pesquisar informações do destino escolhido</td>
    </tr>
    <tr>
      <td>Autor</td>
      <td>Gustavo França, Larissa Gomes e Oscar de Brito</td>
    </tr>
    <tr>
      <td>1. Atores</td>
      <td>Viajante</td>
    </tr>
    <tr>
      <td>2. Breve Descrição</td>
      <td>O usuário pode pesquisar informações detalhadas sobre o local, incluindo os melhores períodos para visitar, atrações culturais, culinária local, e dicas de viagem. Também podem filtrar acomodações por preço, localização, tipo (hotel, aluguel de temporada, pousada), e avaliações de outros viajantes.</td>
    </tr>
    <tr>
      <td>3. Fluxo básico de eventos</td>
      <td>
        <p>3.1. O viajante digita o destino que deseja pesquisar</p>
        <p>3.2. O sistema apresenta as seguintes opções:</p>
        <ul>
          <li>Pesquisar informações de destino</li>
          <li>Filtrar acomodações (FA01)</li>
        </ul>
        <p>3.3. O viajante seleciona "Pesquisar informações de destino" (FE01)</p>
        <p>3.4. O sistema retorna informações sobre o local:</p>
        <ul>
          <li>Melhores períodos para visitar;</li>
          <li>Atrações culturais;</li>
          <li>Culinária local;</li>
          <li>Dicas de viagem.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>4. Fluxo Alternativos</td>
      <td>
        <p>4.1. FA01 - Filtrar acomodações</p>
        <p>4.1.1. O viajante seleciona a opção "Filtrar acomodações"</p>
        <p>4.1.2. O sistema apresenta as seguintes opções de filtro:</p>
        <ul>
          <li>Preço</li>
          <li>Localização</li>
          <li>Tipo (hotel, aluguel de temporada, pousada)</li>
          <li>Avaliações de outros viajantes</li>
        </ul>
        <p>4.1.3. O viajante informa os filtros que deseja aplicar (FE01)</p>
        <p>4.1.4. O sistema retorna as acomodações mais compatíveis de acordo com os filtros selecionados (FA02)</p>
        <p>4.2. FA02 - Visualizar acomodação</p>
        <p>4.2.1. O viajante selecionou a acomodação que deseja</p>
        <p>4.2.2. O sistema apresenta as informações sobre ela:</p>
        <ul>
          <li>Fotos;</li>
          <li>Descrições detalhadas;</li>
          <li>Disponibilidade</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5. Fluxos de exceção</td>
      <td>FE01 - Destino inválidoNo passo 3.3 do FB e 4.1.3, caso o destino digitado não corresponda a nenhum local válido, o sistema deve emitir a mensagem: “Destino inválido, digite novamente”. E, o caso de uso retorna ao 3.1 do FB.</td>
    </tr>
    <tr>
      <td>6. Pré-condições</td>
      <td>O viajante deve estar logado na sua conta</td>
    </tr>
    <tr>
      <td>7. Pós-condições</td>
      <td>Acomodações filtradas como desejado</td>
    </tr>
    <tr>
      <td>8. Pontos de extensão</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>9. Requisitos especiais</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>10. Regras de negócio</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>11. Informações adicionais</td>
      <td>Não há.</td>
    </tr>
  </table>



### CdU-08 - Reservar acomodação

 <table>
    <tr>
      <td>Nome do caso de uso</td>
      <td>Reservar acomodação</td>
    </tr>
    <tr>
      <td>Autor</td>
      <td>Gustavo França, Larissa Gomes e Oscar de Brito</td>
    </tr>
    <tr>
      <td>1. Atores</td>
      <td>Viajante e o Provedor de serviços</td>
    </tr>
    <tr>
      <td>2. Breve Descrição</td>
      <td>O viajante pode escolher a acomodação, visualizar fotos, ler descrições detalhadas, verificar a disponibilidade e realizar a reserva diretamente pelo aplicativo.</td>
    </tr>
    <tr>
      <td>3. Fluxo básico de eventos</td>
      <td>
        <p>3.1. O viajante seleciona o período de reserva (FE01)</p>
        <p>3.2. O viajante informa a quantidade de hóspedes</p>
        <p>3.3. O viajante informa os dados dos hóspedes</p>
        <p>3.4. O viajante seleciona a opção "Reservar acomodação"</p>
        <p>3.5. O sistema valida as informações</p>
        <p>3.6. O sistema informa o valor final e solicita o pagamento (PE02)</p>
        <p>3.7. O sistema envia a solicitação de reserva para o provedor de serviços</p>
        <p>3.8. O provedor de serviços analisa a reserva (FE02)</p>
        <p>3.9. O sistema envia uma confirmação da reserva para o viajante e adiciona às reservas realizadas</p>
      </td>
    </tr>
    <tr>
      <td>4. Fluxo Alternativos</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>5. Fluxos de exceção</td>
      <td>
        <p>5.1. FE01 - Período inválidoNo passo 3.1 do FB, caso o período de reserva selecionado não esteja disponível, o sistema deve emitir a mensagem: “Esta data não está disponível”. E, o caso de uso retorna ao 3.1 do FB.</p>
        <p>5.2. FE02 - Reserva rejeitadaNo passo 3.8 do FB, caso o provedor de serviços rejeite a solicitação de reserva, o sistema deve enviar um aviso ao viajante: “Sua solicitação de reserva foi recusada”. E, o caso de uso finaliza.</p>
      </td>
    </tr>
    <tr>
      <td>6. Pré-condições</td>
      <td>
        <p>6.1. O viajante deve possuir uma conta na plataforma</p>
        <p>6.2. O viajante deve estar logado na sua conta</p>
        <p>6.3. O viajante selecionou para visualizar a acomodação desejada</p>
      </td>
    </tr>
    <tr>
      <td>7. Pós-condições</td>
      <td>Reserva de acomodação concluída</td>
    </tr>
    <tr>
      <td>8. Pontos de extensão</td>
      <td>
        <p>8.1. PE01 - Reservar acomodação é um ponto de extensão do caso de uso Pesquisar informações do destino escolhido, no FA02 - Visualizar acomodação</p>
        <p>8.2. PE02 - Efetuar pagamento é um ponto de extensão do caso de uso Reservar acomodação</p>
      </td>
    </tr>
    <tr>
      <td>9. Requisitos especiais</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>10. Regras de negócio</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>11. Informações adicionais</td>
      <td>Não há.</td>
    </tr>
  </table>

### CdU-10 - Efetuar pagamento

<table>
    <tr>
      <td>Nome do caso de uso</td>
      <td>Efetuar Pagamento</td>
    </tr>
    <tr>
      <td>Autor</td>
      <td>Gustavo França, Larissa Gomes e Oscar de Brito</td>
    </tr>
    <tr>
      <td>1. Atores</td>
      <td>Viajante</td>
    </tr>
    <tr>
      <td>2. Breve Descrição</td>
      <td>O viajante deve pagar os débitos pendentes</td>
    </tr>
    <tr>
      <td>3. Fluxo básico de eventos</td>
      <td>
        <p>3.1. O sistema apresenta as seguintes opções:</p>
        <p>    - Efetuar pagamento</p>
        <p>    - Adicionar novo cartão (FA01)</p>
        <p>3.2. O viajante seleciona a opção "Efetuar pagamento"</p>
        <p>3.3. O sistema apresenta as seguintes opções:</p>
        <p>    - Cartão de crédito</p>
        <p>    - Cartão de débito</p>
        <p>    - PIX</p>
        <p>    - Boleto</p>
        <p>3.4. O viajante seleciona uma forma de pagamento (RN01)</p>
        <p>3.5. O viajante confirma o pagamento (RN02) (RN03) (RN04)</p>
        <p>3.6. O sistema verifica se o pagamento foi efetuado (FE01)</p>
        <p>3.7. O sistema emite um comprovante de pagamento e confirma o pagamento da reserva</p>
      </td>
    </tr>
    <tr>
      <td>4. Fluxo Alternativos</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>5. Fluxos de exceção</td>
      <td>
        <p>5.1. FE01 - Pagamento não identificadoNo passo 3.6 do FB, caso o sistema não identifique nenhum pagamento efetuado, o sistema deve emitir a mensagem: “O pagamento não foi finalizado”. E, o caso de uso retorna ao 3.1 do FB.</p>
      </td>
    </tr>
    <tr>
      <td>6. Pré-condições</td>
      <td>
        <p>6.1. O viajante deve possuir uma conta na plataforma</p>
        <p>6.2. O viajante deve estar logado na sua conta</p>
        <p>6.3. O viajante realizou uma reserva</p>
        <p>6.4. O viajante possui o pagamento de uma reserva pendente</p>
      </td>
    </tr>
    <tr>
      <td>7. Pós-condições</td>
      <td>Pagamento da reserva confirmado</td>
    </tr>
    <tr>
      <td>8. Pontos de extensão</td>
      <td>
        <p>8.1. PE01 - Efetuar pagamento é um ponto de extensão do caso de uso Reservar acomodação</p>
      </td>
    </tr>
    <tr>
      <td>9. Requisitos especiais</td>
      <td>Não há.</td>
    </tr>
    <tr>
      <td>10. Regras de negócio</td>
      <td>
        <p>RN01 - Se a forma de pagamento escolhida for cartão de crédito ou débito, então o viajante deverá selecionar um dos cartões da carteira.</p>
        <p>RN02 - Quando a forma de pagamento escolhida for Boleto e PIX, então o pagamento deve ser realizado dentro de 30 minutos.</p>
        <p>RN03 - Quando a forma de pagamento escolhida for cartão de crédito, então o cartão selecionado deve possuir limite para ser debitado.</p>
        <p>RN04 - Quando a forma de pagamento escolhida for cartão de crédito, então o cartão selecionado deve possuir saldo para ser debitado.</p>
      </td>
    </tr>
    <tr>
      <td>11. Informações adicionais</td>
      <td>Não há.</td>
    </tr>
  </table>


| Data  | Versão | Descrição                            | Autor                          |
| :---: | :----: | ------------------------------------ | ------------------------------ |
| 09/12 |  1.0   | Criação do artefato | Gustavo França