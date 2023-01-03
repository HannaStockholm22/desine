import React from 'react';
import ls from './Input.module.css';
import { addContactActionCreator, updateEmailActionCreator, updateNameActionCreator, updateMessageActionCreator } from './../../red/state.js';

const Input = (props) => {

    const newEmailEl = React.createRef();
    const newNameEl = React.createRef();
    const newMessEl = React.createRef();

    const addInfo = () => {
        props.dispatch(addContactActionCreator());
    }

    const onEmailChenge = () => {
        let text = newEmailEl.current.value;
        props.dispatch(updateEmailActionCreator(text));
    }
    const onNameChenge = () => {
        let text = newNameEl.current.value;
        props.dispatch(updateNameActionCreator(text));
    }
    const onMessChenge = () => {
        let text = newMessEl.current.value;
        props.dispatch(updateMessageActionCreator(text));
    }


    return (
        <div className={ls.inner}>
            <div className={ls.email}>
                <img src="images/icon/envelope.svg" alt="email" />
                <a className={ls.link} href="mailto:ouremailaddress@email.com">
                    ouremailaddress@email.com
                </a>
            </div>

            <form className={ls.forms}>
                <div className={ls.blocktop}>
                    <input className={ls.input} onChange={onNameChenge} ref={newNameEl} value={props.text}
                        placeholder='Your name' />
                    <input className={ls.input} onChange={onEmailChenge} ref={newEmailEl} value={props.text}
                        type="email" placeholder='Your email' />
                </div>

                <div className={ls.blockbottom}>
                    <textarea className={ls.textarea} onChange={onMessChenge} ref={newMessEl} value={props.text}
                        placeholder='Your message' />
                </div>

                <button className={ls.btn} onClick={addInfo} type="submit" >
                    Send
                </button>
            </form>
        </div>
    )
}
export default Input;