import React from 'react';

import './featureStyle.css';
import SimpleBookmakin from '../featureList/SimpleBookmakin';

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
        <SimpleBookmakin />
      </div>
    </div>
  );
};

export default Feature;
