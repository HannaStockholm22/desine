import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Input from '../Input/Input';
import MultiSlider from '../MultiSlider/MultiSlider';
import Social from '../Social/Social';
import Title from '../Title/Title';
import ls from './Contact.module.css';



const Contact = (props) => {
    let socialElements =
        props.data.footerPart.socialData.map(el => <Social id={el.id} path={el.path} name={el.name} />);
    return (
        <div >
            <BreadCrumbs name={'Contact'} path={'/contact'} />
            <div className={ls.map}>
                <iframe style={{ width: "100%", height: "578" }} width="1920" height="578"
                    src="https://maps.google.com/maps?width=1920&amp;height=578&amp;
                    hl=en&amp;q=%20Green%20St%20San%20Francisco%2C%20California(CA)%2C%2094133+(Title)&amp;
                    ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
            <div className="container">
                <div className={ls.content}>
                    <Title text={'Contact Us'} />
                    <div className={ls.info}>
                        <div className={ls.line}>
                            {socialElements}
                        </div>
                        <p className={ls.text1}>
                            Vexillologist vape microdosing freegan pork belly deep v direct trade craysingle-origin
                            coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine
                            copper mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock
                        </p>
                        <div className={ls.block}>
                            <a className={ls.phone} href="tel:+14158297934">(415) 829-7934</a>
                            <p className={ls.text2}> 725 Green St</p>
                            <p className={ls.text2}> San Francisco, California(CA), 94133</p>
                        </div>
                        <div className={ls.forms}>
                            <Input dispatch={props.dispatch} text={props.text} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={ls.sliderBlock}>
                <div className="container-fluid">
                <MultiSlider data={props.data.contactPage} fade={true} play={true} />
                </div>
            </div>
        </div>
    )
}
export default Contact;