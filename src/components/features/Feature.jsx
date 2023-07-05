import React, { useState } from 'react';

import './featureStyle.css';
import SimpleBookmakin from '../featureList/SimpleBookmakin';
import SpeedySearching from '../featureList/SpeedySearching';
import Easyharing from '../featureList/Easyharing';

const Feature = () => {
  const [count, setCount] = useState(0);

  const handleCount = (num) => {
    setCount(num);
  };

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
        <button
          onClick={() => {
            handleCount(0);
          }}
          className='feature-btn'
        >
          {' '}
          Simple Bookmarking{' '}
        </button>
        <button
          onClick={() => {
            handleCount(1);
          }}
          className='feature-btn'
        >
          Speedy Searching
        </button>
        <button
          onClick={() => {
            handleCount(2);
          }}
          className='feature-btn'
        >
          Easy Sharing
        </button>
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
