import {forwardRef, useImperativeHandle, useRef} from "react";
import classes from "../../Login/Login.module.css";

const Input = forwardRef((
    {valid, changeHandler, label, value, id, ...htmlProps}, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current?.focus();
    }

    useImperativeHandle(ref, () => ({
        focus: activate
    }))

    return (
        <div
            className={`${classes.control} ${valid === false ? classes.invalid : ''}`}>
            <label htmlFor={id || ''}>{label}</label>
            <input
                type={htmlProps.type || 'text'}
                id={id || ''}
                value={value}
                ref={inputRef}
                onChange={(event) => changeHandler(event.target.value, id, 'change')}
                onBlur={(event) => changeHandler(event.target.value, id, 'blur')}
            />
        </div>

    )
})
export default Input;