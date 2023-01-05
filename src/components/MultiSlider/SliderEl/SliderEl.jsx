import React from 'react';
import ls from './SliderEl.module.css';
import { NavLink } from 'react-router-dom';

const SliderEl = (props) => {
    const pathpub = `images/line/${props.name}`;
    const title = props.title;

    return (
        <div >
            <div className={ls.item}>
                <NavLink className={ls.link} to='/gallery'>
                    <img className={ls.img} style={{ width: props.size }} src={pathpub} alt="photo" />
                    <div className={ls.info}>
                        <div className={ls.title}>{title}</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default SliderEl;

