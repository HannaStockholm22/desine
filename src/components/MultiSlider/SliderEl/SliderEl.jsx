import React from 'react';
import ls from './SliderEl.module.css';
import { NavLink } from 'react-router-dom';

const SliderEl = ({name,title,size}) => {
    const pathpub = `images/line/${name}`;

    return (
        <div >
            <div className={ls.item}>
                <NavLink className={ls.link} to='/gallery'>
                    <img className={ls.img} style={{ width: size }} src={pathpub} alt="photo" />
                    <div className={ls.info}>
                        <div className={ls.title}>{title}</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default SliderEl;

