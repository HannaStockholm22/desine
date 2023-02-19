import React from 'react';
import ls from './Title.module.css';

const Title = ({text}) => {
    return (
        <h2 className={ls.title}>
            {text}
        </h2>
    )
}
export default Title;