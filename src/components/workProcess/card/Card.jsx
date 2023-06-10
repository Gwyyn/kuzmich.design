import React from 'react';
import cl from './Card.module.css'

const Card = ({number, title, children}) => {
    return (
        <div className={cl.cardWrapper}>
            <div className={cl.numberWrapper}>
                <div className={cl.number}>
                    {number}
                </div>
                <div className={cl.point}></div>

            </div>
            <div className={cl.title}>
                {title}
            </div>
            <div className={cl.description}>
                {children}
            </div>
        </div>
    );
};

export default Card;