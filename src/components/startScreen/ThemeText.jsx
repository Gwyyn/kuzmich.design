import React, {useEffect, useRef, useState} from 'react';
import cl from './Properties.module.css'
import {motion} from "framer-motion";

const ThemeText = () => {

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
            className={cl.themeTextWrapper}
        >
            <motion.div
                custom={1} variants={textAnimation}
                className={cl.firstLine}
            >
                UX/UI &
            </motion.div>
            <motion.div
                custom={2} variants={textAnimation}
                className={cl.secondLine}
            >
                MOBILE APP
            </motion.div>
            <div className={cl.thirdLine}>
                <motion.div
                    custom={3} variants={textAnimation}
                    className={cl.smallText
                    }>
                    <div className={cl.smallTextInnerWrapper}>
                        just a design and strategy with an adaptive approach to problem solving.
                    </div>
                </motion.div>

                <motion.div
                    custom={4} variants={textAnimation}
                    className={cl.bigText}
                >
                    DESIGNER
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ThemeText;