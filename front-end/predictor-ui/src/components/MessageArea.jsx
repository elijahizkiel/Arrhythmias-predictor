import { ChatContext } from "../ChatProvider";
import Label from "./Label";
import { useContext } from "react";


function MessagesArea() {
  let {chats} = useContext(ChatContext);
  return (
    <div className="message-area">
      {chats === null || chats === undefined ? (
        <>
          <Label
            key="bold-faced"
            classes={"chat-opening bold-faced"}
            text="Hello, how are feeling today?"
          />
          <Label
            key={"small-font"}
            classes={"chat-opening small-font"}
            text="How can I help you today?"
          />
        </>
      ) : (
        chats.map((message, index) => (
          <Label
            key={message.role + String(index)}
            classes={"message " + message.role}
            text={message.part}
          />
        ))
      )}
    </div>
  );
}

export default MessagesArea;
