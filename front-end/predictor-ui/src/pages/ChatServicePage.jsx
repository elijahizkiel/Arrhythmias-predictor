import MessagesArea from "../components/MessageArea";
import MessagingField from "../components/MessagingField";
import UserAvatar from "../components/UserAvatar";
import Label from "../components/Label";

function ChatServicePage({ chats, user }) {
  return (
    <>
      <header className="chat-header">
        <Label classes="logo" text="we care" />
        <UserAvatar imgSource={''} />
      </header>
      <main>
        <MessagesArea messages={(chats !== null && chats !== undefined )?chats: null} />
        <MessagingField classes={"message-input"} />
      </main>

    </>
  );
}

export default ChatServicePage;
