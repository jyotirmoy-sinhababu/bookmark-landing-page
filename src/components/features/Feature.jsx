import React, { useState } from 'react';

const [count, setCount] = useState(0);

import './featureStyle.css';
import SimpleBookmakin from '../featureList/SimpleBookmakin';
import SpeedySearching from '../featureList/SpeedySearching';
import Easyharing from '../featureList/Easyharing';

const Feature = () => {
  return (
    <div className='feature-cnt'>
      <div className='feature-txt-cnt'>
        {' '}
        <h4 className='feature-header'>Features</h4>
        <p className='feature-para'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className='feature-btn-cnt'>
        <button className='feature-btn'> Simple Bookmarking </button>
        <button className='feature-btn'>Speedy Searching</button>
        <button className='feature-btn'>Easy Sharing</button>
      </div>
      <div>
        {count == 0 ? (
          <SimpleBookmakin />
        ) : count == 1 ? (
          <SpeedySearching />
        ) : count == 2 ? (
          <Easyharing />
        ) : null}
      </div>
    </div>
  );
};

export default Feature;
