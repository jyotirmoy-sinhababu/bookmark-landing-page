import React from 'react';

import Nav from '../../components/nav/Nav';
import Intro from '../../components/intro/Intro';
import Feature from '../../components/features/Feature';
import Extension from '../../components/extension/Extension';
import QuestionSection from '../../components/questionSection/QuestionSection';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Feature />
      <Extension />
      <QuestionSection />
    </div>
  );
};

export default LandingPage;
