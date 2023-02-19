import React from 'react';
import ls from './WaysElem.module.css';

const WaysElem = ({name,id,title,text}) => {
    const pathpub = `images/way/${name}`;
    let odd;
    let marg = 0;

    if (id > 1) marg = 290;

    const myStyle = {
        marginLeft: `${marg}px`
    };

    if (id %2== 0) odd=true
    else  odd=false;


    return (
        <div className={odd ? ls.inner2 : ls.inner1} style={myStyle}>
            <div className={ls.line}>
                <img className={ls.img} src={pathpub} alt="icon" />
                <p className={ls.title}>{title}</p>
            </div>
            <p className={ls.text}>{text}</p>
        </div>
    )
}
export default WaysElem;