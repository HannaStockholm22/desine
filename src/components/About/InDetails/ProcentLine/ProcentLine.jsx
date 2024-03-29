import React from 'react';
import ls from './ProcentLine.module.css';

const ProcentLine = ({num,name}) => {
    const eachStile={
        width: `${num}` ,
        backgroundColor : "#363838"
    }
    
    return (
        <div className={ls.item}>
            <div className={ls.content}>
                <p>{name}</p>
                <p>{num}</p>      
            </div>
            <div className={ls.line} style={eachStile}></div>
        </div>
    )
}
export default ProcentLine;
