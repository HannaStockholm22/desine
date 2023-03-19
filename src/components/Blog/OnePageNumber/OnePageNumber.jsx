import React, { useRef } from 'react';
import ls from './OnePageNumber.module.css';


const OnePageNumber = ({id,activePage,changePageContent}) => {
    const inputEl = useRef();
    let choice = id;
  
    const onClickChangeNumber = () => {
        choice = inputEl.current.value;
        changePageContent(choice);
    }

    return (
        <div className={ls.radio} >
            <input className={ls.input} id={id} ref={inputEl} type="radio" name="radio" value={id} checked={activePage == id} />
            <label className={ls.label} for={id} onClick={onClickChangeNumber} >{id + 1}</label>
        </div>
    )

}

export default OnePageNumber;