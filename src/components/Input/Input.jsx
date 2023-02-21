import React from 'react';
import ls from './Input.module.css';
import { addContactActionCreator, updateEmailActionCreator, updateNameActionCreator, updateMessageActionCreator } from '../../store/state.js';

const Input = ({dispatch,text}) => {

    const newEmailEl = React.createRef();
    const newNameEl = React.createRef();
    const newMessEl = React.createRef();

    const addInfo = () => {
        dispatch(addContactActionCreator());
    }

    const onEmailChenge = () => {
        let text = newEmailEl.current.value;
        dispatch(updateEmailActionCreator(text));
    }
    const onNameChenge = () => {
        let text = newNameEl.current.value;
        dispatch(updateNameActionCreator(text));
    }
    const onMessChenge = () => {
        let text = newMessEl.current.value;
        dispatch(updateMessageActionCreator(text));
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
                    <input className={ls.input} onChange={onNameChenge} ref={newNameEl} value={text}
                        placeholder='Your name' />
                    <input className={ls.input} onChange={onEmailChenge} ref={newEmailEl} value={text}
                        type="email" placeholder='Your email' />
                </div>

                <div className={ls.blockbottom}>
                    <textarea className={ls.textarea} onChange={onMessChenge} ref={newMessEl} value={text}
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