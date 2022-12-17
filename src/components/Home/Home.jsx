import React from 'react';
import OneSlider from '../OneSlider/OneSlider';
import ls from './Home.module.css';

const Home = (props) => {
    return (
        <div className={ls.inner}>
            <OneSlider data={props.data}/>       
        </div>
    )
}
export default Home;