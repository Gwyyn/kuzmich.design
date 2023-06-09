import React from 'react';
import cl from "../Services.module.css";
import Accordion from "../../accordion/Accordion";

const MobileApp = () => {
    return (
        <div className={cl.content}>
            <div className={cl.leftPart}>
                <div className={cl.leftPartTitle}>
                    <div className={cl.number}>2/3</div>
                    <div className={cl.titleInContent}>
                        mobile app
                    </div>
                </div>
            </div>
            <div className={cl.rightPart}>
                <Accordion title="Cross-Platform App">
                    Creation of design under two android and iOS platforms
                    <br/>
                    <br/>
                    From 40 days
                </Accordion>
                <Accordion title="native app">
                    Creation a design for each platform separately using the guideline
                    <br/>
                    <br/>
                    From 50 days
                </Accordion>
                <Accordion title="app redesign">
                    An app redesign is the process of changing and updating the content, structure, format, and
                    navigation of your mobile app to improve performance and convert more visitors.
                    <br/>
                    <br/>
                    From 30 days
                </Accordion>
            </div>
        </div>
    );
};

export default MobileApp;