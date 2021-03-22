import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, properties }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
      <ul>
        {properties.map((propertie, index) => {
          return <li key={index}>{propertie}</li>;
        })}
      </ul>
    </div>
  );
};

export default FaceRecognition;
