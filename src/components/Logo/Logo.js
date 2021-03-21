import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow2"
        options={{ max: 43 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner"> 👽 </div>
      </Tilt>
    </div>
  );
};

export default Logo;
