import React from 'react';
import cl from './Services.module.css';
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