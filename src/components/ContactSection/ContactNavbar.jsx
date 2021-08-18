import React from 'react'
import styles from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const ContactNavbar = ({ toggleSidebar }) => {
  let history = useHistory();

  const redirect = () => {
    history.push("/contact");
  };

  return (
    <nav>
      <div className={styles.logo}>Cyrus Guest</div>
      <div onClick={toggleSidebar} className={styles.mobileIcon}>
        <FaBars />
      </div>
      <ul className={styles.navLinksContainer}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/#about">About me</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/#skills">My skills</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/#projects">Projects</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/#resume">Resume</a>
        </li>
        <li onClick={redirect} className={styles.navBtn}>
          <p className={styles.navBtnLink}>Contact me</p>
        </li>
      </ul>
    </nav>
  )
}

export default ContactNavbar
