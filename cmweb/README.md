## Como rodar a aplicação 

Se for a primeira vez rodando o projeto, ou sempre que houver modificações dentro do arquivo `package.json` precisa rodar os comando:

Dentro de `2023.2-ChaosManager/cmweb/` e `2023.2-ChaosManager/server/`

```bash
npm install
```

Feito isso no `cmweb` e no `server`, basta iniciar com os comandos:

Para o `2023.2-ChaosManager/cmweb/`:

```bash
npm run dev
```

Para o `2023.2-ChaosManager/server/`:

```bash
npm run server
```

Agora sua aplicação Nextjs e seu servidor estão rodando!


## MongoDB (Como utilizar no front para `Campanha`)

### GET

Para fazer um `GET` você precisa importar a classe `Campanha` para instanciar o componente e a classe `Find` para fazer a busca no banco, e funciona da seguinte maneira:

```ts
import { Campanha, Find } from '@/models/campanha';

const query = await Find.findData(id);
const data = await query.json();
const { status, message, result } = data;

// status: 'error' | 'success'
// message: explica o status
// result: todas as ocorrências encontradas do ID (em teoria só retorna 1 pois o ID é único)

let campanha: Campanha = result[0];

console.log(campanha.nome);
```

Mais exemplos em `app/Components/Tests/GET/GetDB.tsx`

### POST

Para fazer um `POST` você precisa importar a classe `Campanha` para criar uma instancia e salva-la no banco:

```ts
import { Campanha } from '@/models/campanha';

const camp = new Campanha(id, nome, historia, senhaMestre);
const response = await camp.saveData();
const data = await response.json();
const { status, message } = data;

// status: 'error' | 'success'
// message: explica o status
```

Mais exemplos em `app/Components/Tests/POST/PostDB.tsx`

### PUT

Para fazer um `PUT` você precisa importar a classe `Campanha` para criar uma instancia e salva-la no banco:

```ts
import { Campanha } from '@/models/campanha';

const camp = new Campanha(id, novoNome, novaHistoria, novaSenhaMestre);
const response = await camp.updateData();
const data = await response.json();
const { status, message } = data;

// status: 'error' | 'success'
// message: explica o status
```

Mais exemplos em `app/Components/Tests/PUT/PutDB.tsx`

## Socket.io

O `socket.io` roda em um servidor, escutando e disparando comandos. Sabendo disso você precisa adicionar disparos no front para serem escutados pelo servidor e adicionar receptores no front para receberem os disparos do servidor.

### Exemplo de uso:

Para criarmos um fluxo de comunicação, primeiramente precisamos disparar um evento no front para ser recebido pelo servidor:

```ts
import {io} from 'socket.io-client';

// Para o modo dev pode deixar em localhost
const socket = io("http://localhost:3001");

// Simulando que quero disparar um evento chamado 'primeiro-evento' com os dados:
// id, status, message e result
socket.emit('primeiro-evento', ({id, status, message, result}));
```

Agora precisamos receber esse evento do lado do servidor. Para fazer isso, basta acessar o arquivo `2023.2-ChaosManager/server/index.ts` e adicionar um receptor do evento:

Obs: levando em consideração que o servidor ja esta todo configurado dentro do arquivo, basta inserir o receptor como mostrado abaixo:

```ts
// .... configurações do servidor

io.on('connection', (socket) => {

  // .... outros eventos sendo escutados

  socket.on('primeiro-evento', ({id, status, message, result}: any) => {
    console.log("recebi o primeiro evento");
  })
})

// .... configurações do servidor
```

Com o evento recebido, você pode tratar os dados como quiser. Caso queira enviar um evento de volta para o front-end, basta utilizar o comando abaixo:

```ts
// .... configurações do servidor

io.on('connection', (socket) => {

  // .... outros eventos sendo escutados

  socket.on('primeiro-evento', ({id, status, message, result}: any) => {
    socket.broadcast.emit('primeiro-evento', {id, status, message, result});
  })
})

// .... configurações do servidor
```

Agora você precisa escutar esse evento dentro do front:

```ts
import {io} from 'socket.io-client';
import { useEffect } from 'react';

const socket = io("http://localhost:3001");

socket.emit('primeiro-evento', ({id, status, message, result}));

useEffect(() => {
  socket.on('primeiro-evento', ({id, status, message, result}: any) => {
    console.log("Recebi o primeiro evento de volta");
  })
}, [socket])
```

Feito isso, agora você tem um fluxo que: sempre que o `primeiro-evento` é disparado em um navegador, todos os outros navegadores conectados nessa página, vão receber o `primeiro-evento` do servidor em tempo real.

Pode ser visto exemplos de uso em `cmweb/app/dev_tests/page.tsx`

