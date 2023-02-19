import React from 'react';
import ls from './PhotoLine.module.css';

const PhotoLine = ({name,department,item,title}) => {
    const pathpub = `images/line/${name}`;
    const fulltext = `${department} | ${item} `;

    return (
        <div >
            <div className={ls.item}>
                <img className={ls.img}   src={pathpub}   alt="photo" />
                <div className={ls.info}>
                    <div className={ls.title}>{title}</div>
                    <div className={ls.text}>{fulltext}</div>
                </div>
            </div>
        </div>
    )

}
export default PhotoLine;