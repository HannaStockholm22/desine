import React from 'react';
import ls from './Way.module.css';
import WaysElem from './WaysElem/WaysElem';

const Way = ({wayData}) => {

    //let Elements = wayData.map(el => <WaysElem name={el.name} title={el.title} text={el.text}/>);
    return (
        <div className={ls.inner}>
            <div className="container">
                <h2 className={ls.title}>How it works</h2>
                <div className={ls.add}>
                    <WaysElem id={wayData[0].id} name={wayData[0].name} title={wayData[0].title} text={wayData[0].text} />
                </div>
                <div className={ls.top}>
                    <WaysElem id={wayData[0].id} name={wayData[0].name} title={wayData[0].title} text={wayData[0].text} />
                    <WaysElem id={wayData[2].id} name={wayData[2].name} title={wayData[2].title} text={wayData[2].text} />
                </div>
                <div className={ls.bottom}>
                    <WaysElem id={wayData[1].id} name={wayData[1].name} title={wayData[1].title} text={wayData[1].text} />
                </div>
                <div className={ls.add}>
                    <WaysElem id={wayData[2].id} name={wayData[2].name} title={wayData[2].title} text={wayData[2].text} />
                </div>

            </div>
        </div>
    )
}

export default Way;