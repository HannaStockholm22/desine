import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './About.module.css';
import TextBlock from './TextBlock/TextBlock';

const About = (props) => {
    return (
       <div className={ls.inner}>  
            <BreadCrumbs name={'About'} path={'/about'} />   
            <div className={ls.section}>
                <h1 className={ls.title}> About Us</h1>
            </div>
            <TextBlock/>
        </div>
    )
}
export default About;