import TextArea from "./TextArea";
import Button from "./Button";
import { useContext, useState } from "react";
import { ChatContext } from "../ChatProvider";

function MessagingField({ classes }) {
  let { sendMessage } = useContext(ChatContext);
  let [message, setMessage] = useState("");
  return (
    <div className={"messaging-field " + classes}>
      <TextArea
        classes={"message-text"}
        val={message}
        onInput={(e) => {
          setMessage(e.target.value);
        }}
        defaultText={"Any Question?"}
      >
        {/* <span className="file-binder material-symbols-outlined">attach_file</span> */}
      </TextArea>
      <Button
        classes={"send-btn btn material-symbols-outlined"}
        text={"send"}
        sendRequest={() => {
          sendMessage(message);
          setMessage('')
        }}
      />
    </div>
  );
}

export default MessagingField;
