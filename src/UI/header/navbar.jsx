import { AuthContext } from 'Components/context/authContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonDefault from 'UI/button/ButtonDefault';
import s from './navbar.module.css'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {modal, setModal} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={s.navBar}>
            {isAuth && <div>
                <ButtonDefault onClick={(logout)}>Выйти</ButtonDefault>
                <Link to='/posts'> <ButtonDefault onClick={() => setModal(true)} style={{'marginLeft': '30px'}}>Создать посты</ButtonDefault></Link></div>
}
            

            <div className={s.navBarLinks}>
                <Link to='/about'>О проекте</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;