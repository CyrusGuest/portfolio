import React from "react";
import styles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import puppeteerLogo from "../../images/puppeteer.png";
import jadedprintsLogo from "../../images/jadedprints.webp";
import SADDLogo from "../../images/SADD.png";

const Projects = () => {
  return (
    <div className={styles.projectSectionContainer} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectCardsContainer}>
        <ProjectCard
          repoUrl="https://github.com/CyrusGuest/jadedprints/"
          url="https://jadedprints.com"
          contentSide="left"
          title="Ecommerce store w/ analytics"
          img={jadedprintsLogo}
          color="#443f47"
          description="This is the largest project I've ever made. It's an ecommerce store that uses stripe to process payments. Google analytics is integrated aswell to track data such as conversion rates. The design, code, and products were all made by me. Technologies used include - Stripe, ReactJS, TailwindCSS, DigitalOcean, NodeJS, Express, Figma, Axios, and more."
          live={true}
        />
        <ProjectCard
          repoUrl="https://github.com/CyrusGuest/SADD-website"
          url="https://hopedalesadd.org"
          contentSide="right"
          title="SADD Website"
          img={SADDLogo}
          color="#5167df"
          description="After spending a year with my local SADD (Students Against Destructive Decisions) chapter in school, I thought that I could greatly aid them in their goals by providing a website. Made withr ReactJS, TailwindCSS, Figma, and more, the website helped me learn aswell as aided the community. The SADD chapter still exists on without me at Northbridge Highschool."
          live={true}
        />
        <ProjectCard
          repoUrl="https://github.com/CyrusFPS/doctordetector"
          contentSide="left"
          title="Primary Care Doctor Search"
          img={puppeteerLogo}
          color="#424242"
          description="My dad texted me one day saying he had a real-world solution that he wanted me to solve. He couldn't get a primary care doctor. So, I developed a web-scraping bot that checks his medical-group's search for any primary care doctors accepting new patients. When one is found, it emails him and he'll be the first one to call to get the doctor."
        />
      </div>
    </div>
  );
};

export default Projects;
