import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import BasicNavbar from '../../UI/Navbar/BasicNavbar';
import LoginForm from '../../Component/Login/LoginForm';
import RegisterForm from '../../Component/Login/RegisterForm';
import './Login.css';


const Login = () => {
    const [loginState, setLoginState] = useState(true)

    const switchLogin = () => {
        setLoginState(true)
    }
    const switchRegister = () => {
        setLoginState(false)
    }

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #424242; }'}</style>
            </Helmet>
            <div className='main-body'>
                <BasicNavbar />
                {loginState ?
                    <LoginForm onSwitch={switchRegister} /> :
                    <RegisterForm onSwitch={switchLogin} />}
            </div>
        </div>
    )
}

export default Login;