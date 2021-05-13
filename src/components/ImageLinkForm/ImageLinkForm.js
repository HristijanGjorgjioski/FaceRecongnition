import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  // const onButtonSubmit = async () => {
  //   const data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
  //   calculateFaceLocation(data)
  // };

  // const onInputChange = (event) => {
  //   setInput(event.target.value)
  // };

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
