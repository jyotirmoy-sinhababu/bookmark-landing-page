import React from 'react';

import Btn from '../btn/Btn';

import third from '../../assest/img/illustration-features-tab-3.svg';
import './featurListStyle.css';

const Easyharing = () => {
  return (
    <div className='featureList-cnt'>
      <div className='featureList-img-cnt'>
        <img className='featureList-img' src={third} alt='' />
      </div>
      <div className='featureList-txt-cnt'>
        <h3 className='featureList-header'>Share your bookmarks</h3>
        <p className='featureList-para'>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <div className='feaList-btn-cnt'>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default Easyharing;
