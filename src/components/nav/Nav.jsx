import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

import './navStyle.css';

import Logo from '../logo/Logo';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleAnswers = () => {
    if (!isMobile) {
      setIsMobile(true);
    }
    if (isMobile) {
      setIsMobile(false);
    }
  };
  return (
    <div className='nav-cnt'>
      <Logo />
      <div className='nav-btn-cnt'>
        <button className='nav-btns'>FEATURES</button>
        <button className='nav-btns'>PRICING</button>
        <button className='nav-btns'>CONTACT</button>
        <button className='nav-btn'>LOGIN</button>
      </div>
      <div className='mobile-view-cnt'>
        <div className='hamburger-btn-cnt'>
          <button
            className='hamburger-btn'
            onClick={() => {
              handleAnswers();
            }}
          >
            {isMobile ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>

        {isMobile ? (
          <div className='nav-mob-btn-cnt'>
            <button className='mob-btns'>FEATURES</button>
            <button className='mob-btns'>PRICING</button>
            <button className='mob-btns'>CONTACT</button>
            <button className='mob-btns'>LOGIN</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Nav;
