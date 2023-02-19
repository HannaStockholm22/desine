import React, { useRef } from 'react';
import ls from './OnePageNumber.module.css';
import { updatePageNumberActionCreator } from './../../../red/state';

const OnePageNumber = ({id,activePage,dispatch}) => {
    const inputEl = useRef();
    let choice = id;
    let check;

    if (activePage == id) check = true;
   

    const onClickBtn = () => {
        choice = inputEl.current.value;
        console.log('choice==', choice);
        dispatch(updatePageNumberActionCreator(choice));
        console.log('new=',activePage);

    }

    return (
        <div className={ls.radio} >
            <input className={ls.input} id={id} ref={inputEl} type="radio" name="radio" value={id} checked={check} />
            <label className={ls.label} for={id} onClick={onClickBtn} >{id + 1}</label>
        </div>
    )

}

export default OnePageNumber;