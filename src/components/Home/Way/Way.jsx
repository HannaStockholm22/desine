import React from 'react';
import ls from './Way.module.css';
import WaysElem from './WaysElem/WaysElem';

const Way = (props) => {

    //let Elements = props.wayData.map(el => <WaysElem name={el.name} title={el.title} text={el.text}/>);
    return (
        <div className={ls.inner}>
            <div className="container">
                <h2 className={ls.title}>How it works</h2>
                <div className={ls.top}>
                    <WaysElem id={props.wayData[0].id} name={props.wayData[0].name} title={props.wayData[0].title} text={props.wayData[0].text} />
                    <WaysElem id={props.wayData[2].id} name={props.wayData[2].name} title={props.wayData[2].title} text={props.wayData[2].text} />
                </div>
                <div className={ls.bottom}>
                    <WaysElem id={props.wayData[1].id} name={props.wayData[1].name} title={props.wayData[1].title} text={props.wayData[1].text} />
                </div>

            </div>
        </div>
    )
}

export default Way;