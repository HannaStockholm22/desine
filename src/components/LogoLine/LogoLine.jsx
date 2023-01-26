import React from 'react';
import ls from './LogoLine.module.css';

const LogoLine = ({name}) => {
    const pathpub = `images/line/${name}`;
    return (
        <div >
            <img className={ls.img} src={pathpub}  alt="logoImage" />  
        </div>
    )
}
export default LogoLine;