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
        <button aria-label='More Info' onClick={handleRoute}>        
            <img className={styles.netflixLogo}src='/netflix.png'/>
        </button>
    </div>
  );
};

export default NavButton;