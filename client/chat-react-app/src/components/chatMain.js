import React from 'react'
import { useNavigate } from 'react-router-dom';

function ChatMain() {
  const navigate = useNavigate();

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
        {/* sent messages */}
        <div className="message-area">
          <div className="message-send">
            <p>Whatsup!</p>
          </div>
        </div>
        {/* received messages  */}
        <div className="message-area">
          <div className="message-receive">
            <p>Hey there!</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ChatMain;
