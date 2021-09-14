import React from 'react';
import s from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [s.modalWrapper]
    
    if(visible){
        rootClasses.push(s.modalActive)
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={s.modalContent} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;