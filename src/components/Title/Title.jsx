import React from 'react';
import ls from './Title.module.css';

const Title = ({text}) => { // here is how you can destructure props, so code looks more readable
    return (
        <h2 className={ls.title}>
            {text}
        </h2>
    )
}
export default Title;