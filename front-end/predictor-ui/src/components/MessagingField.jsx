import TextArea from "./TextArea";
import Button from "./Button";

function MessagingField({classes}){
    return(
        <div className={'messaging-field ' + classes}>
            <TextArea classes={'message-text'} defaultText={'Any Question?'}>
                {/* <span className="file-binder material-symbols-outlined">attach_file</span> */}
            </TextArea>
            <Button classes={'send-btn btn material-symbols-outlined'} text={'send'} />
        </div>
    )
}

export default MessagingField;