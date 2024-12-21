function TextArea({classes, defaultText, children}){
    return (
        <div className={classes}>
            {children}
            <textarea className={"text-area " + classes} defaultValue={defaultText} ></textarea>
        </div>
    );
}

export default TextArea;