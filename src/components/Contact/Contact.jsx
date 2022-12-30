import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './Contact.module.css';

const Contact = () => {
    return (
        <div className={ls.inner}>
            <BreadCrumbs name={'Contact'} path={'/contact'} />
            <div className={ls.map}>
                <iframe style={{ width: "100%", height: "578" }} width="1920" height="578" 
                    src="https://maps.google.com/maps?width=1920&amp;height=578&amp;
                    hl=en&amp;q=%20Green%20St%20San%20Francisco%2C%20California(CA)%2C%2094133+(Title)&amp;
                    ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    )
}
export default Contact;