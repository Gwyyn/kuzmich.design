import React from 'react';
import classes from './bigContactButton.module.css'
import WhiteArrowSvg from "../../utilsItems/WhiteArrowSvg";

const BigContactButton = ({...props}) => {
    return (
        <div {...props} className={classes.wrap}>
            <div className={classes.contactBtn}>
                <a className={classes.content} href="mailto:kuzmich.design@gmail.com">
                    <div className={classes.legend}>Contact</div>
                    <div className={classes.icon}>
                        <WhiteArrowSvg/>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default BigContactButton;