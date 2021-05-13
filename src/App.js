import React, { useEffect, useState } from 'react'


// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import dimensions from './utils/dimensions';
import ParticleComponent from './components/Particles/Particles';



const App = () => {
  

  /////////////////////////////////////////////
  const calculateFaceLocation = async (data) => {
      const clarifaiFace = await data?.outputs[0]?.data?.regions[0]?.region_info?.bounding_box
      setImageUrl(data.outputs[0].input.data.image.url)

      const imgDimensions = await dimensions(imageUrl)
      const width = imgDimensions.width
      const height = imgDimensions.height
      console.log(data);
      console.log(imgDimensions)
      return setBox({
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height),
      })
  }
  /////////////////////////////////////////////

  useEffect(() => {
    console.log(box)
  }, [box])

  const onInputChange = (event) => {
    setInput(event.target.value)
  };

  const onButtonSubmit = async () => {
    const data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    calculateFaceLocation(data)
  };

    return (
      <div className="App">
        <ParticleComponent />
        
          <div>
            <Logo />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition
              box={box}
              imageUrl={imageUrl}
            />
          </div>
          
      </div>
    )
}

export default App;
