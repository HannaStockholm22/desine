import React , { useState,useEffect } from 'react';
import ls from './RightsideMenu.module.css';
import { NavLink } from 'react-router-dom';

const RightsideMenu = () => {
    const [isActive, setIsActive] = useState(false); 
    
    useEffect(() => {
        console.log(isActive);
      }, [isActive]);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    return (    
        <div className={ls.inner}>
            <div className={ls.content}>
                <NavLink className={ls.link} to='/home'>
                    <img src="images/rightside/biglogo.png" alt="biglogo" />
                </NavLink>
                <h4 className={ls.title}>
                    Furniture for life
                </h4>
                <p className={ls.text}>
                    Sustainable hot chicken skateboard, dreamcatcher meggings
                    actually squid. Slow-carb everyday carry +1 art party microdosing, 
                    put a bird on it brooklyn
                </p>
                <img className={ls.img} src="images/rightside/rectangle.jpg" alt="rectangle" />
            </div>
            </div>   
    )
}
export default RightsideMenu;