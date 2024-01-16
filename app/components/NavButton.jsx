'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import styles from './Navbar.module.scss';
 

const HomeButton = () => {
  const router = useRouter()

  function handleRoute(){
    router.push(`/`);
  }

  return (
    <div >
        <button onClick={handleRoute}>        
            <img className={styles.netflixLogo}src='/netflix.png'/>
        </button>
    </div>
  );
};

export default HomeButton;