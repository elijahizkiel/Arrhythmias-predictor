import MessagesArea from "../components/MessageArea";
import MessagingField from "../components/MessagingField";
import UserAvatar from "../components/UserAvatar";
import Label from "../components/Label";

function ChatServicePage({ chats, onHome, user }) {
  return (
    <>
      <header className="chat-header">
        <Label classes="logo" text="we care" onClick={onHome} />
        <UserAvatar
          imgSource={`https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`}
        />
      </header>
      <main>
        <MessagesArea
          messages={chats !== null && chats !== undefined ? chats : null}
        />
        <MessagingField classes={"message-input"} />
      </main>
    </>
  );
}

export default ChatServicePage;
