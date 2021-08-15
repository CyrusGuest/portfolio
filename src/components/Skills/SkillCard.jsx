import React from 'react'
import styles from './skills.module.css';

const SkillCard = ({ img, skillName, skillCardText, color }) => {
  return (
    <div className={styles.skillCardContainer} style={{ backgroundColor: color }}>
      <div className={styles.skillCardImgContainer}>
        <img className={styles.skillCardImg} src={img} alt=""/>
      </div>
      <div className={styles.skillCardContentContainer}>
        <h4 className={styles.skillCardName}>{skillName}</h4>
        <p className={styles.skillCardText}>{skillCardText}</p>
      </div>
    </div>
  )
}

export default SkillCard
