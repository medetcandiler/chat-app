import './App.css';
import { useState } from 'react';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/chat';
import { MessageProvider } from './showMessageContext/messageContext';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:3003')
function App() {
  const [user, setUser] = useState('')
  console.log(user)
  return (
    <div className="container">
      <MessageProvider>
        <Routes>
          <Route path='/' element={<Homepage socket={socket} user={user} setUser={setUser}/>} />
          <Route path='/chat' element={<Chat socket={socket} user={user} setUser={setUser}/>} />
        </Routes>
      </MessageProvider>
    </div>
  );
}

export default App;
