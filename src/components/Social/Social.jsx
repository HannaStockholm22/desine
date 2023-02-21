import React from 'react';

import ls from './Social.module.css';

const Social = ({text, path, name, right}) => {
    const pathPub = `images/icon/${name}`;
    const addGap = {
        paddingRight: right,   
    }

    return (
        <div className={ls.item} style={addGap}>
            <a className={ls.link} href={path} target="_blank" rel="noreferrer">
                <div className={ls.inner}>
                    <img className={ls.img} src={pathPub} alt="icon" />
                    <span>{text}</span>
                </div>
            </a>
        </div>
    )
}
export default Social;





