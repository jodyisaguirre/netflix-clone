'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import styles from './Navbar.module.scss';
 
const NavButton = () => {
  const router = useRouter()

  function handleRoute(){
    router.push('/');
  }

  return (
    <div >
        <button onClick={handleRoute} aria-label='Back to Home'>        
            <img className={styles.netflixLogo} src='/netflix.png' alt='Netflix logo'/>
        </button>
    </div>
  );
};

export default NavButton;