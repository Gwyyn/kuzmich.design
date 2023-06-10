import React from 'react';
import cl from './Card.module.css';
import {motion} from "framer-motion";


const Card = ({number, title, children}) => {

    const textAnimation = {
        hidden: {
            x: 75,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, duration: 0.5},
        })
    }

    return (
        <div className={cl.cardWrapper}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 1, once: true}}
                className={cl.numberWrapper}
            >
                <motion.div
                    custom={1} variants={textAnimation}
                    className={cl.number}
                >
                    {number}
                </motion.div>
                <motion.div
                    custom={2} variants={textAnimation}
                    className={cl.point}
                ></motion.div>

            </motion.div>
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