import React, { useContext } from 'react';

import { ImageContext } from '../../context/ImageContext'
import './FaceRecognition.css';

const FaceRecognition = () => {
  const { box, imageUrl } = useContext(ImageContext)
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{ top: box.rightCol, right: box.topRow, left: box.bottomRow, bottom: box.leftCol }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
