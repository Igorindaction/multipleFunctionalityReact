import React from 'react';
import s from './defaultInput.module.css'

const DefaultInput = (props) => {
    return (

         <input type='text' className={s.defaultInput} {...props}/>

    );
};

export default DefaultInput;