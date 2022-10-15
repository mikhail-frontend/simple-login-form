import React, {useEffect, useReducer,  useContext, useRef} from 'react';
import classes from './Login.module.css';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from "../UI/Input/Input";

import {formReducer, setFormState} from "./LoginHelpers";
import AuthContext from "../../context/auth-context";

const Login = () => {
    const {onLogin} = useContext(AuthContext)
    const [formState, dispatchForm] = useReducer(formReducer, setFormState(), setFormState);
    // const [, setFormIsValid] = useState(false);
    const { email: { valid: emailValid } } = formState;
    const { password: { valid: passwordValid } } = formState;
    const { wholeForm: {valid: formValid }} = formState;
    const emailRef = useRef();
    const passwordRef = useRef();

    const beforeDestroy = () => {
        console.log('component is destroyed');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formValid) {
            onLogin(formState.email.value, formState.password.value);
        } else if(!emailValid) {
            emailRef.current?.focus();
        } else  {
            passwordRef.current?.focus();
        }


    };

    useEffect(() => {
        return beforeDestroy;
    }, []);

    useEffect(() => {
        console.log('mounted')
    }, []);

    // debounced watcher e-mail and password for validity based on useState
    useEffect(() => {
        const identifier = setTimeout(() => {
            // setFormIsValid(emailValid && passwordValid);
            console.log('check validity')
        }, 500)
        return () => {
            console.log('into debounce')
            clearTimeout(identifier)
        }
    }, [emailValid, passwordValid]);

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input label="E-Mail"
                       type="email"
                       id="email"
                       ref={emailRef}
                       valid={emailValid}
                       changeHandler={(value, name, type) => dispatchForm({value, name, type})}/>
                <Input label="Password"
                       type="password"
                       id="password"
                       ref={passwordRef}
                       valid={passwordValid}
                       changeHandler={(value, name, type) => dispatchForm({value, name, type})}/>

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;


