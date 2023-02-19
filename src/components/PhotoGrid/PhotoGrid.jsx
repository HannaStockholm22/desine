import React from 'react';
import OnePhoto from '../OnePhoto/OnePhoto';
import ls from './PhotoGrid.module.css';

const PhotoGrid = ({place, left}) => {

    const PhotoGridElements = place.map(el => <OnePhoto id={el.id} name={el.name} left={left}/>);
    return (
        <div className='container-fluid'>
            <div className={ls.inner} >
                {PhotoGridElements}
            </div>
        </div>

    )
}
export default PhotoGrid;