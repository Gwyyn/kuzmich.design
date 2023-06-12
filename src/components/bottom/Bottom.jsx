import React from 'react';
import cl from './Bottom.module.css'
import ContactButton from "../UI/buttons/contactButton/ContactButton";
import Spinner from "../UI/spinner/Spinner";

const Bottom = () => {
    return (
        <div className={cl.bottomWrapper}>
            <div className={cl.leftPart}>
                <div className={cl.spinnerWrapper}>
                    <Spinner/>
                </div>
            </div>
            <div className={cl.rightPart}>
                <div className={cl.titleQuestion}>
                    have an idea?
                </div>
                <div className={cl.titleExclamation}>
                    LET'S DO IT TOGETHER!
                </div>
                <div className={cl.description}>
                    Every new project starts with a conversation so let’s have coffee and talk.
                </div>
                <div style={{paddingTop: 54}}>
                    <ContactButton/>
                </div>
                <div className={cl.contactLinksWrapper}>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>LinkedIn</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Telegram</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Behance</div>
                        </a>
                    </div>
                    <div className={cl.linkWithPoint}>
                        <div className={cl.yellowPoint}></div>
                        <a href="" style={{textDecoration: "none"}}>
                            <div className={cl.contactLinks}>Dribble</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;