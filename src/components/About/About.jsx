import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './About.module.css';

const About = (props) => {
    return (
       <div className={ls.inner}>  
            <BreadCrumbs name={'About'} path={'/about'} />   
            <div className={ls.section}>
                <h1 className={ls.title}> About Us</h1>
            </div>
        </div>
    )
}
export default About;