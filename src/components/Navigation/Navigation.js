import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => {}}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className="f3 link dim black underline pa3 pointer">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/signin">Sign In</Link>
          </p>
          <p className="f3 link dim black underline pa3 pointer">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/register">Register</Link>
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
