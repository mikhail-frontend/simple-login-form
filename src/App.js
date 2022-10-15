import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./context/auth-context";

function App() {
    const authCtx = useContext(AuthContext)
    return (
        <>
            <MainHeader/>
            <main>
                {!authCtx.isAuth && <Login onLogin={authCtx.onLogin}/>}
                {authCtx.isAuth && <Home onLogout={authCtx.onLogOut}/>}
            </main>
        </>
    );
}

export default App;
