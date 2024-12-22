function TextArea({classes, defaultText, children}){
    return (
        <div className={'messaging-fieldset'}>
            {children}
            <textarea className={"text-area " + classes} placeholder={defaultText} ></textarea>
        </div>
    );
}

export default TextArea;