import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.png';

const Navbar = () => (
  <header>
    <nav className="page-navbar">
      <h1>
        <img src={logo} alt="logo" />
        Space Travelers&#8216; Hub
      </h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" activeclassname="active">Rockets</NavLink>
        </li>

        <li>
          <NavLink to="/missions" activeclassname="active">Missions</NavLink>
        </li>

        <li>
          <NavLink to="/profile" activeclassname="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
