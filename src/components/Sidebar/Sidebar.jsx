import React from 'react'
import styles from './sidebar.module.css'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  if (isOpen) return (
    <aside onClick={toggleSidebar} className={styles.sidebarContainer} style={{ opacity: "100%", top: 0 }}>
      <div onClick={toggleSidebar} className={styles.icon}>
        <FaTimes color="white"/>
      </div>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarMenu}>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="about">About me</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="skills">My skills</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="projects">Projects</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="resume">Resume</Link>
        </ul>
      </div>
    </aside>
  )
  
  return (
    <aside onClick={toggleSidebar} className={styles.sidebarContainer} >
      <div onClick={toggleSidebar} className={styles.icon}>
        <FaTimes color="white"/>
      </div>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarMenu}>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="about">About me</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="skills">My skills</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="projects">Projects</Link>
          <Link className={styles.sidebarLink} onClick={toggleSidebar} to="resume">Resume</Link>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
