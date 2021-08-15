import React from 'react'
import styles from './projects.module.css'

const ProjectCard = ({ contentSide, title, description, img, color, url }) => {
  if (contentSide === "left") return (
    <div className={styles.projectCardContainer} style={{ backgroundColor: color }}>
      <div className={styles.projectCardContentContainer}>
        <h3 className={styles.projectCardTitle}>{title}</h3>
        <p className={styles.projectCardDescription}>{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className={styles.projectCardBtn} style={{ backgroundColor: color }}>Visit Project</a>
      </div>
      <div className={styles.projectCardImgContainer}>
        <img className={styles.projectCardImg} src={img} alt="" />
      </div>
    </div>
  )

  if (contentSide === "right") return (
    <div className={styles.projectCardContainer} style={{ backgroundColor: color }}>
      <div className={styles.projectCardImgContainer}>
        <img className={styles.projectCardImg} src={img} alt="" />
      </div>
      <div style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0",  }} className={styles.projectCardContentContainer}>
        <h3 className={styles.projectCardTitle}>{title}</h3>
        <p className={styles.projectCardDescription}>{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className={styles.projectCardBtn} style={{ backgroundColor: color }}>Visit Project</a>
      </div>
  </div>
  )
}

export default ProjectCard