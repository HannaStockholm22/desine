import React from 'react';
import ls from './Footer.module.css';
import Social from './Social/Social';
import Subs from './Subs/Subs';

const Footer = (props) => {
    return (
        <footer className={ls.footer} >
            <div className={ls.content}>
                <div className={ls.container}>
                    <div className={ls.inner}>
                        <Subs/>
                        <Social  />
                        <div>
                            Privet
                        </div>
                    </div>
                </div>
            </div>
            <div className={ls.copyright}>
                <p>674 Gonzales Drive.   Washington, PA 15301</p>
            </div>
        </footer>
    )
}
export default Footer;