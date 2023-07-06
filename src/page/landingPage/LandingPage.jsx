import React from 'react';

import { data } from '../../assest/dataCnt/Data';

import Nav from '../../components/nav/Nav';
import Intro from '../../components/intro/Intro';
import Feature from '../../components/features/Feature';
import Extension from '../../components/extension/Extension';
import QuestionSection from '../../components/questionSection/QuestionSection';
import QuestionHeader from '../../components/questionSection/QuestionHeader';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Feature />
      <Extension />
      <QuestionHeader />
      {data?.map((item) => {
        return (
          <div key={item.id}>
            {' '}
            <QuestionSection item={item} />{' '}
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
