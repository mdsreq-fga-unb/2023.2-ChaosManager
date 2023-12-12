const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log("connection");

  socket.on('find-data', ({id, status, message, result}: any) => {
    socket.broadcast.emit('find-data', {id, status, message, result})
  })

  socket.on('save-data', ({id, status, message}: any) => {
    socket.broadcast.emit('save-data', {id, status, message})
  })

  socket.on('update', (campanha) => {
    socket.broadcast.emit('update', campanha);
  })

  socket.on('result-action', (data) => {
    socket.broadcast.emit('result-action', data);
  })

  socket.on('result-reaction', (data) => {
    socket.broadcast.emit('result-reaction', data);
  })

  socket.on('realize-action', (data) => {
    socket.broadcast.emit('realize-action', data);
  })

  socket.on('recipe-action', (data) => {
    socket.broadcast.emit('recipe-action', data);
  })
})

server.listen(8080, () => {
  console.log('✔️ Server listening on port 8080')
})