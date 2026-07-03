import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <>
      {/* Hero Section */}

      <section className={styles.hero} id="experience">

        <div className={styles.overlay}>

          <span className={styles.tag}>
            EXPERIENCE • PROJECTS • CONTINUOUS LEARNING
          </span>

          <h1>My Experience</h1>

          <p>
            Throughout my academic journey and personal learning, I have
            developed practical experience in software development,
            cybersecurity, networking, and digital media. Every project has
            strengthened my problem-solving abilities and expanded my technical
            expertise.
          </p>

        </div>

      </section>

      {/* Frontend Experience */}

      <section className={styles.section}>

        <h2>Frontend Development Experience</h2>

        <p>
          I have been actively building modern web applications using JavaScript,
          React, and Vite. My focus is on creating responsive, accessible, and
          visually appealing user interfaces while following modern development
          practices and writing clean, reusable code.
        </p>

        <div className={styles.timeline}>

          <div className={styles.card}>
            <h3>Professional Portfolio Website</h3>

            <span>React • Vite • CSS Modules</span>

            <p>
              Designed and developed a responsive personal portfolio website
              showcasing my education, technical skills, cybersecurity
              knowledge, networking concepts, graphic design experience, and
              software development journey.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Banking Management System</h3>

            <span>React • Modern UI • Financial Systems</span>

            <p>
              Currently developing a modern banking application featuring
              responsive dashboards, authentication, account management,
              transaction history, and financial analytics while focusing on
              scalable frontend architecture.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Interactive React Applications</h3>

            <span>React Hooks • Routing • Components</span>

            <p>
              Built several projects to strengthen my understanding of React
              components, state management, props, routing, reusable layouts,
              responsive design, and user interaction.
            </p>
          </div>

        </div>

      </section>

      {/* Cybersecurity */}

      <section className={styles.section}>

        <h2>Cybersecurity & Digital Forensics</h2>

        <p>
          As a Computer Security and Forensics student, I continuously improve
          my understanding of ethical hacking, vulnerability assessment,
          penetration testing, digital investigations, and secure system
          design. My learning combines academic knowledge with hands-on
          practical exercises.
        </p>

        <div className={styles.grid}>

          <div className={styles.skillCard}>
            <h3>Kali Linux</h3>

            <p>
              Exploring penetration testing tools, ethical hacking techniques,
              reconnaissance, and vulnerability assessment in controlled
              laboratory environments.
            </p>
          </div>

          <div className={styles.skillCard}>
            <h3>Network Security</h3>

            <p>
              Configuring secure networks, understanding firewall concepts,
              routing, switching, VLANs, DHCP, and IP addressing.
            </p>
          </div>

          <div className={styles.skillCard}>
            <h3>Digital Forensics</h3>

            <p>
              Learning evidence acquisition, preservation, forensic analysis,
              and investigation methodologies for cyber incidents.
            </p>
          </div>

          <div className={styles.skillCard}>
            <h3>Security Research</h3>

            <p>
              Studying the OWASP Top 10, secure coding practices, malware
              analysis, and emerging cybersecurity threats.
            </p>
          </div>

        </div>

      </section>

      {/* Networking */}

      <section className={styles.section}>

        <h2>Networking Experience</h2>

        <p>
          Through Cisco Packet Tracer and networking laboratories, I have
          configured routers, switches, VLANs, DHCP services, routing
          protocols, and basic firewall configurations while learning network
          troubleshooting techniques.
        </p>

      </section>

      {/* Graphic Design */}

      <section className={styles.section}>

        <h2>Graphic Design Experience</h2>

        <p>
          I create posters, event banners, social media graphics, flyers,
          presentations, and digital branding materials. My work combines
          creativity with technical knowledge to produce visually engaging
          designs that communicate information effectively.
        </p>

      </section>

      {/* Media Team */}

      <section className={styles.section}>

        <h2>Church Media Team</h2>

        <p>
          As a member of the Christian Union Media Team, I contribute to
          designing promotional materials, event graphics, multimedia content,
          and digital communication that supports ministry activities while
          strengthening teamwork and leadership skills.
        </p>

      </section>

      {/* Skills */}

      <section className={styles.section}>

        <h2>Technologies & Tools</h2>

        <div className={styles.tools}>

          <div>React</div>
          <div>JavaScript</div>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Vite</div>
          <div>Git & GitHub</div>
          <div>Kali Linux</div>
          <div>Nmap</div>
          <div>Wireshark</div>
          <div>Metasploit</div>
          <div>Cisco Packet Tracer</div>
          <div>Photoshop</div>
          <div>Canva</div>
          <div>Figma</div>

        </div>

      </section>

      {/* Future */}

      <section className={styles.section}>

        <h2>Looking Ahead</h2>

        <p>
          My objective is to continue building enterprise-level applications,
          strengthen my cybersecurity expertise, contribute to innovative
          software solutions, and grow into a professional capable of combining
          software engineering, digital security, networking, and creative
          design to solve real-world challenges.
        </p>

      </section>
    </>
  );
};