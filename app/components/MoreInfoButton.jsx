'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import styles from './MoreInfoButton.module.scss'

const MoreInfoButton = ({id,title}) => {
  const router = useRouter()

  function handleRoute(){
    router.push(`movies/${id}`);
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} aria-label={`More info about ${title}`} onClick={handleRoute}><div className={styles.circle}>i</div>More info</button>
    </div>
  );
};

export default MoreInfoButton;