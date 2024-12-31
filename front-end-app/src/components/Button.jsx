function Button({children, classes, style, text, sendRequest}){
    return <div className={classes} style={style} onClick={sendRequest}>
        {text}{children}
    </div>
    
}

export default Button;