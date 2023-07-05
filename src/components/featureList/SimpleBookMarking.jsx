import React from 'react';

import hero from '../../assest/img/illustration-hero.svg';

const simpleBookMarking = () => {
  return (
    <div>
      <div>
        <img src={hero} alt='' />
      </div>
      <div>
        <h3> Bookmark in one click</h3>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <Btn />
      </div>
    </div>
  );
};

export default simpleBookMarking;
