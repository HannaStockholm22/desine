import React from 'react';
import ls from './Subs.module.css';

const Subs = () => {
    return (
        <div className={ls.inner}>
            <h5 className={ls.title}>Contact Us</h5>
            <p className={ls.text}>Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
            </p>
            <a className={ls.email} href="mailto:ouremailaddress@email.com">
                ouremailaddress@email.com
            </a>
            <form className={ls.form}>
                <input className={ls.input} type="email" placeholder='Subscribe by email' />
                <button className={ls.btn} type="submit" >
                    Send
                </button>
            </form>
        </div>

    )
}
export default Subs;