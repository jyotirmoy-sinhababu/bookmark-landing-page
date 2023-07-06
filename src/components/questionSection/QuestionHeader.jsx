import React from 'react';

import './questionSecStyle.css';

const QuestionHeader = () => {
  return (
    <div className='question-header-cnt'>
      <div className='question-txt-cnt'>
        <h3 className='question-header'> Frequently Asked Questions</h3>
        <p className='question-para'>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
    </div>
  );
};

export default QuestionHeader;
