import React from 'react'
import { useHistory } from 'react-router'
import styles from './main.module.css'

const Main = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/contact');
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.greetingsContainer}>
        <h1 className={styles.title}>Hi, i'm Cyrus</h1>
        <h4 className={styles.subtitle}>Full stack web developement<br></br>and consistently expanding my horizons!</h4>
        <button onClick={redirect} className={styles.contactBtn}>Contact me</button>
      </div>
    </div>
  )
}

export default Main
