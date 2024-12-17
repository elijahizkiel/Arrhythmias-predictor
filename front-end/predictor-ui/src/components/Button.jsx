function Button({classes, style, text, sendRequest}){
    return <div className={classes} style={style} onClick={sendRequest}>
        {text}
    </div>
    
}

export default Button;