import React, { useState } from 'react';

const Signin = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    msg: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <form onSubmit={handleSubmit} className="measure" method="POST">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => {}}
              href="#0"
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
          {userData.msg.length > 0 ? <h4>{userData.msg[0]}</h4> : <div></div>}
        </form>
      </main>
    </article>
  );
};

export default Signin;
