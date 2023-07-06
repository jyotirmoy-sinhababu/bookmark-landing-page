import React, { useState } from 'react';

import './questionSecStyle.css';
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

const QuestionSection = ({ item }) => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);

  const handleAnswers = () => {
    if (!isQuestionClicked) {
      setIsQuestionClicked(true);
    }
    if (isQuestionClicked) {
      setIsQuestionClicked(false);
    }
  };
  return (
    <div className='question-cnt'>
      <div className='question-ans-cnt'>
        {' '}
        <div>
          <div className='question-btn-cnt'>
            <button
              className='question-btn'
              onClick={() => {
                handleAnswers();
              }}
            >
              {item.question}
              {!isQuestionClicked ? <AiOutlineDown /> : <IoIosArrowUp />}
            </button>
          </div>
          <div
            className={`question-ans ${
              !isQuestionClicked ? 'isNot' : 'isAvailable '
            }`}
          >
            <p className='ans-para'>{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
