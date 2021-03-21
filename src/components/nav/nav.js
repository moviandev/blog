import React from 'react';
import { Link } from 'gatsby';

import '../../styles/styles.scss';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #005a70" }} to="/">Home</Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #005a70" }} to="/about">About me</Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #005a70" }} to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
