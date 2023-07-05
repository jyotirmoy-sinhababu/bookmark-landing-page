import React from 'react';

import Btn from '../btn/Btn';

import './featurListStyle.css';
import lens from '../../assest/img/illustration-features-tab-2.svg';

const SpeedySearching = () => {
  return (
    <div className='featureList-cnt'>
      <div className='featureList-img-cnt'>
        <img className='featureList-img' src={lens} alt='' />
      </div>
      <div className='featureList-txt-cnt'>
        <h3 className='featureList-header'> Intelligent search</h3>
        <p className='featureList-para'>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <Btn />
      </div>
    </div>
  );
};

export default SpeedySearching;
