function InputField({ type, id, classes, label, children, required, val, onInput }) {
  return (
    <>
      <fieldset className="input-set">
        <legend>
          {label}
          {required ? <span style={{ color: "red" }}>*</span> : null}
        </legend>
        <input
          type={type}
          id={id}
          style={{ width: "100%" }}
          required={required}
          className={classes}
          value={val}
          onInput={(e) => {onInput(e.target.value)}}
        />
        {children}
      </fieldset>
    </>
  );
}

export default InputField;
