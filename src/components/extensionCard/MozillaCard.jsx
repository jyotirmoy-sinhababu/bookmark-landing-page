import React from 'react';

import Mozilla from '../../assest/img/logo-firefox.svg';
import AddInstall from '../btn/AddInstall';

const MozillaCard = () => {
  return (
    <div>
      {' '}
      <img src={Mozilla} alt='' />
      <h3>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default MozillaCard;
