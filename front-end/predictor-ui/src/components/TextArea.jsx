function TextArea({classes, defaultText, children, val, onInput}){
    return (
        <div className={'messaging-fieldset'}>
            {children}
            <textarea className={"text-area " + classes} onInput={onInput} value={val} placeholder={defaultText} ></textarea>
        </div>
    );
}

export default TextArea;