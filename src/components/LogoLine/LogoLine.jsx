import React from 'react';
import ls from './LogoLine.module.css';

const LogoLine = (props) => {
    const pathpub = `images/line/${props.name}`;
    return (
        <div >
            <img className={ls.img} src={pathpub}  alt="photo" />
        </div>
    )
}
export default LogoLine;