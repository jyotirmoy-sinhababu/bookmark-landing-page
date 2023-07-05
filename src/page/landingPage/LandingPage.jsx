import React from 'react';

import Nav from '../../components/nav/Nav';
import Intro from '../../components/intro/Intro';
import Feature from '../../components/features/Feature';
import Extension from '../../components/extension/Extension';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Feature />
      <Extension />
    </div>
  );
};

export default LandingPage;
