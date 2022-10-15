import classes from "../../Login/Login.module.css";

const Input = ({valid,  changeHandler, label, value, id, ...htmlProps}) => {
    return (
        <div
            className={`${classes.control} ${ valid === false ? classes.invalid : ''}`}>
            <label htmlFor={id || ''}>{label}</label>
            <input
                type={htmlProps.type || 'text'}
                id={id || ''}
                value={value}
                onChange={(event) => changeHandler(event.target.value, id, 'change')}
                onBlur={(event) => changeHandler(event.target.value, id, 'blur')}
            />
        </div>

    )
}
export default Input;