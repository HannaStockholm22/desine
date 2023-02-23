import React from 'react';
import ls from './LogoLine.module.css';

const LogoLine = ({name}) => {
    const pathPub = `images/line/${name}`;
    return (
        <div >
            <img className={ls.logoimg} src={pathPub}  alt="logoImage" />
        </div>
    )
}
export default LogoLine;