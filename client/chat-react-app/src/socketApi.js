import io from 'socket.io-client';

let socket;

export const init = (x) => {
  console.log('connecting to the server....')

  socket = io("http://localhost:3003", {
    transports:['websocket'],
  });


  socket.on('connect', () => {
    console.log('connected to the server')
  })
}