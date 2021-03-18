import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../nav/nav';
import Header from '../header/header';
import './layout.css';

const Layout = ({ children, pageTitle }) => (
  <>
    <Nav />
    <Header pageTitle={pageTitle} />
    <main className="main">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
};

export default Layout;
