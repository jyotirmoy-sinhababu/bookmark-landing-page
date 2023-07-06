import React from 'react';

import Btn from '../btn/Btn';

import hero from '../../assest/img/illustration-hero.svg';
import './featurListStyle.css';

const SimpleBookmakin = () => {
  return (
    <div className='featureList-cnt'>
      <div className='featureList-img-cnt'>
        <img className='featureList-img' src={hero} alt='' />
      </div>
      <div className='featureList-txt-cnt'>
        <h3 className='featureList-header'> Bookmark in one click</h3>
        <p className='featureList-para'>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div className='feaList-btn-cnt'>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default SimpleBookmakin;
