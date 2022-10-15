import React, {useContext} from 'react';
import AuthContext from "../../context/auth-context";

import classes from './Navigation.module.css';

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isAuth && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isAuth && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isAuth && (
                    <li>
                        <button onClick={() => ctx.onLogOut()}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
