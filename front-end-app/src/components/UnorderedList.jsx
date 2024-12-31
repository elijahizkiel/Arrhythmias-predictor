import ListItem from "./ListItem.jsx";

function UnorderedList({ classes, children, listItems }) {
  return (
    <ul className={"unordered-list " + classes} >
      {listItems.map((item, index) => (
        <ListItem
          id={index}
          key={index + 1}
          classes={"list-item " + classes}
          text={item}
        />
      ))}
      {children}
    </ul>
  );
}

export default UnorderedList;
