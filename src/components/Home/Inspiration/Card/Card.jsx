import React from 'react';
import ls from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = ({info}) => {
    const pathpub = `images/inspiration/${info.photo}`;
    let datsElements = info.dataPubl.map((el) => <p className={ls.elem}>{el}</p>)

    return (
        <div className={ls.item}>
            <NavLink to='/blog'>
                <img className={ls.img} src={pathpub} alt="photo" />
            </NavLink>

            <div className={ls.line}>
                {datsElements}
                <NavLink className={ls.link} to='/blog'> {info.autor}</NavLink>
                <NavLink className={ls.link} to='/blog'> {info.category}</NavLink>
            </div>
            <NavLink to='/blog'>
                <h3 className={ls.title}>{info.title}</h3>
            </NavLink>
        </div>


    )
}
export default Card;