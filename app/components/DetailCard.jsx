import React from 'react';
import styles from './DetailCard.module.scss';
import MoreInfoButton from './MoreInfoButton';

const DetailCard = ({ title, image,id }) => {

  return (
    <div className={styles.card} role='article' aria-label={`Movie Card: ${title}`}>
      <img src={image} alt={title} className={styles.cardImage}/>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <MoreInfoButton id={id} title={title}/>
    </div>
  );
};

export default DetailCard;
