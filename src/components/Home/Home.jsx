import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import Collection from './Collection/Collection';
import ls from './Home.module.css';
import Slogan from './Slogan/Slogan';
import Way from './Way/Way';

const Home = (props) => {
    return (
        <div className={ls.inner}>
            <OneSlider data={props.data}/>  
            <Collection data={props.data}/>   
            <Slogan/>
            <Way wayData={props.data.wayData}/>
        </div>
    )
}
export default Home;