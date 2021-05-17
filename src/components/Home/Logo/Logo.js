import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo absolute mt0" style={{ marginTop: '31px' }}>
      <Tilt
        className="Tilt br2"
        options={{ max: 43 }}
        style={{ height: 70, width: 70 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: '5px' }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
