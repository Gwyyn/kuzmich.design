import React from 'react';
import cl from './Properties.module.css'

const ThemeText = () => {
    return (
            <div className={cl.themeTextWrapper}>
                <div className={cl.firstLine}>
                    UX/UI &
                </div>
                <div className={cl.secondLine}>
                    MOBILE APP
                </div>
                <div className={cl.thirdLine}>
                    <div className={cl.smallText}>
                        <div className={cl.smallTextInnerWrapper}>
                            just a design and strategy with an adaptive approach to problem solving
                        </div>
                    </div>

                    <div className={cl.bigText}>
                        DESIGNER
                    </div>
                </div>
            </div>
    );
};

export default ThemeText;