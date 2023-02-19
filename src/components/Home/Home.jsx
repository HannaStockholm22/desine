import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import Collection from './Collection/Collection';
import FirstGallery from '../FirstGallery/FirstGallery';
import ls from './Home.module.css';
import Inspiration from './Inspiration/Inspiration';
import Slogan from './Slogan/Slogan';
import Way from './Way/Way';

const Home = ({data,dispatch}) => {
    const i = data.homePage.activeCategory;
    const  place = data.homePage.galleryData[i];
    return (
        <div className={ls.inner}>
            <OneSlider data={data.homePage} />
            <Collection data={data.homePage} />
            <Slogan />
            <Way wayData={data.homePage.wayData} />
            <FirstGallery data={data} dispatch={dispatch} place={place} activeCategory={i} />
            <Inspiration data={data.homePage} />
        </div>
    )
}
export default Home;