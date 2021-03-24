import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../nav/nav';
import Header from '../header/header';

import '../../styles/styles.scss';
import './layout.scss';

const Layout = ({ children, pageTitle }) => (
  <>
    <Nav />
    <div className="global-wrapper">
      <Header pageTitle={pageTitle} />
      <main className="main">{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
};

export default Layout;
