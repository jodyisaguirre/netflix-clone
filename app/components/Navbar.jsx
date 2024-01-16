// components/Navbar.js

import React from 'react';
import styles from './Navbar.module.scss';
import NavButton from './NavButton';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <NavButton/>
    </nav>
  );
};

export default Navbar;
