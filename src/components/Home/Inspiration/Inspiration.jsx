import React from 'react';
import Card from './Card/Card.jsx';

import ls from './Inspiration.module.css';

const Inspiration = (props) => {
    let inspElements = props.data.inspirationData.map(el => <Card info={el} />)
    return (
        <div className='container'>
            <h3 className={ls.title}>More inspiration ideas in our blog</h3>
            <div className={ls.inner}>
                {inspElements}
            </div>
        </div>
    )
}
export default Inspiration;