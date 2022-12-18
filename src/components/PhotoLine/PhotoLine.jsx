import React from 'react';
import ls from './PhotoLine.module.css';

const PhotoLine = (props) => {
    const pathpub = `images/gallery/${props.name}`;
    const fulltext = `${props.department} | ${props.item} `;
    const title = props.title;

    return (
        <div >
            <div className={ls.item}>
                <img className={ls.img} src={pathpub} alt="photo" />
                <div className={ls.info}>
                    <div className={ls.title}>{title}</div>
                    <div className={ls.text}>{fulltext}</div>
                </div>
            </div>
        </div>
    )

}
export default PhotoLine;