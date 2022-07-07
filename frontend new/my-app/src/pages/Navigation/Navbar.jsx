import { Button } from '../../components';
import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'; // same Link

import { AuthContext } from '../../context/auth-context';


function Navbar() {
  const auth = useContext(AuthContext);

  return (
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand mt-1">Home</NavLink>
  
          <div className="collpase navbar-collapse">
              <ul className="navbar-nav mt-1">
                {!auth.isLoggedIn && (
                  <li>
                    <NavLink to="/register/add" className="navbar-brand">Register</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/login/add" className="navbar-brand">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/table" className="navbar-brand">Table</NavLink>
                </li>
                {auth.isLoggedIn && (  
                <li>
                  <NavLink to={`/table/${auth.userId}`} className="navbar-brand">Add-Row</NavLink>
                </li>
                )}
          
              </ul>
              {auth.isLoggedIn && (
                  <Button buttonHeader onClick={auth.logout}>LOGOUT</Button>
              )}
          </div>
        </div>

  )
}

export default Navbar