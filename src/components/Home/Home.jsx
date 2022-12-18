import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import Collection from './Collection/Collection';
import ls from './Home.module.css';

const Home = (props) => {
    return (
        <div className={ls.inner}>
            <OneSlider data={props.data}/>  
            <Collection data={props.data}/>     
        </div>
    )
}
export default Home;