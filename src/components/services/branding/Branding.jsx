import React from 'react';
import cl from "../Services.module.css";
import Accordion from "../../accordion/Accordion";

const Branding = () => {
    return (
        <div className={cl.content}>
            <div className={cl.leftPart}>
                <div className={cl.leftPartTitle}>
                    <div className={cl.number}>3/3</div>
                    <div className={cl.titleInContent}>
                        branding
                    </div>
                </div>
            </div>
            <div className={cl.rightPart}>
                <Accordion title="logotype">
                    Creating the brand identity of a company, which included logo, corporate design, slogan, mission,
                    font, color scheme, photos or illustrations.
                    <br/>
                    <br/>
                    From 30 days
                </Accordion>
            </div>
        </div>
    );
};

export default Branding;