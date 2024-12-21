import Label from "./Label";

function MessagesArea({ messages }) {
  return (
    <div className="message-area">
      {!messages ? (
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
        messages.map((message, index) => (
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
