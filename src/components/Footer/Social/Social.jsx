import React from 'react';
import ls from './Social.module.css';


const Social = (props) => {
    const name = props.name;
    const newa = `./../../../images/${name}`;
    console.log('newa=' + newa);
    return (
        <div className={ls.item}>
            <a className={ls.link} href={props.path}>
                <div className={ls.inner}>
                    <img className={ls.img} src={require("./../../../images/facebook.svg").default} alt="icon" />
                    <span>{props.text}</span>     
                </div>
            </a>
        </div>
    )
}
export default Social;





