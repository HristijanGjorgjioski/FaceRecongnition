import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const Register = () => {
  const inputClassNames = 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
  const articleClassNames = 'br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center'

  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')  
    } catch (error) {
      setError('Check if your email and password are valid. Password must have 6 charachters')
    }

    setLoading(false)
  }

  return (
    <article className={articleClassNames}>
      <main className="pa4 black-80">
        {error && <h4>{error}</h4>}
        <form onSubmit={handleSubmit} className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className={inputClassNames} type="text" required ref={nameRef} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className={inputClassNames} type="email" required ref={emailRef} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className={inputClassNames} type="password" required ref={passwordRef} />
            </div>
          </fieldset>
          <div className="">
            <button className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" disabled={loading}>
              Register
            </button>
          </div>
        </form>
      </main>
    </article>
  )
}

export default Register
