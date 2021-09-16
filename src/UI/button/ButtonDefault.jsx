import React from 'react';
import s from './button.module.css'
const buttonDefault = ({children, ...props}) => {
    return (
            <button className={s.buttonDefault} {...props}>{children}</button>
    );
};

export default buttonDefault;