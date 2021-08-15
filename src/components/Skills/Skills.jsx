import React from 'react'
import styles from './skills.module.css';
import SkillCard from './SkillCard';
import reactImg from '../../images/react.png';
import cssImg from '../../images/css.png';
import htmlImg from '../../images/html.png';
import mongoImg from '../../images/mongo.png';
import nodeImg from '../../images/node.png';
import postgresImg from '../../images/postgres.png';
import reduxImg from '../../images/redux.png';
import figmaImg from '../../images/figma.png';

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id="skills">
      <h1 className={styles.title}>My skills</h1>
      <div className={styles.skillCardsContainer}>
        <SkillCard img={reactImg} skillName="React" color="#61DBFB" skillCardText="React has been a phenomenal tool for building out frontend applications." />
        <SkillCard img={reduxImg} skillName="Redux" color="#7749BD" skillCardText="Redux is a fantastic state-mangement tool for larger applications." />
        <SkillCard img={nodeImg} skillName="Node" color="#539E43" skillCardText="Node is essential for almost all my apps, serving as the foundation for the backend." />
        <SkillCard img={postgresImg} skillName="PostgreSQL" color="#336791" skillCardText="Postgres is an oustanding table based database and inspired me to learn SQL." />
        <SkillCard img={mongoImg} skillName="MongoDB" color="#81C563" skillCardText="MongoDB is an amazing document based database for anyone who doesn’t know SQL." />
        <SkillCard img={htmlImg} skillName="HTML" color="#E44D26" skillCardText="HTML is the most basic building block for any webpage." />
        <SkillCard img={cssImg} skillName="CSS" color="#379AD6" skillCardText="CSS, although extremely tedius, is a powerful way to style any web page." />
        <SkillCard img={figmaImg} skillName="Figma" color="#353535" skillCardText="Even though I am a bit of a beginner, Figma has been imperrative for my UI Design journey." />
      </div>
    </div>
  )
}

export default Skills
