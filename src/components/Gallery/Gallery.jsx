import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import FirstGallery from '../FirstGallery/FirstGallery';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import ls from './Gallery.module.css';

const Gallery = ({data,dispatch}) => {
    const i = data.homePage.activeCategory;
   const  place1 = data.galleryPage.galleryData1[i];
        
    return (
        <div className={ls.inner}>
            <BreadCrumbs name={'Gallery'} path={'/gallery'} />
            <div className={ls.content}>
            <FirstGallery data={data} dispatch={dispatch} place={place1} activeCategory={i} />   
            <PhotoGrid place={data.galleryPage.galleryData2[i]} left={false}/>
            </div>
           
        </div>
    )
}
export default Gallery;