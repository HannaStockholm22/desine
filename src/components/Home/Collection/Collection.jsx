import React from 'react';
import PhotoLine from '../../PhotoLine/PhotoLine';
import ls from './Collection.module.css';

const Collection = (props) => {
    let PhotoElements = 
    props.data.collectionData.map(el => <PhotoLine  name={el.name}  title={el.title} department={el.department} item={el.item}  />);
    return (
        <div className={ls.collection}>
           <div className='container-fluid'>
            <h2 className={ls.title}>
            Furniture new collection
            </h2>
            <p className={ls.text}>
            Deep v you probably haven't heard of them banh mi synth actually affogato.
            Aesthetic lyft ethical drinking vinegar austint
            </p>
            <div className={ls.inner}>
            {PhotoElements}
            </div>
           </div>
        </div>
    )
}
export default Collection;