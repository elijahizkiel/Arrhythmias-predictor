import { createContext, useState } from "react";

const ChatContext = createContext();
function ChatProvider({ children, initialChat }) {
  let [chats, setChat] = useState(initialChat);
  function sendMessage(message) {
    console.log('message sent from user '+ message)
    let msg = {role:'user', part:message}
    setChat((chat) => {
      return chat?[...chat, msg]:[msg];
    });
  }
  return <ChatContext.Provider value={{ chats, sendMessage }}>{children}</ChatContext.Provider>;
}

export { ChatContext, ChatProvider };
