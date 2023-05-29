import React from 'react';
import ThemeText from "./ThemeText";
import cl from './Properties.module.css'
import BlackArrow from "../utilsItems/BlackArrow";


const StartScreen = () => {
    return (
        <div>
            <ThemeText/>

            <div className={cl.scrollToExplore}>
                <div className={cl.scrollToExploreText}>
                    SCROLL TO EXPLORE
                </div>
                <div>
                    <BlackArrow/>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;