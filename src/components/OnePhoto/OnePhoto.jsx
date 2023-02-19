
import React from 'react';
import ls from './OnePhoto.module.css';

const OnePhoto = ({name, id, left}) => {
    const pathpub = `images/grid/${name}`;
    let big;
   
    if (id == 1) big = true
    else big = false;
   
    if (left){
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