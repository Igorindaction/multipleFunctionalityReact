import { AuthContext } from 'Components/context/authContext';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ButtonDefault from 'UI/button/ButtonDefault';
import s from './navbar.module.css'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {modal, setModal} = useContext(AuthContext)
    const [path, setPath] = useState('')

    useEffect(() => {
        setPath(window.location.pathname)
    },[path])
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        if(window.location.pathname === '/about'){
            setPath('/about')
        }

        
    }

    const changePath = (pathName) => {
        if(!isAuth){
            setPath(pathName)
        }
    }
    return (
        <div className={s.navBar}>
            {isAuth && 
                <div className={s.buttonsWrapper}>
                    <div>
                        <ButtonDefault onClick={(logout)}>Выйти</ButtonDefault>
                        <Link to='/posts'> <ButtonDefault onClick={() => setModal(true)} style={{'marginLeft': '30px'}}>Создать посты</ButtonDefault></Link>
                    </div>
                    <div className={s.navBarLinks}>
                        <Link to='/about' onClick={() => changePath('/about')}>О проекте</Link>
                        <Link to='/posts'>Посты</Link>
                    </div>
                </div>
            }
            { (!isAuth && path === '/about') &&
            <div className={s.aboutWrapper}>
                <Link to='/login'><ButtonDefault onClick={() => changePath('/login')}>Войти</ButtonDefault></Link>
            </div>
            }
            {(!isAuth && path === '/login') &&
            <div className={s.navBarLinks}>
                <Link to='/about' onClick={() => changePath('/about')}>О проекте</Link>
            </div>
            }

        </div>
    );
};

export default Navbar;