import React from 'react';
import cl from './Header.module.css'
import ContactButton from "../button/ContactButton";

const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl.wrap}>
                <div className={cl.headerUp}>
                    <div className={cl.title}>
                        KUZMICH.DESIGN
                    </div>
                    <ContactButton/>
                </div>
                <div className={cl.headerDown}>
                    <hr className={cl.hr}/>
                </div>

            </div>

        </div>


    );
};

export default Header;