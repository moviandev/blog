import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../nav/nav';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main className="main">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
