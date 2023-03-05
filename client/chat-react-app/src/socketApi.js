import io from 'socket.io-client';

export let socket;

export const init = (x) => {
  console.log('connecting to the server....')

  socket = io("http://localhost:3003", {
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    console.log('connected to the server')
  })
}


export const send = (data) => {
  socket.emit('message', {
    text: data,
    name: localStorage.getItem('userName'),
    id: `${socket.id}`
  })
}



