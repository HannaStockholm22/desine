import React from 'react';
import ls from './Social.module.css';

const Social = (props) => {
    const pathpub = `images/icon/${props.name}`;
    return (
        <div className={ls.item}>
            <a className={ls.link} href={props.path} target="_blank">
                <div className={ls.inner}>
                    <img className={ls.img} src={pathpub} alt="icon" />
                    <span>{props.text}</span>
                </div>
            </a>
        </div>
    )
}
export default Social;





