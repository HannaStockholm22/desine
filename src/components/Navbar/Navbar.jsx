import React from 'react';
import ls from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import imaga1 from './../../images/logo.png';
import imaga2 from './../../images/icon_menu.svg';

const Navbar = () => {
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
                        <img  src={imaga1} alt="logo" />
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
                <button className={ls.btn}>
                    <img  src={imaga2} alt="icon_menu" />
                </button>
            </div>
        </div>
    )
}
export default Navbar;