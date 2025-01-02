function Label({ text, classes, children, onClick, dangerouslySetHtml }) {
    return (
      <div className={"label " + classes} onClick={onClick}>
        {text}
        {dangerouslySetHtml ? (
          <div dangerouslySetInnerHTML={{ __html: dangerouslySetHtml }} />
        ) : (
          children
        )}
      </div>
    );
  }
  
  export default Label;
  