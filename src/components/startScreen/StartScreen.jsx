import React from 'react';
import ThemeText from "./ThemeText";
import cl from './Properties.module.css'
import BlackArrowSvg from "../UI/utilsItems/BlackArrowSvg";
import {motion} from "framer-motion";

const StartScreen = () => {


    const textAnimation = {
        hidden: {
            y: 75,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, duration: 0.5},
        })
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
        >
            <ThemeText/>

            <div className={cl.scrollToExplore}>
                <motion.div
                    custom={3} variants={textAnimation}
                    className={cl.scrollToExploreText}
                >
                    SCROLL TO EXPLORE
                </motion.div>
                <motion.div
                    custom={3} variants={textAnimation}
                >
                    <BlackArrowSvg/>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default StartScreen;