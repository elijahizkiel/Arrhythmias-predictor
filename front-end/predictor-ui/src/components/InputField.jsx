function InputField({
    type, id, classes, label, children, required
}){
    return(
        <>
        <fieldset>
            <legend>{label}{required?<span style={{ 'color':'red' }}>*</span>:null}</legend>
            <input type={type} id={id} style={{ 'width':'100%' }} required={required} className={classes} />
            {children}
        </fieldset>
        </>
    )
}

export default InputField