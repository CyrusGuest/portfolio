import React from 'react'
import styles from './projects.module.css'
import ProjectCard from './ProjectCard';
import puppeteerLogo from '../../images/puppeteer.png';
import cssLogo from '../../images/css3.png';
import reactLogo from '../../images/react.png';

const Projects = () => {
  return (
    <div className={styles.projectSectionContainer} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectCardsContainer}>
        <ProjectCard url="https://github.com/CyrusFPS/amazon-bot" contentSide="left" title="Amazon bot with Puppeteer" img={puppeteerLogo} color="#8188A3" description="This was a small project I started out of curiosity, and morphed into something with real world use. The goal was to create an app that could help users track product prices and automatically purchase them." />
        <ProjectCard url="https://github.com/CyrusFPS/task-manager" contentSide="right" title="Basic task manager" img={cssLogo} color="#85BDFF" description="The basic task manager was a small project that I created to help me learn and fundamentally understand CSS grid. It helped progress my knowledge of CSS and helped grow me into the developer I am today." />
        <ProjectCard url="https://github.com/CyrusFPS/grocerylist-app" contentSide="left" title="Family grocery list app" img={reactLogo} color="#424242" description="I began developement on this app to learn React Native. I haven’t finished it, and might not ever, but it was an amazing introduction into mobile app developement. I certainly plan to do more React Native developement." />
      </div>
    </div>
  )
}

export default Projects