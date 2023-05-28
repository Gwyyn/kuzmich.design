import React from 'react';
import classes from './ContactButton.module.css'
import Arrow from "./Arrow";

const ContactButton = ({...props}) => {
    return (
        <div {...props} className={classes.wrap}>
            <div className={classes.contactBtn}>
                <a className={classes.content} href="mailto:kuzmich.design@gmail.com">
                    <div className={classes.legend}>Contact</div>
                    <div className={classes.icon}>
                        <Arrow/>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default ContactButton;