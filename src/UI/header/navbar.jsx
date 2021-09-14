import { AuthContext } from 'Components/context/authContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonDefault from 'UI/button/ButtonDefault';
import s from './navbar.module.css'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={s.navBar}>
            <ButtonDefault onClick={(logout)}>Выйти</ButtonDefault>
            <div className={s.navBarLinks}>
                <Link to='/about'>О проекте</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;