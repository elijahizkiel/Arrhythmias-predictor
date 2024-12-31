import MessagesArea from "../components/MessageArea";
import MessagingField from "../components/MessagingField";
import UserAvatar from "../components/UserAvatar";
import Label from "../components/Label";

import { LoginContext } from "../LoginProvider";
import { ChatProvider } from "../ChatProvider";
import { useContext } from "react";

function ChatServicePage({ onHome }) {
  let {user} = useContext(LoginContext);
  console.log(user);
  
  return (
    <ChatProvider initialChat={user ? user.chats : null}>
      <header className="chat-header">
        <Label classes="logo" text="we care" onClick={onHome} />
        <UserAvatar
          imgSource={
            user
              ? `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`
              : `https://avatar.iran.liara.run/username?username=user`
          }
        />
      </header>
      <main>
        <MessagesArea />
        <MessagingField classes={"message-input"} />
      </main>
    </ChatProvider>
  );
}

export default ChatServicePage;
