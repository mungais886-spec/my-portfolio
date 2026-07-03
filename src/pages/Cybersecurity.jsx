import styles from "./cybersecurity.module.css";
import { Link } from "react-router-dom";

export const Cybersecurity = () => {
  return (
    <>
      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>

          <span className={styles.tag}>
            CYBER SECURITY
          </span>

          <h1>
            Cybersecurity Fundamentals
          </h1>

          <p>
            Protecting digital infrastructure through ethical security
            practices, secure networking, vulnerability assessment,
            digital forensics, and continuous learning.
          </p>

          <a href="#aboutCyber" className={styles.heroButton}>
            Explore My Journey
          </a>

        </div>

      </section>

      <section className={styles.about} id="aboutCyber">

        <div className={styles.aboutContainer}>

          <div className={styles.imageSide}>

            <img
              src="/security.png"
              alt="Cyber Security"
            />

          </div>

          <div className={styles.textSide}>

            <span className={styles.sectionTag}>
              ABOUT CYBERSECURITY
            </span>

            <h2>
              Securing The Digital World
            </h2>

            <p>
              Cybersecurity focuses on protecting computers, networks,
              software, and digital information against cyber threats.
              As technology becomes increasingly interconnected,
              cybersecurity plays a critical role in ensuring
              confidentiality, integrity, and availability of information.
            </p>

            <p>
              My interest in cybersecurity continues to grow through
              practical learning in networking, Linux environments,
              ethical hacking concepts, vulnerability analysis,
              penetration testing methodologies, and digital forensics.
            </p>

          </div>

        </div>

      </section>
      <section className={styles.domains}>

        <h2>Core Security Domains</h2>

        <div className={styles.cardGrid}>

          <div className={styles.card}>
            <h3>Network Security</h3>
            <p>
              Protecting routers, switches, firewalls, VPNs,
              and communication channels against attacks.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Application Security</h3>
            <p>
              Designing secure software by preventing
              vulnerabilities during development.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cloud Security</h3>
            <p>
              Protecting cloud applications,
              services and stored data.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Digital Forensics</h3>
            <p>
              Investigating digital evidence,
              cyber incidents and compromised systems.
            </p>
          </div>

        </div>

      </section>
<section className={styles.encryption}>

  <div className={styles.encryptContainer}>

    <div className={styles.encryptText}>

      <span className={styles.sectionTag}>
        DATA PROTECTION
      </span>

      <h2>
        Understanding Encryption
      </h2>

      <p>
        Encryption is one of the most fundamental concepts in cybersecurity.
        It protects sensitive information by converting readable data
        (plaintext) into unreadable ciphertext using mathematical algorithms.
        Only users possessing the correct cryptographic key can decrypt and
        access the original information.
      </p>

      <p>
        Modern organizations rely on encryption to secure financial
        transactions, online banking, email communication, cloud storage,
        digital identities, and confidential business information. Without
        encryption, sensitive data could easily be intercepted and exploited
        by attackers.
      </p>

      <p>
        Common encryption standards include AES for protecting stored data,
        RSA for secure key exchange, and TLS protocols that encrypt data
        transmitted across the Internet.
      </p>

    </div>

    <div className={styles.encryptCards}>

      <div className={styles.encryptCard}>
        <h3> Symmetric Encryption</h3>

        <p>
          Uses a single secret key for both encryption and decryption.
          It is extremely fast and commonly used to protect files,
          databases, and storage devices.
        </p>
      </div>

      <div className={styles.encryptCard}>
        <h3>Asymmetric Encryption</h3>

        <p>
          Uses a pair of keys—a public key for encryption and a private
          key for decryption. This approach is widely used in HTTPS,
          digital certificates, and secure communication.
        </p>
      </div>

      <div className={styles.encryptCard}>
        <h3>End-to-End Encryption</h3>

        <p>
          Ensures that messages remain encrypted from the sender to the
          intended recipient, preventing intermediaries from reading the
          transmitted information.
        </p>
      </div>

      <div className={styles.encryptCard}>
        <h3>Why Encryption Matters</h3>

        <p>
          Encryption safeguards privacy, protects financial systems,
          secures online identities, and maintains trust in today's
          digital world.
        </p>
      </div>

    </div>

  </div>

</section>

      <section className={styles.toolsSection}>

        <h2>Security Tools I'm Learning</h2>

        <div className={styles.tools}>

          <div>Kali Linux</div>

          <div>Nmap</div>

          <div>Wireshark</div>

          <div>Metasploit</div>

          <div>Burp Suite</div>

          <div>OWASP Top 10</div>

          <div>Linux</div>

          <div>VirtualBox</div>

        </div>

      </section>

      <section className={styles.projects}>

        <h2>Featured Security Projects</h2>

        <div className={styles.projectGrid}>

          <div className={styles.projectCard}>

            <img
              src="/Password.png"
              alt="Password Checker"
            />

            <h3>Password Strength Checker</h3>

            <p>
              Analyze password strength using modern
              validation techniques and security rules.
            </p>

            <button>Coming Soon</button>

          </div>

          <div className={styles.projectCard}>

            <img
              src="/network.png"
              alt="Network Dashboard"
            />

            <h3>Network Monitoring Dashboard</h3>

            <p>
              Monitor network traffic and visualize
              communication between devices.
            </p>

            <button>Coming Soon</button>

          </div>

          <div className={styles.projectCard}>

            <img
              src="/bank.png"
              alt="Bank Security"
            />

            <h3>Secure Banking Portal</h3>

            <p>
              Demonstrating authentication,
              authorization and secure transactions.
            </p>

            <button>Coming Soon</button>

          </div>

        </div>

      </section>

      <section className={styles.stats}>

        <div className={styles.statCard}>
          <h1>15+</h1>
          <span>Security Labs</span>
        </div>

        <div className={styles.statCard}>
          <h1>20+</h1>
          <span>Networking Exercises</span>
        </div>

        <div className={styles.statCard}>
          <h1>100%</h1>
          <span>Ethical Learning</span>
        </div>

        <div className={styles.statCard}>
          <h1>∞</h1>
          <span>Continuous Growth</span>
        </div>

      </section>

      <section className={styles.journey}>

        <div className={styles.journeyCard}>

          <h2>My Learning Journey</h2>

          <p>
            As a Computer Security and Forensics student,
            I continuously build practical experience by
            exploring Linux environments, networking,
            penetration testing concepts, secure software
            development, and digital investigations.
          </p>

          <div className={styles.interests}>

            <span>Ethical Security</span>

            <span>Networking</span>

            <span>Linux</span>

            <span>Digital Forensics</span>

            <span>Secure Coding</span>

            <span>Continuous Learning</span>

          </div>

        </div>

      </section>

      <section className={styles.cta}>

        <h2>Interested in My Cybersecurity Journey?</h2>

        <p>
          Explore the rest of my portfolio to see how I combine
          secure software development, networking knowledge,
          and modern web technologies to create reliable solutions.
        </p>

        <Link to="/#skills" className={styles.backButton}>
          ← Back to Skills
        </Link>

      </section>
    </>
  );
};