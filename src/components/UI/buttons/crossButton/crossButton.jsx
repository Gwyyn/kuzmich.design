import React from 'react';
import cl from './crossButton.module.css'


const CrossButton = ({descrText}) => {
    return (
        descrText
            ?
            <svg className={cl.buttonOn} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="black"/>
                <path d="M22.2454 11.6791L10.7547 21.3209" stroke="white" strokeLinecap="round"/>
                <path d="M10.7546 11.6791L22.2453 21.3209" stroke="white" strokeLinecap="round"/>
            </svg>
            :
            <svg className={cl.buttonOff} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#F3F3F3"/>
                <path d="M16.5 9V24" stroke="black" strokeLinecap="round"/>
                <path d="M9 16.5H24" stroke="black" strokeLinecap="round"/>
            </svg>


    );
};

export default CrossButton;