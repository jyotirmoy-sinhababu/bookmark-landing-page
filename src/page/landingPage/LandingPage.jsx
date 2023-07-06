import React from 'react';

import { data } from '../../assest/dataCnt/Data';

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
      <div>
        <div className='question-txt-cnt'>
          <h3 className='question-header'> Frequently Asked Questions</h3>
          <p className='question-para'>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
      </div>
      {data?.map((item) => {
        return <QuestionSection item={item} />;
      })}
    </div>
  );
};

export default LandingPage;
