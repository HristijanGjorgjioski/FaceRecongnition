import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'

import './index.css'

import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ImageProvider } from './context/ImageContext'

ReactDOM.render(
    <AuthProvider>
        <ImageProvider>
            <App />
        </ImageProvider>
    </AuthProvider>,
    document.getElementById('root')
)
