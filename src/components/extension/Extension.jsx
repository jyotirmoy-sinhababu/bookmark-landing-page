import React from 'react';

import ChromeCard from '../extensionCard/ChromeCard';
import MozillaCard from '../extensionCard/MozillaCard';
import OperaCard from '../extensionCard/OperaCard';

import './extesionStyle.css';

const Extension = () => {
  return (
    <div className='extension-cnt'>
      <div className='extension-txt-cnt'>
        <h3 className='extension-header'>Download the extension</h3>
        <p className='extension-para'>
          {' '}
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className='extension-card-cnt'>
        <div className='extension-subOne-cnt'>
          <ChromeCard />
        </div>
        <div className='extension-subTwo-cnt'>
          <MozillaCard />
        </div>
        <div className='extension-subThree-cnt'>
          <OperaCard />
        </div>
      </div>
    </div>
  );
};

export default Extension;
