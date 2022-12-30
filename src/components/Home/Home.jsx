import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import Collection from './Collection/Collection';
import FirstGallery from '../FirstGallery/FirstGallery';
import ls from './Home.module.css';
import Inspiration from './Inspiration/Inspiration';
import Slogan from './Slogan/Slogan';
import Way from './Way/Way';

const Home = (props) => {
    const i = props.data.homePage.activeCategory;
    const  place = props.data.homePage.galleryData[i];
    return (
        <div className={ls.inner}>
            <OneSlider data={props.data.homePage} />
            <Collection data={props.data.homePage} />
            <Slogan />
            <Way wayData={props.data.homePage.wayData} />
            <FirstGallery data={props.data} dispatch={props.dispatch} place={place} activeCategory={i} />
            <Inspiration data={props.data.homePage} />
        </div>
    )
}
export default Home;