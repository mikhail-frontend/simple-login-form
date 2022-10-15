import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({
    isAuth: false,
    onLogOut: () => {
    },
    onLogin: (email, password) => ({email, password})
});

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (!!Number(storeIsLoggedIn)) {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        return {email, password}

    };


    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    };
    return (
        <AuthContext.Provider value={{isAuth: isLoggedIn, onLogOut: logoutHandler, onLogin: loginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;