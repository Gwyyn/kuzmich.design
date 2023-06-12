import React from 'react';
import cl from './crossButton.module.css'


const CrossButton = ({descrText}) => {
    return (
        descrText
            ?
            <svg className={cl.buttonOff} width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="black"/>
                <path d="M20.8728 11.6483L12.3197 20.0652" stroke="white" strokeLinecap="round"/>
                <path d="M12 12L20.8715 20.0806" stroke="white" strokeLinecap="round"/>
            </svg>
            :
            <svg className={cl.buttonOn} width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#F3F3F3"/>
                <path d="M16 11V23" stroke="black" strokeLinecap="1.25" strokeLinecap="round"/>
                <path d="M10 17H22" stroke="black" strokeLinecap="1.25" strokeLinecap="round"/>
            </svg>


    );
};

export default CrossButton;