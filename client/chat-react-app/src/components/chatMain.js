import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../showMessageContext/messageContext';

function ChatMain({ socket, user }) {
  const navigate = useNavigate();
  const { messages, setMessages } = useMessage([]);

  useEffect(() => {
    socket.on('receive' , data => setMessages([...messages, data]))
  }, [ messages])


  const handleLeaveClick = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  }

  return (
    <div className='container-chatmain'>
      <div className='container-btn-leave'>
        <button className='btn btn-leave' onClick={handleLeaveClick}>Leave Chat</button>
      </div>
      <div className="container-message">
        {messages.map(item => 
          item.name == user ?
            < div className="message-area" key={item.id} >
              <div className="message-send">
                <p>{item.text}</p>
              </div>
            </div> :
            <div className="message-area" key={item.id}>
              <div className="message-receive">
                <p>{item.text}</p>
              </div>
            </div>
        )}
      </div>
    </div >
  )
};

export default ChatMain;



