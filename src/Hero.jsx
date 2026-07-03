import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">

      <div className={styles.container}>

        <div className={styles.content}>

          <span className={styles.tag}>
            COMPUTER SECURITY • DEVELOPMENT
          </span>

          <h2>
            Building Secure Digital Experiences
            Through Code & Cyber Intelligence
          </h2>
          <div className={styles.aboutText}>

             <p className={styles.intro}>
               <span>Hi, I'm Samson Mungai</span> a passionate Computer
                 Security and Forensics student at Jaramogi Oginga
                  Odinga University of Science and Technology (JOOUST). 
                  I enjoy combining secure development practices, modern web technologies,
                   and creative problem-solving to build meaningful digital 
                experiences while exploring the evolving world of cybersecurity.</p>

          <p>
            Computer Security & Forensics Student |
            React Developer |
            Cybersecurity Enthusiast |
            Creative Media Innovator
          </p>
        </div>
         


          <div className={styles.buttons}>

            <button className={styles.primaryBtn}>
              View Projects
            </button>

            <button className={styles.secondaryBtn}>
              Contact Me
            </button>

          </div>

        </div>

        <div className={styles.imageBox}>
          <img src="/profile.jpeg" alt="Samson Mungai" />
        </div>

      </div>

    </section>
  )
}