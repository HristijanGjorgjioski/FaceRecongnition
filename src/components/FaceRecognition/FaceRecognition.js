import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
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
          // style={{
          //   top: box.topRow,
          //   right: box.rightCol,
          //   left: box.leftCol,
          //   bottom: box.bottomRow,
          // }}
          style={{
            top: '10px',
            right: '58px',
            left: '56px',
            bottom: '80px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
