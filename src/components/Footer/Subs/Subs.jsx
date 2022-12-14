import React from 'react';
import ls from './Subs.module.css';
import imimg from './../../../images/envelope.svg';
import {addEmailActionCreator ,updateNewEmailActionCreator} from './../../../red/state.js';


const Subs = (props) => {

    const newEmailEl = React.createRef();
    const addEmail = () => {
        props.dispatch(addEmailActionCreator());
    }
    const onEmailChenge = () => {
        let text = newEmailEl.current.value;
        props.dispatch(updateNewEmailActionCreator(text));
        
    }

    return (
        <div className={ls.inner}>
            <h5 className={ls.title}>Contact Us</h5>
            <p className={ls.text}>Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
            </p>
            <div className={ls.email}>
                <img src={imimg} alt="email" />
                <a className={ls.link} href="mailto:ouremailaddress@email.com">
                    ouremailaddress@email.com
                </a>
            </div>
            <form className={ls.form}>
                <input className={ls.input} onChange={onEmailChenge} ref={newEmailEl} value={props.text}
                type="email" placeholder='Subscribe by email' />
                <button className={ls.btn}  onClick={addEmail} type="submit" >
                    Send
                </button>
            </form>

        </div>

    )
}
export default Subs;