import React, { useContext } from 'react'

import { ImageContext } from '../../../context/ImageContext'
import './FaceRecognition.css'

const FaceRecognition = () => {
  const { box, imageUrl } = useContext(ImageContext)
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageUrl === '' 
          ? <div /> 
          : <img id="inputimage" alt="" src={imageUrl} width="500px" height="500px" />
        }
        <div className="bounding-box" style={{ top: box?.topRow, right: box?.rightCol, left: box?.leftCol, bottom: box?.bottomRow }}></div>
      </div>
    </div>
  )
}

export default FaceRecognition
