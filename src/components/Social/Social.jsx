import React from 'react';
import { redirect } from 'react-router-dom';
import ls from './Social.module.css';

const Social = ({text, path, name, right}) => {
    const pathpub = `images/icon/${name}`;
    const addGap = {
        paddingRight: right,   
    }

    return (
        <div className={ls.item} style={addGap}>
            <a className={ls.link} href={path} target="_blank">
                <div className={ls.inner}>
                    <img className={ls.img} src={pathpub} alt="icon" />
                    <span>{text}</span>
                </div>
            </a>
        </div>
    )
}
export default Social;





