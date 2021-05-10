import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, properties, imageHeight }) => {
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
      <div style={{ marginTop: imageHeight }} width="500px" height="auto">
        {/* <ul className="list ph3 ph5-ns pv4">
          {properties.map((propertie, index) => {
            if (index === 5 || index === 10 || index === 15) {
              return (
                <div key={index}>
                  <li className="dib mr1 mb2">
                    <button className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">
                      {propertie}
                    </button>
                  </li>
                  <br />
                </div>
              );
            } else {
              return (
                <li className="dib mr1 mb2" key={index}>
                  <button className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">
                    {propertie}
                  </button>
                </li>
              );
            }
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default FaceRecognition;
