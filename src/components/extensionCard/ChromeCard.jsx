import React from 'react';

import chrome from '../../assest/img/logo-chrome.svg';
import AddInstall from '../btn/AddInstall';

const ChromeCard = () => {
  return (
    <div>
      <img src={chrome} alt='' />
      <h3>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default ChromeCard;
