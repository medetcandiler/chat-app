import { createContext, useState, useContext } from "react";

const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  const values = {
    messages,
    setMessages
  }

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
}

export const useMessage = () => useContext(MessageContext)

