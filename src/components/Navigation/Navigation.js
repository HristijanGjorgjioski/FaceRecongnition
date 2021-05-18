import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
  const pClassNames = 'f3 link dim black underline pa3 pointer'

  const { currentUser, logout } = useAuth()

  console.log(currentUser)

  return (
    <div>
     {currentUser ? 
       <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
         <p className={pClassNames} onClick={() => logout()}>
           Sign Out
         </p>
       </nav>
     : 
       <div>
         <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
           <p className={pClassNames}>
             <Link style={{ textDecoration: 'none', color: 'black' }} to="/signin">Sign In</Link>
           </p>
           <p className={pClassNames}>
             <Link style={{ textDecoration: 'none', color: 'black' }} to="/register">Register</Link>
           </p>
         </nav>
       </div>}
    </div>
  )
}

export default Navigation
