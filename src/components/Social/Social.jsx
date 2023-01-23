import React from 'react';
import ls from './Social.module.css';

const Social = ({ name, right, path, text }) => { //with destructuring code looks cleaner
  const pathPub = `images/icon/${name}`; // always use camel case
  const addGap = {
    paddingRight: right,
  };

  return (
    <div className={ls.item} style={addGap}>
      <a className={ls.link} href={path} target='_blank' rel='noreferrer'>
        <div className={ls.inner}> 
          <img className={ls.img} src={pathPub} alt='icon' />
          <span>{text}</span>
        </div>
      </a>
    </div>
  );
};
export default Social;
