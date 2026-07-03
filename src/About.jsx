import { Link } from "react-router-dom"

import styles from "./About.module.css"

export const About = ({button2Text}) => {
  return (
    <>
    <section className={styles.about} id="about">

      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.imageWrapper}>

            <div className={styles.card}>
              <img src="/sam.jpeg" alt="Samson" />
            </div>

          </div>
        </div>

        <div className={styles.right}>

          <span className={styles.tag}>
            ABOUT ME
          </span>

          <h1>
            Meet Samson
          </h1>

          

          <div className={styles.aboutText}>

            <p>
              I am Samson Mungai, a dedicated Computer Security and
              Forensics student at Jaramogi Oginga Odinga University
              of Science and Technology (JOOUST) with a strong passion
              for technology, innovation, and digital security.
              My journey in tech is driven by curiosity and a commitment
              to understanding how systems work, how they can be protected,
              and how technology can create meaningful impact.
            </p>

            <p>
              I have developed practical experience in JavaScript and React,
              building interactive and responsive web applications while
              continuously improving my software development skills.
              Alongside development, I actively explore cybersecurity concepts
              and gain hands-on exposure to Kali Linux tools to strengthen my
              understanding of security testing, system analysis, and ethical
              security practices.
            </p>

            <p>
              Beyond programming and security, I have a growing interest in
              Computer Networking and Graphic Design, where I enjoy combining
              technical precision with visual creativity.
            </p>

            <p>
              I also serve in the CU Media Team, contributing through creative
              media and digital communication while developing collaboration,
              leadership, and content creation skills.
            </p>

            <p>
              My goal is to keep learning, create secure and impactful
              solutions, and grow into a technology professional who bridges
              innovation, security, and creativity.
            </p>

          </div>



        </div>

      </div>

      <div className={styles.buttonContainer}>
        <Link to="/More" className={styles.button}>
                {button2Text}
          </Link>
      </div>

    </section>

    </>
  )
}