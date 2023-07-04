import React from 'react';

import './introStyle.css';

import hero from '../../assest/img/illustration-hero.svg';

const Intro = () => {
  return (
    <div className='intro-cnt'>
      <div className='intro-sub-cnt'>
        <div className='intro-txt-cnt'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            {' '}
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className='intro-btn-cnt'>
          <button className='intro-btn'>Get it on Chrome </button>
          <button className='intro-btn'>Get it on Firefox</button>
        </div>
      </div>
      <div className='intro-img-cnt'>
        <img className='intro-img' src={hero} alt='image' />
      </div>
    </div>
  );
};

export default Intro;
