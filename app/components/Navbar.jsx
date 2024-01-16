// components/Navbar.js

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
            <a className={styles.navbarLink}>Home</a>
        </li>
        <li className={styles.navbarItem}>
            <a className={styles.navbarLink}>About</a>
        </li>
        <li className={styles.navbarItem}>
            <a className={styles.navbarLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
