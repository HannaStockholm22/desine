import React from 'react';
import OneButton from '../../OneButton/OneButton';
import PhotoGrid from '../../PhotoGrid/PhotoGrid';
import ls from './FirstGallery.module.css';

const FirstGallery = (props) => {
   const activeCategory =props.data.homePage.activeCategory;
   let ButtonLineElements = props.data.departmentsData.map(el => <OneButton name={el.name}  id={el.id} active={activeCategory} dispatch={props.dispatch}/>);
    return (
        <div >
            <div className='container' >
                <div className={ls.line} >
                 {ButtonLineElements}
                </div>
            </div>
            <PhotoGrid data={props.data} />
        </div>
    )
}
export default FirstGallery;