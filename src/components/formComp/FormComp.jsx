import React, { useState } from 'react';

import './formStyle.css';

const FormComp = () => {
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  console.log(email);

  const saveFunct = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErr('email format is wrong');
    } else {
      console.log('true');
    }
  };

  return (
    <div className='form-cnt'>
      <div className='formComp-head'>
        <p className='formComp-para'> 35,000+ already joined</p>
        <h3> Stay up-to-date with what we’re doing</h3>
      </div>
      <div>
        <form
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
            className='email'
            placeholder='enter your email'
          />
          <button type='submit'>Contact us</button>
        </form>
        {err && <p>{err}</p>}
      </div>
    </div>
  );
};

export default FormComp;
