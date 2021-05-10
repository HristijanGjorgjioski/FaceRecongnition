import React, { useEffect, useState } from 'react';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';

const app = new Clarifai.App({
  apiKey: 'a5d94266a9474a5aa1da2b85b3489688',
});

const particleParams = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
};

const App = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [input, setInput] = useState('')
  const [box, setBox] = useState({})
  // const [properties, setProperties] = useState('')
  const [imageHeight, setImageHeight] = useState('')

  /////////////////////////////////////////////
  // const calculateFaceLocation = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  //   const width = Number(input.width)
  //   const height = Number(input.height)
  //   console.log(box)
  //   setImageHeight(height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - clarifaiFace.right_col * width,
  //     bottomRow: height - clarifaiFace.bottom_row * height,
  //   };
  // };
  /////////////////////////////////////////////

  useEffect(() => {
    console.log(box, 'BOX')
  }, [box])

  const onInputChange = (event) => {
    setInput(event.target.value)
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((data) => {
        // setBox(calculateFaceLocation(response))
        setBox(data.outputs[0].data.regions[0].region_info.bounding_box)
        console.log(data, 'responseAPI')
        console.log(box, 'BOX')
      })
      .catch((err) => console.log(err));

    // app.models
    //   .predict(Clarifai.GENERAL_MODEL, input)
    //   .then((response) => {
    //     let names = [];
    //     for (let i in response.outputs[0].data.concepts) {
    //       names.push(response.outputs[0].data.concepts[i].name);
    //     }
    //     setProperties(names);
    //   });
  };

    return (
      <div className="App">
        <Particles className="particles" params={particleParams} />
        {/* <Navigation 
          // isSignedIn={isSignedIn} 
        /> */}
          <div>
            <Logo />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition
              // properties={properties}
              box={box}
              imageUrl={imageUrl}
              imageHeight={imageHeight}
            />
          </div>
          {/* <Signin /> */}
          {/* <Register /> */}
      </div>
    );
}

export default App;
