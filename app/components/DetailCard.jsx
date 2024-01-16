// DetailCard.js

import React from 'react';
import styles from './DetailCard.module.scss';

const DetailCard = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </div>
  );
};

export default DetailCard;
