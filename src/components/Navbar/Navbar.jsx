import React, { useState, useEffect } from 'react';
import ls from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import RightSideMenu from '../RightSideMenu/RightSideMenu';


const Navbar = (props) => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        console.log(isActive);
    }, [isActive]);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const newHeight = {
       /* height: props.data.pageHeight-40,   for 100% height of the page  we use props*/
       height:1020
    };
   
    return (
        <div className='container'>
            <div className={ls.inner}>
                <nav className={ls.list}>
                    <div className={ls.item}>
                        <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='/about'> About</NavLink>
                    </div>
                    <div className={ls.item}>
                        <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='/gallery'> Gallery</NavLink>
                    </div>
                </nav>

                <div className={ls.logo}>
                    <NavLink className={ls.link} to='/home'>
                        <img src="images/icon/logo.png" alt="logo" />
                    </NavLink>
                </div>

                <nav className={ls.list} >
                    <div className={ls.item}>
                        <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='/blog'> Blog</NavLink>
                    </div>
                    <div className={ls.item}>
                        <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='/contact'>Contact</NavLink>
                    </div>
                </nav>

                <button className={ls.btn} onClick={toggleClass} >
                    <img src="images/icon/icon_menu.svg" alt="icon_menu" />
                </button>
                <div className={isActive ? ls.sideMenu : ls.sideMenuClose}>
                    <div className={ls.sideMenu} style={newHeight} >
                        <button className={ls.cross} onClick={toggleClass}>
                            <img src="images/rightside/path.svg" alt="cross" />
                        </button>
                        <RightSideMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;