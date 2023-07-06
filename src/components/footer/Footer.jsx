import React from 'react';

import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <p class='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Jyotirmoy Sinha</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
