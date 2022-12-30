import React from 'react';
import OnePhoto from '../OnePhoto/OnePhoto';
import ls from './PhotoGrid.module.css';

const PhotoGrid = (props) => {

    const PhotoGridElements = props.place.map(el => <OnePhoto id={el.id} name={el.name} left={props.left}/>);
    return (
        <div className='container-fluid'>
            <div className={ls.inner} >
                {PhotoGridElements}
            </div>
        </div>

    )
}
export default PhotoGrid;