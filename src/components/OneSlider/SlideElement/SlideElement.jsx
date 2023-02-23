import React from 'react';
import ls from './SlideElement.module.css';

const SlideElement = ({name,title}) => {
    const pathPub = `images/slider/${name}`;
    return (
        <div className={ls.item}>
            <img className={ls.img} src={pathPub} alt="img" />
            <div className={ls.info}>
                <h3 className={ls.title}>
                    {title}
                </h3>
                <p className={ls.text}>
                    Deep v you probably haven't heard of them banhmi synth actually
                    affogato. Aesthetic lyft ethical drinking vinegar austint
                </p>
            </div>
        </div>


    )
}
export default SlideElement;