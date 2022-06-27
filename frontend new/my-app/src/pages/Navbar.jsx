import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/register/add" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login/add" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/table" className="nav-link">Table</Link>
              </li>
            </ul>
        </div>
      </div>
    </nav>  
  )
}

export default Navbar