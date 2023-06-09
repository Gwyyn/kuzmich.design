import React, {useEffect, useRef, useState} from 'react';
import cl from "./Accordion.module.css";
import CrossButton from "../UI/buttons/crossButton/crossButton";

const Accordion = ({title, children, ...props}) => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])

    return (
        <div>
            <hr className={cl.shortLine}/>
            <div className={cl.titleWithButton_container} onClick={() => setToggle(!toggle)}>
                <div className={cl.titleRightPart}>
                    {title}
                </div>
                <CrossButton descrText={toggle}/>
            </div>

            <div className={toggle ? cl.descrText_animated : cl.descrText}
                 style={{
                     height: toggle ? `${heightEl}` : "0px",
                     visibility: toggle ? "" : "hidden"
                 }}
                 ref={refHeight}
            >
                {children}
            </div>

        </div>
    );
};

export default Accordion;