import React from 'react';
import { NavLink } from 'react-router-dom';
import ls from './Published.module.css';

const Published = (props) => {
    let datsElements = props.info.dataPubl.map((el) => <p className={ls.elem}>{el}</p>)
   
    return (
        <div className={ls.line}>
            {datsElements}
            <NavLink className={ls.link} to='/blog'> {props.info.autor}</NavLink>
            <NavLink className={ props.show ? ls.link : ls.hide} to='/blog'> {props.info.category}</NavLink>    
        </div>
    )
}
export default Published;