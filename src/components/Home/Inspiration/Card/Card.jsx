import React from 'react';
import ls from './Card.module.css';

const Card = (props) => {
    const pathpub = `images/inspiration/${props.info.photo}`;
    let datsElements = props.info.dataPubl.map((el) => <p className={ls.elem}>{el}</p> )
   
    return (
        <div className={ls.item}>
            <img className={ls.img} src={pathpub} alt="photo" />      
            <div className={ls.line}>
            {datsElements}
            <p className={ls.next}>{props.info.autor}</p>
            <p className={ls.next}>{props.info.category}</p>
            </div>
            <h3 className={ls.title}>{props.info.title}</h3>
           
        </div>


    )
}
export default Card;