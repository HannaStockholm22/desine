
import React from 'react';
import ls from './OnePhoto.module.css';

const OnePhoto = (props) => {
    let form = 1;
    let big
    const pathpub = `images/grid/${props.name}`;
    console.log('department=', props.depart);
    console.log("props.id=", props.id, " props.name=", props.name);

    if (props.id == form) big = true
    else big = false;

    return (      
        <div className={big ? ls.item1 : ls.item}  >
            <img className={ls.img} src={pathpub} alt="photo" />
        </div>
    )
}
export default OnePhoto;