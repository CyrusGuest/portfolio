import React from 'react'
import styles from './contact.module.css';
import githubImg from '../../images/github.png';
import twitterImg from '../../images/twitter.png';

const ContactSection = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact me</h1>
      <div className={styles.infoContainer}>
        <h3 className={styles.infoTitle}><strong>Feel free to contact me using any of the following ways:</strong></h3>
        <div className={styles.infoImgsContainer}>
          <a className={styles.infoImgLink} target="_blank" rel="noreferrer" href="https://www.github.com/cyrusfps">
            <img className={styles.infoImg} src={githubImg} alt="Github Logo" />
          </a>
          <a className={styles.infoImgLink} target="_blank" rel="noreferrer" href="https://www.twitter.com/cyrusfps">
            <img className={styles.infoImg} src={twitterImg} alt="Twitter Logo" />
          </a>
        </div>
        <h3 className={styles.infoLine}><strong>Email</strong> - Cyrus.t.guest@gmail.com</h3>
        <h3 className={styles.infoLine}><strong>Github</strong> - CyrusFPS</h3>
        <h3 className={styles.infoLine}><strong>Discord</strong> - Cyrus#8554</h3>
        <h3 className={styles.infoLine}><strong>Twitter</strong> - @CyrusFPS</h3>
      </div>
    </div>
  )
}

export default ContactSection
