import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const Signin = () => {
  const inputClassNames = 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
  const articleClassNames = 'br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center'

  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()


  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (error) {
      setError('Invalid email or password');
    }
    
    setLoading(false)
  }

  return (
    <article className={articleClassNames}>
      <main className="pa4 black-80">
        {error && <h4>{error}</h4>}
        <form onSubmit={handleSubmit} className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className={inputClassNames} type="email" ref={emailRef} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className={inputClassNames} type="password" ref={passwordRef} />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" disabled={loading} />
          </div>
        </form>
      </main>
    </article>
  )
}

export default Signin
