import React from 'react';
import { NavLink } from 'react-router-dom';
import ls from './Published.module.css';

const Published = ({info, show}) => {
    let datsElements = info.dataPubl.map((el) => <p className={ls.elem}>{el}</p>)
   
    return (
        <div className={ls.line}>
            {datsElements} 
            <NavLink className={ls.link} to='/blog'> {info.autor}</NavLink>
            <NavLink className={ show ? ls.link : ls.hide} to='/blog'> {info.category}</NavLink>    
        </div>
    )
}
export default Published;