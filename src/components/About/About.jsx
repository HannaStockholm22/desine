import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './About.module.css';
import InDetails from './InDetails/InDetails';
import TextBlock from './TextBlock/TextBlock';
import VideoBlock from './VideoBlock/VideoBlock';
import PhotoLine from '../PhotoLine/PhotoLine';
import LogoLine from '../LogoLine/LogoLine';

const About = ({data}) => {
    let PhotoElements = data.collectionData.map(el => <PhotoLine name={el.name} title={el.title} department={el.department} item={el.item} />);
    let LogoElements = data.logosData.map(el => <LogoLine name={el.name}  />);

    return (
        <div className={ls.inner}>
            <BreadCrumbs name={'About'} path={'/about'}/>
            <div className={ls.section}>
                <h1 className={ls.title}> About Us</h1>
            </div>
            <TextBlock />
            <VideoBlock />
            <InDetails data={data} />
            <div className="container-fluid">
                <div className={ls.wrapper}>
                    {LogoElements}
                </div>
                <div className={ls.wrapper}>
                    {PhotoElements}
                </div>
            </div>
        </div>
    )
}
export default About;


