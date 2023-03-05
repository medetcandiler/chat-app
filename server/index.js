const app = require('express')();
const http = require('http').createServer(app)
const cors = require('cors');
app.use(cors());
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
})

const PORT = 3003;

app.get('/', (req, res) => {
  res.send('Hello citizensss of the world..');
});

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected`);

  socket.on('message', (data) => {
    console.log(data);
    io.emit('receive', data);
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} user left the room.`)
  })
});

http.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});