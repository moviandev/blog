import React from 'react';
import { Link } from 'gatsby';

import '../../styles/styles.scss';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/about">About me</Link>
    <Link activeClassName="active" to="/contact">Contact</Link>
  </nav>
);

export default Nav;
