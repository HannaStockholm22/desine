import React from 'react';
import OneButton from '../OneButton/OneButton';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import ls from './FirstGallery.module.css';

const FirstGallery = ({data, place, activeCategory, dispatch}) => {
  
   let ButtonLineElements = data.departmentsData.map(el => <OneButton name={el.name}  id={el.id} active={activeCategory} dispatch={dispatch}/>);
    return (
        <div >
            <div className='container' >
                <div className={ls.line} >
                 {ButtonLineElements}
                </div>
            </div>
          <PhotoGrid  place={place} left={true}/>
        </div>
    )
}
export default FirstGallery;

