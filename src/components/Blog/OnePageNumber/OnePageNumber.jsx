import React, { useRef } from 'react';
import ls from './OnePageNumber.module.css';
import { updatePageNumberActionCreator } from './../../../red/state';

const OnePageNumber = (props) => {
    const inputEl = useRef();
    let choice = props.id;
    let check;

    if (props.activePage == props.id) check = true;
   

    const onClickBtn = () => {
        choice = inputEl.current.value;
        console.log('choice==', choice);
        props.dispatch(updatePageNumberActionCreator(choice));
        console.log('new=', props.activePage);

    }

    return (
        <div className={ls.radio} >
            <input className={ls.input} id={props.id} ref={inputEl} type="radio" name="radio" value={props.id} checked={check} />
            <label className={ls.label} for={props.id} onClick={onClickBtn} >{props.id + 1}</label>
        </div>
    )

}

export default OnePageNumber;