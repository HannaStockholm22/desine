import React from 'react';
import OnePhoto from '../OnePhoto/OnePhoto';
import ls from './PhotoGrid.module.css';

const PhotoGrid = (props) => {
 
    const i = props.data.homePage.activeCategory;
    const category = props.data.homePage.galleryData[i];
    const PhotoGridElements = category.map(el => <OnePhoto  id={el.id} name={el.name} depart={i} />);
    return (
        <div className='container-fluid'>
            <div className={ls.inner} >
            {PhotoGridElements}
            </div>
        </div>

    )
}
export default PhotoGrid;