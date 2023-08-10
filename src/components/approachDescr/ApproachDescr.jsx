import React from 'react';
import cl from "./ApproachDescr.module.css";
import {motion} from "framer-motion";

const ApproachDescr = () => {

    const textAnimation = {
        hidden: {
            y: 75,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, duration: 0.9,},
        })
    }


    return (
        <div
            className={cl.wrapperBlock}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.5, once: true}}
                className={cl.longTitleWrapper}
                custom={1} variants={textAnimation}
            >
                <div
                    className={cl.longTitle}
                >
                    I believe in working collaboratively and working closely with my clients to ensure that each project
                    meets their unique needs and surpasses their expectations
                </div>

            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.4, once: true}}
                className={cl.descrWrapper}
            >
                <motion.div
                    custom={2} variants={textAnimation}
                    className={cl.shortTitle}
                >
                    the challenge
                </motion.div>
                <motion.div
                    custom={4} variants={textAnimation}
                    className={cl.descr}
                >
                    When designing websites, more unique challenges may arise and a series of design principles may
                    need to be learned. Although web design is a progressing field, web designers should not reinvent
                    the wheel but adopt modern solutions to each problem and challenge that might emerge.
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.4, once: true}}
                className={cl.descrWrapper}
            >
                <motion.div
                    custom={2} variants={textAnimation}
                    className={cl.shortTitle}
                >
                    the approach
                </motion.div>
                <motion.div
                    custom={4} variants={textAnimation}
                    className={cl.descr}
                >
                    The best-designed website is the one that satisfies the user's expectations, is user-friendly,
                    solves problems, and meets the objective of the brand and its owner, whether it's an individual,
                    organization, or business.
                    <br/>
                    <br/>
                    That’s why I approach work logically, consistently and rationally.
                </motion.div>
            </motion.div>

        </div>
    );
};

export default ApproachDescr;