import React from 'react';
import { NavLink } from 'react-router-dom';
import ls from './BreadCrumbs.module.css';

const BreadCrumbs = (props) => {
    //let CrumbsElement = props.data.departmentsData.map(el => <NavLink className={ls.link} to='/home'> id={el.id}  </NavLink>);
    return (
        <div className={ls.inner}>
            <div className="container">
                <div className={ls.line}>
                <NavLink className={ls.link} to='/home'> Home </NavLink>
                <NavLink className={ls.link} to={props.path}> {props.name}  </NavLink>             
                </div>
            </div>

        </div>
    )
}
export default BreadCrumbs;