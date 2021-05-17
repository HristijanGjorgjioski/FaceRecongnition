import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import Home from './components/Home/Home'
import ParticleComponent from './components/Particles/Particles'

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <ParticleComponent />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App
