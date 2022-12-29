import React from 'react';
import ls from './ProcentLine.module.css';

const ProcentLine = (props) => {
    const eachStile={
        width: `${props.num}` ,
        backgroundColor : "#363838"
    }
    
    return (
        <div className={ls.item}>
            <div className={ls.content}>
                <p>{props.name}</p>
                <p>{props.num}</p>      
            </div>
            <div className={ls.line} style={eachStile}></div>
        </div>
    )
}
export default ProcentLine;
