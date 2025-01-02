import { createContext, useState } from "react";

const ChatContext = createContext();
function ChatProvider({ children, initialChat }) {
  let [chats, setChat] = useState(initialChat);
  let [loadingMessage, setLoadingMessage] = useState(false)

  function addMessageToChatRoom(message){
    setChat((chat) => {
      return chat ? [...chat, message] : [message];
    });
    setLoadingMessage(true)
  }  

  async function sendMessage(message) {
    let msg = { role: "user", parts: message };
    
    addMessageToChatRoom(msg);

    let response = await fetch("/chat-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(response => response.json());
    
    setChat((chat) => {
      setLoadingMessage(false)      
      return [...chat,response];
    });
        
  }
  return (
    <ChatContext.Provider value={{ loadingMessage, chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
