import React from 'react';
import ls from './Subs.module.css';
import { addEmailActionCreator, updateNewEmailActionCreator } from './../../../store/state.js';

const Subs = ({dispatch, text }) => {
    const newEmailEl = React.createRef();
    const addEmail = () => {
        dispatch(addEmailActionCreator());
    }
    const onEmailChenge = () => {
        let text = newEmailEl.current.value;
        dispatch(updateNewEmailActionCreator(text));
    }
    return (
        <div className={ls.inner}>
            <h5 className={ls.title}>Contact Us</h5>
            <p className={ls.text}>Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
            </p>         
            <div className={ls.email}>
                <img src="images/icon/envelope.svg" alt="email" />
                <a className={ls.link} href="mailto:ouremailaddress@email.com">
                    ouremailaddress@email.com
                </a>
            </div>
            
            <form className={ls.form}>
                <input className={ls.input} onChange={onEmailChenge} ref={newEmailEl} value={text}
                    type="email" placeholder='Subscribe by email' />
                <button className={ls.btn} onClick={addEmail} type="submit" >
                    Send
                </button>
            </form>
        </div>

    )
}
export default Subs;