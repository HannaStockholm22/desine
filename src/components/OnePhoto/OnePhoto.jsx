
import React from 'react';
import ls from './OnePhoto.module.css';

const OnePhoto = (props) => {
    const pathpub = `images/grid/${props.name}`;
    let big;
   
    if (props.id == 1) big = true
    else big = false;
   
    if (props.left){
        return (
            <div className={big ? ls.item1 : ls.item}  >
                <img className={ls.img} src={pathpub} alt="photo" />
            </div>
        )
    }else{
        return (
            <div className={big ? ls.item2 : ls.item}  >
                <img className={ls.img} src={pathpub} alt="photo" />
            </div>
        )
    }
    
}
export default OnePhoto;