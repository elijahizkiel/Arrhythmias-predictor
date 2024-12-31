function Label({text, classes, children, onClick}){
    return <div className={"label "+classes} onClick={onClick}>
        {text}{children}
    </div>
}

export default Label;