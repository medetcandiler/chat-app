const app = require('express')();
const http = require('http').createServer(app)
const { Server } = require('socket.io');
const io = new Server(http)
const cors = require('cors');
app.use(cors());

const PORT = 3003;

app.get('/', (req, res) => {
  res.send('Hello citizensss of the world..');
});

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected`);



  socket.on('disconnect', () => {
    console.log(`${socket.id} user left the room.`)
  })
});

http.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});