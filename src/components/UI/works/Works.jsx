import React from 'react';
import cl from './works.module.css'

import CirclesSvg from "../utilsItems/CirclesSvg";
import pic1 from "../utilsPicture/worksPictures/pic1.jpg"
import pic2 from "../utilsPicture/worksPictures/pic2.jpg"
import pic3 from "../utilsPicture/worksPictures/pic3.jpg"
import pic4 from "../utilsPicture/worksPictures/pic4.jpg"
import pic5 from "../utilsPicture/worksPictures/pic5.jpg"
import pic6 from "../utilsPicture/worksPictures/pic6.jpg"

const Works = () => {
    return (
        <div>
            <div className={cl.worksDescrWrapper}>
                <div className={cl.worksDescrHeader}>
                    <div>
                        <div className={cl.worksWord}>
                            WORKS
                        </div>
                        <div className={cl.worksDescr}>
                            I use my design skills to creature products that makes people’s lives easier
                        </div>
                    </div>
                    <div className={cl.circles}>
                        <CirclesSvg/>
                    </div>
                </div>

                <div className={cl.works_grid}>
                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic1} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>on main</span>
                            </div>
                        </a>
                    </div>

                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic2} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>avana</span>
                            </div>
                        </a>
                    </div>

                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic3} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>cloud</span>
                            </div>
                        </a>
                    </div>

                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic4} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>smart home</span>
                            </div>
                        </a>
                    </div>

                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic5} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>fresh food</span>
                            </div>
                        </a>
                    </div>

                    <div className={cl.works_item}>
                        <a href="" className={cl.works_item_inner}>
                            <img src={pic6} className={cl.works_item_img}/>
                            <div className={cl.works_item_title}>
                                <span>plants</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Works;