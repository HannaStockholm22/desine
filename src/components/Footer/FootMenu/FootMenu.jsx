import React from 'react';
import ls from './FootMenu.module.css';
import { NavLink } from 'react-router-dom';

const FootMenu = ({path,name}) => {
    return (
            <div className={ls.item1}>
                <NavLink className={ls.link} to={path}>
                <p>{name}</p>
                </NavLink>
            </div>      
    )
}
export default FootMenu;