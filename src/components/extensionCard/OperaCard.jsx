import React from 'react';

import opera from '../../assest/img/logo-opera.svg';
import AddInstall from '../btn/AddInstall';

const OperaCard = () => {
  return (
    <div>
      {' '}
      <img src={opera} alt='' />
      <h3>Add to Chrome</h3>
      <AddInstall />
    </div>
  );
};

export default OperaCard;
