import React from 'react'

import FaceRecognition from './FaceRecognition/FaceRecognition'
import ImageLinkForm from './ImageLinkForm/ImageLinkForm'
import Logo from './Logo/Logo'

const Home = () => {
    return (
        <div>
            <Logo />
            <ImageLinkForm />
            <FaceRecognition />
        </div>
    )
}

export default Home
