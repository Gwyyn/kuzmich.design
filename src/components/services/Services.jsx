import React, {useEffect, useState} from 'react';
import cl from './Services.module.css';
import CrossButton from "../UI/buttons/crossButton/crossButton";
import Accordion from "../accordion/Accordion";
import Websites from "./websites/Websites";
import MobileApp from "./mobileApp/MobileApp";
import Branding from "./branding/Branding";

const Services = () => {

    return (
        <div className={cl.servicesWrapper}>
            <div className={cl.title}>
                services
            </div>
            <Websites/>
            <hr className={cl.shortLine}/>
            <MobileApp/>
            <hr className={cl.shortLine}/>
            <Branding/>
            <hr className={cl.shortLine}/>
        </div>
    );
};

export default Services;