import React from 'react'
import ChatFooter from './chatFooter';
import ChatMain from './chatMain';

function Chat({ socket, user}) {
  return (
    <div className='container-chat'>
      <h1 className='newFont'>Chat Room 1</h1>
      <ChatMain socket={socket} user={user}/>
      <ChatFooter socket={socket} user={user} />
    </div>
  )
}

export default Chat
