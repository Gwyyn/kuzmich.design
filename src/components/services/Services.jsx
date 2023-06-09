import React, {useEffect, useState} from 'react';
import cl from './Services.module.css';
import CrossButton from "../UI/buttons/crossButton/crossButton";
import Accordion from "../accordion/Accordion";
import Websites from "./websites/Websites";
import MobileApp from "./mobileApp/MobileApp";

const Services = () => {

    return (
        <div className={cl.servicesWrapper}>
            <div className={cl.title}>
                services
            </div>
            <Websites/>
            <MobileApp/>
        </div>
    );
};

export default Services;