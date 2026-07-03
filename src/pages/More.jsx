import { Link } from "react-router-dom";
import styles from "./More.module.css";

export const More = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>

        <div className={styles.overlay}>

          <span className={styles.tag}>
            MY EDUCATIONAL JOURNEY
          </span>

          <h1>Education & Professional Growth</h1>

          <p>
            My journey in technology has been built through academic excellence,
            continuous learning, practical experience, and a genuine passion for
            solving real-world problems using modern computing technologies.
          </p>

          <Link to="/" className={styles.backButton}>
            ← Back to Home
          </Link>

        </div>

      </section>

      {/* Main Content */}
      <section className={styles.container}>

        {/* Education */}
        <div className={styles.card}>

          <h2>Educational Background</h2>

          <div className={styles.timeline}>

            <div className={styles.item}>
              <h3>St. Patrick Primary School</h3>

              <span>Kenya Certificate of Primary Education (KCPE)</span>

              <p>
                My academic journey began at St. Patrick Primary School,
                where I developed a strong foundation in mathematics,
                sciences, and problem-solving. Through dedication and
                consistent hard work, I attained <strong>365 marks</strong>
                in the KCPE examination, opening the door to further academic
                growth.
              </p>
            </div>

            <div className={styles.item}>
              <h3>Kapenguria Boys High School</h3>

              <span>Kenya Certificate of Secondary Education (KCSE)</span>

              <p>
                I continued my studies at Kapenguria Boys High School in
                West Pokot County. During this period I strengthened my
                analytical thinking, teamwork, leadership, and discipline.
                I successfully completed my KCSE examination with a
                <strong> B (Plain)</strong>, demonstrating consistent
                academic performance.
              </p>
            </div>

            <div className={styles.item}>
              <h3>Jaramogi Oginga Odinga University of Science and Technology</h3>

              <span>Bachelor of Computer Security and Forensics</span>

              <p>
                I am currently pursuing a Bachelor's degree in Computer
                Security and Forensics at JOOUST. My studies focus on
                cybersecurity, ethical hacking, digital forensics,
                networking, secure software development, operating systems,
                and modern computing technologies. The program has allowed
                me to combine theoretical knowledge with practical laboratory
                experience, strengthening my ability to analyze and secure
                information systems.
              </p>
            </div>

          </div>

        </div>

        {/* Technical Skills */}
        <div className={styles.card}>

          <h2>Technical Skills Acquired</h2>

          <div className={styles.skillsGrid}>

            <div className={styles.skill}>JavaScript (ES6+)</div>

            <div className={styles.skill}>React.js</div>

            <div className={styles.skill}>HTML5</div>

            <div className={styles.skill}>CSS3</div>

            <div className={styles.skill}>Responsive Web Design</div>

            <div className={styles.skill}>Modern UI/UX Design</div>

            <div className={styles.skill}>Component-Based Architecture</div>

            <div className={styles.skill}>React Router</div>

            <div className={styles.skill}>Git & GitHub</div>

            <div className={styles.skill}>Computer Networking</div>

            <div className={styles.skill}>Linux Administration</div>

            <div className={styles.skill}>Kali Linux</div>

            <div className={styles.skill}>Nmap</div>

            <div className={styles.skill}>Wireshark</div>

            <div className={styles.skill}>Metasploit Framework</div>

            <div className={styles.skill}>Cybersecurity Fundamentals</div>

            <div className={styles.skill}>Digital Forensics</div>

            <div className={styles.skill}>Graphic Design</div>

          </div>

        </div>

        {/* Professional Development */}
        <div className={styles.card}>

          <h2>Professional Development</h2>

          <p>
            Beyond classroom learning, I continuously dedicate time to
            independent study and practical projects. I build modern web
            applications using React, explore cybersecurity tools through
            Kali Linux, and strengthen my networking knowledge by practicing
            real-world configurations and security concepts. Every project
            I complete helps me improve my technical skills while reinforcing
            best practices in software engineering and cybersecurity.
          </p>

          <p>
            I have also developed a strong appreciation for creating clean,
            responsive, and user-friendly interfaces. Through continuous
            practice, I have learned how to structure scalable React
            applications, implement routing, design reusable components,
            create responsive layouts, and build professional portfolio
            projects that reflect industry standards.
          </p>

        </div>

        {/* Leadership */}
        <div className={styles.card}>

          <h2>Leadership & Teamwork</h2>

          <p>
            In addition to my academic and technical journey, I actively
            serve in the Christian Union Media Team, where I contribute to
            media production, creative design, and digital communication.
            This role has strengthened my teamwork, leadership,
            communication, problem-solving, and project coordination skills,
            enabling me to work effectively within collaborative environments.
          </p>

        </div>

        {/* Career Goals */}
        <div className={styles.card}>

          <h2>Career Aspirations</h2>

          <p>
            My long-term goal is to become a highly skilled cybersecurity
            professional and software engineer capable of designing secure,
            scalable, and innovative digital solutions. I aspire to work in
            areas such as penetration testing, digital forensics, secure
            software development, cloud security, and financial technology,
            where I can contribute to protecting information systems while
            building applications that positively impact society.
          </p>

        </div>

      </section>

    </>
  );
};