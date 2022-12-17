import React from 'react';
import ls from './SlideElement.module.css';

const SlideElement = (props) => {
    const pathpub = `images/slider/${props.name}`;
    return (
        <div className={ls.item}>
            <img className={ls.img}src={pathpub} alt="img" />
            <div className={ls.info}>
                <h3 className={ls.title}>
                    {props.title}
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