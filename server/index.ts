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
    console.log('find-data');
    socket.broadcast.emit('find-data', {id, status, message, result})
  })

  socket.on('save-data', ({id, status, message}: any) => {
    console.log('save-data');
    socket.broadcast.emit('save-data', {id, status, message})
  })
})

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001')
})