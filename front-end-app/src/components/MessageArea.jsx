import { ChatContext } from "../ChatProvider";
import Label from "./Label";
import { useContext } from "react";


function MessagesArea() {
  function formatText(input) {
    // Replace double asterisks (**) with <strong> tags
    let strongFormatted = input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace single asterisks (*) with <p> tags
    let pFormatted = strongFormatted.replace(/\*(.*?)\*/g, '<p>$1</p>');
    
    return pFormatted;
  }
  // const messageArea = (message) =>{
  //   const child = document.createElement('div');
  //   child.innerHTML = formatText(message);
  //   return child;
  // }

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
      ) : 
        (
        chats.map((message, index) => {
          // let element = 
          // console.log(element)

          return <Label
            key={message.role + String(index)}
            classes={"message " + message.role}
            children={<div>{message.parts?formatText(message.parts): ''}</div>}
          />
          }
        )
      )
      }
    </div>
  );
}

export default MessagesArea;
