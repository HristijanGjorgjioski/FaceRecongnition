import axios from 'axios';
import React, { useState } from 'react';

const Register = ({ onRouteChange }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    msg: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.password.length < 4) {
      onRouteChange('register');
      return userData.msg.push('Password must contain at least 4 characters');
    } else if (userData.name.length < 4) {
      userData.msg.splice(0, 1);
      onRouteChange('register');
      return userData.msg.push('Name must contain at least 4 characters');
    } else {
      console.log(userData.name, userData.password, 'else');
      onRouteChange('signin');
      return axios.post('http://localhost:5000/register', userData);
    }
  };

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
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
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
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
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
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
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
          {userData.msg.length > 0 ? <h4>{userData.msg[0]}</h4> : <div></div>}
        </form>
      </main>
    </article>
  );
};

export default Register;
