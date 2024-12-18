import ListItem from 'ListItem.jsx';
function UnorderedList({classes, children, listItems}){
    return (
        <ul>
            { listItems.map(item =>
                <ListItem classes={classes} text={item}/>
                )
            } 
            {children}
        </ul>
    ) 
}

export default UnorderedList;