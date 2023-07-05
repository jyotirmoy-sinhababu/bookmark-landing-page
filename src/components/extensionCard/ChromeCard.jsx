import React from 'react';

import chrome from '../../assest/img/logo-chrome.svg';
import AddInstall from '../btn/AddInstall';

import './extensionCardStyle.css';

const ChromeCard = () => {
  return (
    <div className='card-cnt'>
      <img className='card-img' src={chrome} alt='' />
      <h3 className='card-header'>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default ChromeCard;
