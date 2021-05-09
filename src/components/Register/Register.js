import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const Register = ({ onRouteChange }) => {
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
  }

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <form onSubmit={handleSubmit} className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                required
                ref={nameRef}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                required
                ref={emailRef}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                required
                ref={passwordRef}
              />
            </div>
          </fieldset>
          <div className="">
            <button
              className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            >
              Register
            </button>
          </div>
        </form>
      </main>
    </article>
  )
}

export default Register
