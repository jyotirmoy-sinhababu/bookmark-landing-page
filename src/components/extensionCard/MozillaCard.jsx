import React from 'react';

import Mozilla from '../../assest/img/logo-firefox.svg';
import AddInstall from '../btn/AddInstall';

import './extensionCardStyle.css';

const MozillaCard = () => {
  return (
    <div className='card-cnt'>
      {' '}
      <img className='card-img' src={Mozilla} alt='' />
      <h3 className='card-header'>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default MozillaCard;
