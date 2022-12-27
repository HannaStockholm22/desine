import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import s from './Gallery.module.css';

const Gallery = () => {
    return (
        <div className={s.inner}>
              <BreadCrumbs name={'Gallery'} path={'/gallery'}/>    
        </div>
    )
}
export default Gallery;