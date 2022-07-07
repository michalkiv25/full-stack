import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navbar from './Navbar';
import './MainNav.css';


function MainNav() {
  return (
    <React.Fragment>
        <MainHeader>
        <h1>
          <Link to="/">
            <img 
                className='img-header'
                src='https://img.freepik.com/free-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg?w=2000'
                alt="CRM img"
            />
          </Link>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Navbar/>
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNav