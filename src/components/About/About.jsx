import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <div className={styles.break}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>About me</h1>
        <p className={styles.textContent}>I started my software developement journey in 2019 at the age of 13. I’m born and rasied from Massachusetts, USA. My passion for this field was ignited by my father, and has lived in me ever since. Over the course of my time in the programming community I’ve amassed a great understanding of a pleathera of technologies.</p>
        <button className={styles.resumeBtn}>My resume</button>
      </div>
    </div>
  )
}

export default About
