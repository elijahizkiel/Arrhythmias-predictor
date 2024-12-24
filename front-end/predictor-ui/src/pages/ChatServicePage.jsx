import MessagesArea from "../components/MessageArea";
import MessagingField from "../components/MessagingField";
import UserAvatar from "../components/UserAvatar";
import Label from "../components/Label";

import { ChatProvider } from "../ChatProvider";

function ChatServicePage({ onHome, user }) {
  return (<>
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
    </>
  );
}

export default ChatServicePage;
