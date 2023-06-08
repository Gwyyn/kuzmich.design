import React, {useEffect, useState} from 'react';
import cl from './Services.module.css';
import CrossButton from "../UI/buttons/crossButton/crossButton";

const Services = () => {

const [descrText, setDescrText] = useState(false);

useEffect(()=>{
    console.log(descrText)
},[descrText])

    return (
        <div className={cl.servicesWrapper}>
            <div className={cl.title}>
                services
            </div>
            <div className={cl.content}>
                <div className={cl.leftPart}>
                    <div className={cl.number}>1/3</div>
                    <div className={cl.titleInContent}>
                        Websites
                    </div>
                </div>
                <div className={cl.rightPart}>
                    <div>
                        <hr className={cl.shortLine}/>
                        <div className={cl.titleWithButton_container} onClick={()=>setDescrText(!descrText)}>
                            <div className={cl.titleRightPart}>
                                landing page
                            </div>
                            <CrossButton descrText={descrText}/>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Services;