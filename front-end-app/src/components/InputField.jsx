function InputField({ type, id, classes, label, children, required, val, onInput, onChange }) {
  return (
    <>
      <fieldset className="input-set">
        <legend>
          {label}
          {required ? <span style={{ color: "red" }}>*</span> : null}
        </legend>
        <input
          onChange={onChange}
          type={type}
          id={id}
          style={{ width: "100%" }}
          required={required}
          className={"input " +classes}
          value={val}
          onInput={(e) => {onInput(e.target.value)}}
        />
        {children}
      </fieldset>
    </>
  );
}

export default InputField;
