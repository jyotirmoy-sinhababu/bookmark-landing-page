import React from 'react';

import opera from '../../assest/img/logo-opera.svg';
import AddInstall from '../btn/AddInstall';

import './extensionCardStyle.css';

const OperaCard = () => {
  return (
    <div className='card-cnt'>
      {' '}
      <img className='card-img' src={opera} alt='' />
      <h3 className='card-header'>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default OperaCard;
