import { createContext, useState } from "react";
import axios from "axios";

const ChatContext = createContext();
function ChatProvider({ children, initialChat }) {
  let [chats, setChat] = useState(initialChat);
  async function sendMessage(message) {
    let msg = { role: "user", parts: message };
    let response = await fetch("/chat-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(response => response.json());

    console.log(response);
    /*axios.post({
      url: "/chat-service",
      data: msg,
      headers: {
        "Content-Type": "application/json",
      },
    });*/
    setChat((chat) => {
      return chat ? [...chat, msg, response] : [msg, response];
    });
  }
  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
