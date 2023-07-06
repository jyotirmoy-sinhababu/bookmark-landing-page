import React from 'react';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './footerStyle.css';

import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <div className='footer-cnt'>
      <div className='footer-logo-cnt'>
        <Logo />
      </div>
      <div className='footer-createdBy-info'>
        <p className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Jyotirmoy Sinha</a>.
        </p>
      </div>
      <div className='footer-dev-info'>
        <p className='footer-link'>
          {' '}
          <a
            href='https://www.linkedin.com/in/jyotirmoy-sinhababu-64b9a7212'
            target='_blank'
          >
            <BsLinkedin />
          </a>
        </p>
        <p className='footer-link git'>
          {' '}
          <a href='https://github.com/jyotirmoy-sinhababu' target='_blank'>
            <BsGithub />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
