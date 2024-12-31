function ListItem({id, classes, children, text}){
    return(<li id={id} className={classes}>{text}{children}</li>)
}

export default ListItem;