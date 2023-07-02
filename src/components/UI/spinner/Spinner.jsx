import React, {useEffect, useState} from 'react';
import spinner from './spinner.svg'
import "./spinner.css"

const Spinner = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollStopped, setScrollStopped] = useState(false);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [prevScrollDirection, setPrevScrollDirection] = useState(null);

    useEffect(() => {
        let isScrolling = false;
        let scrollTimeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            if (!isScrolling) {
                isScrolling = true;
                setScrollDirection(null);
                setScrollStopped(false);
            }

            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                setScrollStopped(true);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(scrollTimeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction =
                scrollY > (window.lastScrollY || 0) ? 'down' : scrollY < (window.lastScrollY || 0) ? 'up' : null;
            setScrollDirection(direction);
            window.lastScrollY = scrollY;
        };

        window.addEventListener('scroll', handleScrollDirection);

        return () => {
            window.removeEventListener('scroll', handleScrollDirection);
        };
    }, []);

    const animationClass = scrollDirection === 'down' ? 'right' : scrollDirection === 'up' ? 'left' : '';

    const getTransformStyle = () => {
        if (scrollStopped) {
            const baseRotation = Math.floor(rotationAngle / 360) * 360;
            let adjustedRotation = rotationAngle - baseRotation;

            if (prevScrollDirection === "up" && scrollDirection === "down") {
                adjustedRotation = 360;
            } else if (prevScrollDirection === "down" && scrollDirection === "up") {
                adjustedRotation = 0;
            }

            return `rotate(${adjustedRotation}deg)`;
        }
        return `rotate(${rotationAngle}deg)`;
    };

    const handleAnimationEnd = () => {
        if (scrollStopped) {
            setRotationAngle(rotationAngle + 360);
            setPrevScrollDirection(scrollDirection);
        }
    };

    return (
        <img
            src={spinner}
            className={`spinner ${animationClass}`}
            style={{
                animationPlayState: scrollStopped ? 'paused' : 'running',
                transform: getTransformStyle(),
                transition: 'transform 0.5s ease'
            }}
            onAnimationEnd={scrollStopped ? handleAnimationEnd : undefined}
        />
    );
};
export default Spinner;