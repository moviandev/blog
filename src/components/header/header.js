import React from 'react';

import '../../styles/styles.scss';
import './header.scss';

const Header = ({ pageTitle }) => (
  <div className="header">
    <h1>{pageTitle}</h1>
  </div>
);

export default Header;
