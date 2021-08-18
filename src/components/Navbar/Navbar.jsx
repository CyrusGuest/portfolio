import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import styles from './navbar.module.css';

const Navbar = ({ toggleSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  let history = useHistory();

  const changeNav = () => {
    if (window.scrollY >= 900 && window.scrollY <= 1870) {
      setScrollNav(true);
    } else if (window.scrollY < 900) {
      setScrollNav(false);
    } else if (window.scrollY > 1870 && window.scrollY <= 3050) {
      setScrollNav(false);
    } else {
      setScrollNav(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop({ duration: 500 });
  }

  const redirect = () => {
    history.push('/contact');
  }

  if (!scrollNav) return (
    <nav>
      <div onClick={toggleHome} className={styles.logo}>Cyrus Guest</div>
      <div onClick={toggleSidebar} className={styles.mobileIcon}>
        <FaBars />
      </div>
      <ul className={styles.navLinksContainer}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="about" smooth={true} duration={500} spy={true} exact="true">About me</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="skills" smooth={true} duration={500} spy={true} exact="true">My skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="projects" smooth={true} duration={500} spy={true} exact="true">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="resume" smooth={true} duration={500} spy={true} exact="true">Resume</Link>
        </li>
        <li onClick={redirect} className={styles.navBtn}>
          <p className={styles.navBtnLink}>Contact me</p>
        </li>
      </ul>
    </nav>
  )

  if (scrollNav) return (
    <nav style={{ backgroundColor: "#8cb3a1" }}>
      <div onClick={toggleHome} className={styles.logo} style={{ color: "white" }}>Cyrus Guest</div>
      <div onClick={toggleSidebar} className={styles.mobileIcon}>
        <FaBars color="white" />
      </div>
      <ul className={styles.navLinksContainer} style={{ color: "white" }}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="about" smooth={true} duration={500} spy={true} exact="true">About me</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="skills" smooth={true} duration={500} spy={true} exact="true">My skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="projects" smooth={true} duration={500} spy={true} exact="true">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="resume" smooth={true} duration={500} spy={true} exact="true">Resume</Link>
        </li>
        <li onClick={redirect} className={styles.navBtn} style={{ backgroundColor: "white", color: "black"}}>
          <p className={styles.navBtnLink}>Contact me</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
