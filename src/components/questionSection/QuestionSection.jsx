import React, { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

import { data } from '../../assest/dataCnt/Data';

const QuestionSection = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);

  const handleAnswers = () => {
    if (isQuestionClicked) {
      setIsQuestionClicked(true);
    }
    if (!isQuestionClicked) {
      setIsQuestionClicked(false);
    }
  };
  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <button>
                {item.question}
                {!isQuestionClicked ? <AiOutlineDown /> : <IoIosArrowUp />}
              </button>
            </div>
            <div>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionSection;
