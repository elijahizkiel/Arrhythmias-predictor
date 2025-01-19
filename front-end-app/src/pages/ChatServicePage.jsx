import MessagesArea from "../components/MessageArea";
import MessagingField from "../components/MessagingField";

import { LoginContext } from "../LoginProvider";
import { ChatProvider } from "../ChatProvider";
import { useContext } from "react";

function ChatServicePage() {
  let {user} = useContext(LoginContext);
  
  return (
    <ChatProvider initialChat={user ? user.chats : null}>
      <main>
        <MessagesArea />
        <MessagingField classes={"message-input"} />
      </main>
    </ChatProvider>
  );
}

export default ChatServicePage;
