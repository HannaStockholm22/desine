import React from 'react';
import ls from './InDetails.module.css';
import ProcentLine from './ProcentLine/ProcentLine';


const InDetails = (props) => {
    let DetailsElements = props.data.detailsData.map(el => < ProcentLine name={el.name} num={el.num}/>);

    return (
        <div className={ls.inner}>
            <div className="container">
                <div className={ls.content}>
                    <img className={ls.img} src="images/about/image.png" alt="img" />
                    <div className={ls.info}>
                        <h3 className={ls.title}>Our Inspiration in details</h3>
                        <p className={ls.text}>
                            Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
                            helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
                        </p>
                        {DetailsElements}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InDetails;