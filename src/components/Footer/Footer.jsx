import React from 'react';
import ls from './Footer.module.css';
import FootMenu from './FootMenu/FootMenu';
import Social from '../Social/Social';
import Subs from './Subs/Subs';

const Footer = ({ data, dispatch }) => {

    let socialElements =
        data.socialData.map(el => <Social text={el.text} id={el.id} path={el.path} name={el.name} />);
    let footMenuElements = data.footMenuData.map(el => <FootMenu name={el.name} path={el.path} />);

    return (
        <div >
            <div className={ls.content}>
                <div className='container'>
                    <div className={ls.inner}>
                        <Subs dispatch={dispatch} text={data.newEmailText} />
                        <div className={ls.block}>
                            <div className={ls.socialEl}>
                                {socialElements}
                            </div>
                            <div className={ls.footMenuEl}>
                                {footMenuElements}
                            </div>
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