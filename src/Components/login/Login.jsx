import { AuthContext } from 'Components/context/authContext';
import React, { useContext } from 'react';
import ButtonDefault from 'UI/button/ButtonDefault';
import DefaultInput from '../../UI/defaultInput/DefaultInput';

const Login = () => {
    // @ts-ignore
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const autohrization = event => {
        setIsAuth(true)
        event.preventDefault()
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h2>Войдите в личный кабинет</h2>
            <DefaultInput placeholder='Логин' />
            <DefaultInput placeholder='Пароль' />
            <ButtonDefault onClick={(autohrization)}>Войти</ButtonDefault>
        </div>
    );
};

export default Login;