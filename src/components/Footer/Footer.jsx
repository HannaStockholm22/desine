import React from 'react';
import ls from './Footer.module.css';
import FootMenu from './FootMenu/FootMenu';
import Social from './Social/Social';
import Subs from './Subs/Subs';

const Footer = (props) => {

    let socialElements = 
    props.data.socialData.map(el => <Social text={el.text} id={el.id} path={el.path} name={el.name}/>);
    let footMenuElements = props.data.footMenuData.map(el => <FootMenu name={el.name} path={el.path}/>);

    return (
        <div >
            <div className={ls.content}>
                <div className={ls.container}>
                    <div className={ls.inner}>
                        <Subs dispatch={props.dispatch} text={props.data.newEmailText}/>
                        <div className={ls.socialEl}>
                            {socialElements}
                        </div>
                        <div className={ls.footMenuEl}>
                            {footMenuElements}
                        </div>
                    </div>
                </div>
            </div>
            <div className={ls.copyright}>
                <div className={ls.container}>
                    <p>674 Gonzales Drive.   Washington, PA 15301</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;