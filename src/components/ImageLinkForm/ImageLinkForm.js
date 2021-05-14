import React, { useContext, useEffect } from 'react'
import Clarifai from 'clarifai'

import { ImageContext } from '../../context/ImageContext'
// import CalculateFaceLocation from '../../utils/CalculateFaceLocation'
import ClarifaiApp from '../../utils/Clarifai'
import dimensions from '../../utils/dimensions'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  const { setInput, input, setBox, imageUrl, setImageUrl, box } = useContext(ImageContext)

  const onButtonSubmit = async () => {
    const data = await ClarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    const clarifaiFace = await data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box
    setImageUrl(data.outputs[0].input.data.image.url)

    // const imgDimensions = await dimensions(data.outputs[0].input.data.image.url)
    // const width = imgDimensions.width
    // const height = imgDimensions.height

    const theImage = new Image()
    theImage.src = imageUrl

    console.log(data.outputs[0].input.data.image.url, 'imgUrl')
    console.log(input, 'INPUT')

    console.log(theImage.width)

    setBox({
      leftCol: clarifaiFace.left_col * theImage.width,
      topRow: clarifaiFace.top_row * theImage.height,
      rightCol: theImage.width - (clarifaiFace.right_col * theImage.width),
      bottomRow: theImage.height - (clarifaiFace.bottom_row * theImage.height),
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
          <button className="w-30 grow f4 link ph3 pv2 dib  pointer" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
