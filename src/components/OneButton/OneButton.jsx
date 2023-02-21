import React, { useRef } from 'react';
import ls from './OneButton.module.css';
import { updateBtnActionCreator } from '../../store/state';

const OneButton = ({id, active, dispatch, name}) => {

    let choice = id;
    const inputEl = useRef();
    let check;

    console.log('OneButton id=' + id + '   act=' + active);

    if (id === active) check = true;

    const onClickBtn = () => {
        choice = inputEl.current.value;
        console.log('choice=', choice);
        dispatch(updateBtnActionCreator(choice));
    }

    return (
        <div className={ls.radio} >
            <input className={ls.input} id={id} ref={inputEl} type="radio" name="radio" value={id} checked={check}/>
            <label className={ls.label} for={id} onClick={onClickBtn} >{name}</label>
         
        </div>
    )

}

export default OneButton;