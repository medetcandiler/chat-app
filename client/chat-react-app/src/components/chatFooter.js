import React, { useState, useEffect } from "react";


function ChatFooter({ socket,user }) {
  const [message, setMessage] = useState('')

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('message', {
        text: message,
        id: `${socket.id}${Math.random()}`,
        name: user,
        socketId: socket.id
      })
    }
    setMessage('')
  }
  console.log(message)
  return (
    <div className="container-chatfooter">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input input-sender"
          placeholder="Write something to send "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          className="btn btn-sender"
          type="submit"
          value='Send'
        />
      </form>
    </div >
  )
}

export default ChatFooter;