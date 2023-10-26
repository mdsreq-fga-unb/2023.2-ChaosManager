---
hide:
  - toc
---

# Backlog Casos de Uso

## Introdução
<p align="justify">&emsp;&emsp; O Processo Unificado utiliza casos de uso como forma de declaração e especificação de requisitos. Tendo isso em vista, antes de especificar os casos de uso, foi necessário elicitar os requisitos a serem declarados. Para isso, foram realizadas previamente as atividades de Elicitação e Descoberta, Análise e Consenso, Verificação e Validação da Engenharia de Requisitos. Esse processo pode ser observado na Figura 1 e os requisitos finais elicitados e passados pela verificação e validação na Tabela 1.</p> 

<div align="center" style="text-align: center">
<img src="assets/casosUso/requisitos.png">
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
            <td>Acessar campanha de RPG (mestre)</td>
        </tr>
        <tr>
            <td>Acessar campanha de RPG (jogador)</td>
        </tr>
    </tbody>
</table>

<div align="center" style="text-align: center">
<p><b>Tabela 1:</b> Requisitos Elicitados. </p>
</div>


## Casos de Uso

### Atores

<p align="justify">&emsp;&emsp; Foram identificados 2 atores dos fluxos de eventos do nosso sistema, são eles: </p>

- <b>Mestre:</b> refere-se ao jogador de uma campanha de RPG que deseja mestrar uma campanha no ChaosManager.
- <b>Jogador:</b> refere-se ao jogador de uma campanha de RPG que deseja participar de um campanha mestrada pela persona mestre

### Casos de Uso Identificados

<p align="justify">&emsp;&emsp; Com base nos requisitos elicitados, foram identificados 15 casos de uso, como apresentado na Tabela 2. </p>

| ID  | Nome do Caso de Uso |
| :---: | :----: |
| CdU-01  | Criar Campanha de RPG |
| CdU-02  | Gerenciar acesso da campanha de RPG |
| CdU-03  | Gerenciar ficha de personagem |
| CdU-04  | Excluir ficha de personagem |
| CdU-05  | Gerenciar teste |
| CdU-06  | Gerenciar combate |
| CdU-07  | Gerenciar estados |
| CdU-08  | Gerenciar magia |
| CdU-09  | Gerenciar arma |
| CdU-10  | Gerenciar equipamento |
| CdU-11  | Gerenciar item  |
| CdU-12  | Gerenciar raça |
| CdU-13  | Visualizar raça |
| CdU-14  | Gerenciar profissão |
| CdU-15  | Visualizar profissão |

<div align="center" style="text-align: center">
<p><b>Tabela 2:</b> Casos de Uso. </p>
</div>

### Especificação dos Casos de Uso

#### CdU-01

<div align="center" style="text-align: center">
<img src="assets/casosUso/1.png">
<p><b>Figura 2:</b> Especificação Caso de Uso 01. </p>
</div>

#### CdU-02

<div align="center" style="text-align: center">
<img src="assets/casosUso/2.png">
<p><b>Figura 3:</b> Especificação Caso de Uso 02. </p>
</div>

#### CdU-03

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/3.png">
<p><b>Figura 4:</b> Especificação Caso de Uso 03. </p>
</div>

#### CdU-04

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/4.png">
<p><b>Figura 5:</b> Especificação Caso de Uso 04. </p>
</div>

#### CdU-05

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/5.png">
<p><b>Figura 6:</b> Especificação Caso de Uso 05. </p>
</div>

#### CdU-06

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/6.png">
<p><b>Figura 7:</b> Especificação Caso de Uso 06. </p>
</div>

#### CdU-07

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/7.png">
<p><b>Figura 8:</b> Especificação Caso de Uso 07. </p>
</div>

#### CdU-08

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/8.png">
<p><b>Figura 9:</b> Especificação Caso de Uso 08. </p>
</div>

#### CdU-09

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/9.png">
<p><b>Figura 10:</b> Especificação Caso de Uso 09. </p>
</div>

#### CdU-10

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/10.png">
<p><b>Figura 11:</b> Especificação Caso de Uso 10. </p>
</div>

#### CdU-11

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/11.png">
<p><b>Figura 12:</b> Especificação Caso de Uso 11. </p>
</div>

#### CdU-12

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/12.png">
<p><b>Figura 13:</b> Especificação Caso de Uso 12. </p>
</div>

#### CdU-13

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/13.png">
<p><b>Figura 14:</b> Especificação Caso de Uso 13. </p>
</div>

#### CdU-14

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/14.png">
<p><b>Figura 15:</b> Especificação Caso de Uso 14. </p>
</div>

#### CdU-15

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.2-ChaosManager/main/docs/assets/casosUso/15.png">
<p><b>Figura 16:</b> Especificação Caso de Uso 15. </p>
</div>

### Backlog priorizado

<p align="justify">&emsp;&emsp; Para Organizar e Atualizar o Backlog, realizamos a priorização dos Casos de Uso utilizando a técnica MoSCoW para determinar a prioridade dos requisitos. A execução da técnica pode ser vista na Figura 17.</p>

<div align="center" style="text-align: center">
<img src="assets/casosUso/priorizacaoCdU.png">
<p><b>Figura 17:</b> Priorização MoSCoW. </p>
</div>

### MVP

<p align="justify">&emsp;&emsp; Com base nos objetivos a serem atingidos no projeto, os Casos de Uso a fazerem parte do MVP foram selecionados com isso em vista. A Tabela 3 apresenta a relação dos Casos de Uso e qual objetivo secundário estariam contribuindo para ser atingido. Cumprindo todos os objetivos secundários, o objetivo principal de <b>“Unificar ferramentas de Combate, fichas de personagem, ação/teste de habilidade e interpretação de um rpg de mesa por meio da implementação do sistema de regras Order&Caos.
”</b> será alcançado.</p>

| Objetivos secundários  | Casos de Uso do MVP |
| :---: | :----: |
| Permitir que jogadores se reunam em um único ambiente | CdU-01 - Criar Campanha de RPG </br> CdU-02 - Gerenciar acesso da campanha de RPG |
| Os usuários devem conseguir ter acesso a todas as suas informações por meio da ficha de personagem | CdU-03 - Gerenciar ficha de personagem </br> CdU-07 - Gerenciar estados </br> CdU-08 - Gerenciar magia </br> CdU-09 - Gerenciar arma </br> CdU-10 - Gerenciar equipamento </br> CdU-11 - Gerenciar item |
| Os usuários devem poder usufruir das dinâmicas disponíveis (Testes e combate) | CdU-05 - Gerenciar teste </br> CdU-06 - Gerenciar combate |

## Histórico de versão

| Data  | Versão | Descrição                            | Autor                          |
| :---: | :----: | ------------------------------------ | ------------------------------ |
| 25/10 |  1.0   | Criação da priorização de requisitos | Oscar de Brito e Larissa Gomes |
