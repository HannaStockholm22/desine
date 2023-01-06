import React from 'react';
import ls from './Card.module.css';
import { NavLink } from 'react-router-dom';
import Published from '../../../Published/Published';

const Card = ({ info }) => {
    const pathpub = `images/inspiration/${info.photo}`;
  
    return (
        <div className={ls.item}>
            <NavLink to='/blog'> <img className={ls.img} src={pathpub} alt="photo" /> </NavLink>
            <div className={ls.forpublished}>
            <Published  info={info} show={true}/>
            </div>
            <NavLink to='/blog'><h3 className={ls.title}>{info.title}</h3></NavLink>
        </div>

    )
}
export default Card;