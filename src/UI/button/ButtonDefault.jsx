import React from 'react';
import s from './button.module.css'
const buttonDefault = ({children, ...props}) => {
    return (
        <div>
            <button className={s.buttonDefault} {...props}>{children}</button>
        </div>
    );
};

export default buttonDefault;