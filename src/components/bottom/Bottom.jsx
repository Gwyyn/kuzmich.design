import React from 'react';
import cl from './Bottom.module.css'
import ContactButton from "../UI/buttons/contactButton/ContactButton";
import Spinner from "../UI/spinner/Spinner";
import BigContactButton from "../UI/buttons/bigContactButton/bigContactButton";

const Bottom = () => {
    return (
        <div className={cl.bottomWrapper}>
            <div className={cl.leftPart}>
                <div className={cl.spinnerWrapper}>
                    <div className={cl.spinner}>
                        <Spinner/>
                    </div>
                </div>

            </div>
            <div className={cl.rightPart}>
                <div className={cl.titleQuestion}>
                    have an idea?
                </div>
                <div className={cl.titleExclamation}>
                    LET'S DISCUSS!
                </div>
                <div className={cl.description}>
                    Every new project starts with a conversation so let’s have coffee and talk.
                </div>
                <div style={{paddingTop: 54}}>
                    <BigContactButton/>
                </div>
                <div className={cl.contactLinksWrapper}>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="https://www.linkedin.com/in/victoria-kuzmich-6a8505223/" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>LinkedIn</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="https://t.me/vikakuzmich" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Telegram</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="https://www.behance.net/victoriakuzmich" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Behance</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="https://dribbble.com/Victoria_Kuzmich0" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Dribble</div>
                        </a>
                    </div>
                </div>
                <div className={cl.rights}>
                    © 2023 kuzmich.design.  All right reserved.
                </div>
            </div>
        </div>
    );
};

export default Bottom;