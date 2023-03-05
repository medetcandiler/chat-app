import './App.css';
import { useEffect } from 'react';
import { init } from './socketApi';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/chat';

function App() {

  useEffect(() => {
    init()

  }, [])

  return (
    <div className="container">


      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
