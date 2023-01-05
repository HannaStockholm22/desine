import React from 'react';
import ls from './Title.module.css';

const Title = (props) => {
    return (
        <h2 className={ls.title}>
            {props.text}
        </h2>
    )
}
export default Title;