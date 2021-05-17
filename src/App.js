import React from 'react'

// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import ParticleComponent from './components/Particles/Particles';

const App = () => {
    return (
      <div className="App">
        <ParticleComponent />
          <div>
            <Logo />
            <ImageLinkForm />
            <FaceRecognition />
          </div>
      </div>
    )
}

export default App;
