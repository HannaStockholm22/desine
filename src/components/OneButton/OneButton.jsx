import React, { useRef } from 'react';
import ls from './OneButton.module.css';
import { updateBtnActionCreator } from './../../store/state'; //folders and files should have explicit names, so any other developers can read and understand what it contains, especially configurations files/folders like store

const OneButton = (props) => {

    let choice = props.id;
    const inputEl = useRef();
    let check;

    console.log('OneButton id=' + props.id + '   act=' + props.active);

    if (props.id === props.active) check = true; //good practice to use === instead of ==

    const onClickBtn = () => {
        choice = inputEl.current.value;
        console.log('choice=', choice);
        props.dispatch(updateBtnActionCreator(choice));
    }

    return (
        <div className={ls.radio} >
            <input className={ls.input} id={props.id} ref={inputEl} type="radio" name="radio" value={props.id} checked={check}/>
            <label className={ls.label}for={props.id} onClick={onClickBtn} >{props.name}</label>
         
        </div>
    )

}

export default OneButton;