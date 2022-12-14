import React from 'react';
import ls from './FootMenu.module.css';
import { NavLink } from 'react-router-dom';

const FootMenu = (props) => {
    return (
            <div className={ls.item1}>
                <NavLink className={ls.link} to={props.path}>
                <p>{props.name}</p>
                </NavLink>
            </div>      
    )
}
export default FootMenu;