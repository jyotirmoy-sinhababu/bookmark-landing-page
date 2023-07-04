import React from 'react';

import './navStyle.css';

import Logo from '../logo/Logo';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <Logo />
      <div className='nav-btn-cnt'>
        <button className='nav-btns'>FEATURES</button>
        <button className='nav-btns'>PRICING</button>
        <button className='nav-btns'>CONTACT</button>
        <button className='nav-btn'>LOGIN</button>
      </div>
    </div>
  );
};

export default Nav;
