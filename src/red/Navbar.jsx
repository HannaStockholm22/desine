import React from 'react';
import ls from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import RightsideMenu from '../RightsideMenu/RightsideMenu';


const Navbar = () => {
    //const openRightsideMenu = () => {
    //    navData => navData.isActive ? ls.active : ls.link;
    //    console.log('onClick');
    //}
    //const [activeState, setActiveState] = useState(false);
    //setActiveState(prev => !prev);

    return (
        <div className={ls.container}>
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

                <button className={ls.btn} >
                    <img src="images/icon/icon_menu.svg" alt="icon_menu" />
                </button>
                <div className={`${ls.sideMenu}${ls.sideMenuClose}`}>
               
                    <RightsideMenu/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;