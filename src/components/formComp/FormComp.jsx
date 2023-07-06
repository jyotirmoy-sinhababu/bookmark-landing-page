import React, { useState } from 'react';

import './formStyle.css';

const FormComp = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const saveFunct = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setMsg('whoops, make sure it is an email');
    } else {
      console.log('true');
      setMsg('successful');
    }
  };

  return (
    <div className='formComp-cnt'>
      <div className='formComp-head'>
        <p className='formComp-para'> 35,000+ already joined</p>
        <h3 className='formComp-header'>
          {' '}
          Stay up-to-date with what we’re doing
        </h3>
      </div>
      <div className='formComp-form-cnt'>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();

            saveFunct(e);
          }}
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            className='email-input'
            placeholder='enter your email'
          />
          <button className='submit-btn' type='submit'>
            Contact us
          </button>
        </form>
      </div>
      <div className='err-txt-cnt'>
        {msg && <p className='success-msg'>{msg}</p>}
      </div>
    </div>
  );
};

export default FormComp;
