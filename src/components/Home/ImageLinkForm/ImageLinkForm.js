import React, { useContext, useEffect } from 'react'
import Clarifai from 'clarifai'

import { ImageContext } from '../../../context/ImageContext'
import ClarifaiApp from '../../../utils/Clarifai'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  const { setInput, input, setBox, setImageUrl, box } = useContext(ImageContext)

  const onButtonSubmit = async () => {
    const data = await ClarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    const clarifaiFace = data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box
    setImageUrl(data.outputs[0].input.data.image.url)

    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)

    setBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    })
  }

  useEffect(() => {
    console.log(box)
  }, [box])

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
          <button className="w-30 grow f4 link ph3 pv2 dib  pointer" onClick={() => onButtonSubmit()}>
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
