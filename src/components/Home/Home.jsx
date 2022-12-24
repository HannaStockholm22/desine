import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import Collection from './Collection/Collection';
import FirstGallery from './FirstGallery/FirstGallery';
import ls from './Home.module.css';
import Slogan from './Slogan/Slogan';
import Way from './Way/Way';

const Home = (props) => {
  
    return (
        <div className={ls.inner}>
            <OneSlider data={props.data.homePage}/>  
            <Collection data={props.data.homePage}/>   
            <Slogan/>
            <Way wayData={props.data.homePage.wayData}/>
            <FirstGallery data={props.data} dispatch={props.dispatch}/>
        </div>
    )
}
export default Home;