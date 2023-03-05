import React from "react";

function ChatFooter(){
  return(
    <div className="container-chatfooter">
      <form>
        <input 
          type="text" 
          className="input input-sender"
          placeholder="Write something to send "
        />
        <input className="btn btn-sender" type="submit" value='Send' />
      </form>
    </div >
  )
}

export default ChatFooter;