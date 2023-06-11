import React from 'react';
import cl from './WorkProcess.module.css'
import Card from "./card/Card";
import {motion} from "framer-motion";

const WorkProcess = () => {

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

    const firstLineAnimation = {
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
    const secondLineAnimation = {
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
        <div className={cl.WorkProcessWrapper}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.3, once: true}}
                className={cl.header}
            >
                <div className={cl.leftPart}>
                    <motion.div
                        custom={1} variants={textAnimation}
                        className={cl.title}
                    >
                        Work process
                    </motion.div>
                    <motion.div
                        custom={2} variants={textAnimation}
                        className={cl.steps}
                    >
                        steps
                    </motion.div>
                </div>
                <div className={cl.rightPart}>
                    <motion.div
                        custom={7} variants={textAnimation}
                        className={cl.description}
                    >
                        In my work, I use creative problem solving skills and follow the fundamental steps of productive
                        cooperation
                    </motion.div>
                </div>
            </motion.div>

            <div className={cl.cards}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                >
                    <div className={cl.firstLine}>
                        <motion.div
                            custom={2} variants={firstLineAnimation}
                        >
                            <Card title="Briefing" number="01">
                                We discuss your project's goals and objectives, ways to reach them. The result of this
                                process
                                is the establishment of deadlines and the cost of work.
                            </Card>
                        </motion.div>
                        <motion.div
                            custom={3} variants={firstLineAnimation}
                        >
                            <Card title="UX Research" number="02">
                                I research major competi-tors to gain insight into their products, sales.
                                Then I create User flow, which helps navigate and track movement within the app or
                                website
                                and
                                Wireframes, which show how the screens will look.
                            </Card>
                        </motion.div>
                        <motion.div
                            custom={5} variants={firstLineAnimation}
                        >
                            <Card title="Design concept" number="03">
                                I present to you a mood-board that combines various visual elements — like colors,
                                typography
                                and images. Presentation of one page design and making revisions.
                            </Card>
                        </motion.div>
                    </div>

                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                >
                    <div className={cl.secondLine}>
                        <motion.div
                            custom={2} variants={secondLineAnimation}
                        >
                            <Card title="design of all pages" number="04">
                                I create a design concept for all pages and blocks in Figma.
                            </Card>
                        </motion.div>
                        <motion.div
                            custom={3} variants={secondLineAnimation}
                        >
                            <Card title="Adaptive design" number="05">
                                I create adaptive design to popular resolutions. It ensures the best user experience
                                according
                                to whatever device the user is using to view the website.
                            </Card>
                        </motion.div>
                        <motion.div
                            custom={4} variants={secondLineAnimation}
                        >
                            <Card title="transfer of all materials" number="06">
                                At the last stage I make changes if necessary. Then transfer all the materials.
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default WorkProcess;