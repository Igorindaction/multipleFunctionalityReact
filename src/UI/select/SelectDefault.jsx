import React from 'react';
import s from './SelectDefault.module.css'

const SelectDefault = ({options, defaultName, value, onChange}) => {

    return (

        <select className={s.SelectDefault} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultName}</option>
            {options.map( option => 
                <option value={option.value} key={option.value}>
                   {option.name}
                </option> 
            )}
        </select>
    );
};

export default SelectDefault;