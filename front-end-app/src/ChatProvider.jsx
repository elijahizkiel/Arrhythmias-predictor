import { createContext, useState } from "react";

const ChatContext = createContext();
function ChatProvider({ children, initialChat }) {
  let [chats, setChat] = useState(initialChat);
  function addMessageToChatRoom(message){
    setChat((chat) => {
      return chat ? [...chat, message] : [message];
    });
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
      return [...chat,response];
    });    
  }
  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
