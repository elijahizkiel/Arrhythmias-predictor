import { ChatContext } from "../ChatProvider";
import Label from "./Label";
import { useContext } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function MessagesArea() {
  function formatText(input) {
    // Replace double asterisks (**) with <strong> tags
    let strongFormatted = input.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );
    // Replace single asterisks (*) with <p> tags
    let pFormatted = strongFormatted.replace(/\*(.*?)\*/g, "<p>$1</p>");
    return pFormatted;
  }

  let { chats, loadingMessage } = useContext(ChatContext);
  
  return (
    <div className="message-area">
      {chats === null || chats === undefined ? (
        <>
          <Label
            key="bold-faced"
            classes={"chat-opening bold-faced"}
            text="Hello, how are you feeling today?"
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
            dangerouslySetHtml={message.parts ? formatText(message.parts) : ""}
          />
        ))
      )}
      {loadingMessage ? <BeatLoader /> : null}
    </div>
  );
}

export default MessagesArea;
