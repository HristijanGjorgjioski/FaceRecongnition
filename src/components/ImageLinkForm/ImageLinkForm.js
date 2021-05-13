import React, { useContext } from 'react';
import Clarifai from 'clarifai'

import { ImageContext } from '../../context/ImageContext';
import CalculateFaceLocation from '../../utils/CalculateFaceLocation';
import ClarifaiApp from '../../utils/Clarifai';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  const { setInput, input } = useContext(ImageContext)

  const onButtonSubmit = async () => {
    const data = await ClarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    CalculateFaceLocation(data)
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div>
      <p className="f3">
        {`This Magic Brain will detect faces and properties`}
        <br />
        {` in your pictures. Give it a try.`}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} placeholder="Image Url Here" />
          <button className="w-30 grow f4 link ph3 pv2 dib  pointer" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
