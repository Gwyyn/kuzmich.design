import React from 'react';
import cl from "../Services.module.css";
import Accordion from "../../accordion/Accordion";

const MobileApp = () => {
    return (
        <div className={cl.content}>
            <div className={cl.leftPart}>
                <div className={cl.number}>1/3</div>
                <div className={cl.titleInContent}>
                    Websites
                </div>
            </div>
            <div className={cl.rightPart}>
                <Accordion title="Landing page">
                    Landing pages are standalone web pages built to accomplish a
                    single goal. This goal might be selling a product or service, getting the visitor’s
                    email address, obtaining sign-ups for a newsletter or getting registrants for an online
                    event.
                    <br/>
                    <br/>
                    From 10 days
                </Accordion>
                <Accordion title="corporate website">
                    The purpose of a corporate website is to present a company and show who the people behind it
                    are. It either directly or indirectly contributes to the business’s legitimacy. The primary
                    goal is to build reputation, support, and promote the entire company.
                    <br/>
                    <br/>
                    From 30 days
                </Accordion>
                <Accordion title="online-store">
                    An online store is a website where buyers can see a catalog of products or services and also
                    learn about the brand.
                    <br/>
                    <br/>
                    From 30 days
                </Accordion>
                <Accordion title="website redesign">
                    A website redesign is the process of changing and updating the content, structure, format,
                    and navigation of your website to improve performance and convert more visitors.
                    <br/>
                    <br/>
                    From 30 days
                </Accordion>

            </div>
        </div>
    );
};

export default MobileApp;