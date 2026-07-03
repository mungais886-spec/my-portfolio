import { Link } from "react-router-dom";
import styles from "./Networking.module.css";

export const Networking = () => {
  return (
    <>
      {/* HERO */}

      <section className={styles.hero}>

        <div className={styles.overlay}>

          <span className={styles.tag}>
            NETWORKING • INFRASTRUCTURE • CONNECTIVITY
          </span>

          <h1>Computer Networking</h1>

          <p>
            Computer networking forms the backbone of modern communication,
            enabling computers, mobile devices, servers, and cloud platforms
            to exchange information securely and efficiently across the world.
          </p>

          <Link to="/" className={styles.backButton}>
            ← Back to Skills
          </Link>

        </div>

      </section>

      {/* INTRO */}

      <section className={styles.content}>

        <span>Introduction</span>

        <h2>What is Computer Networking?</h2>

        <p>
          Computer networking is the process of connecting computers,
          servers, mobile devices, and other digital equipment so they
          can communicate and share information. It provides the
          infrastructure that allows users to access the internet,
          transfer files, communicate through emails, stream videos,
          and collaborate in real time.
        </p>

        <p>
          Modern organizations rely heavily on networking to support
          business operations, cloud computing, cybersecurity,
          financial systems, healthcare, education, and communication.
          Understanding networking is therefore one of the most
          important skills for every IT and cybersecurity professional.
        </p>

      </section>

      {/* WHY NETWORKING */}

      <section className={styles.section}>

        <h2>Why Networking is Important</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Communication</h3>
            <p>
              Enables people and organizations to exchange information
              instantly across different locations.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Resource Sharing</h3>
            <p>
              Allows multiple users to share printers, files, internet
              connections, storage, and servers.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cloud Computing</h3>
            <p>
              Networking provides access to cloud services including
              AWS, Azure, and Google Cloud.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cybersecurity</h3>
            <p>
              Secure networks protect organizational data from
              unauthorized access and cyber threats.
            </p>
          </div>

        </div>

      </section>

      {/* TYPES */}

      <section className={styles.section}>

        <h2>Types of Networks</h2>

        <div className={styles.cards}>

          <div className={styles.networkCard}>
            <h3>LAN</h3>
            <p>
              A Local Area Network connects devices within a limited
              geographical area such as homes, schools, and offices.
            </p>
          </div>

          <div className={styles.networkCard}>
            <h3>WAN</h3>
            <p>
              A Wide Area Network connects multiple LANs across
              countries and continents. The Internet is the largest WAN.
            </p>
          </div>

          <div className={styles.networkCard}>
            <h3>MAN</h3>
            <p>
              A Metropolitan Area Network connects organizations
              within a city or municipality.
            </p>
          </div>

          <div className={styles.networkCard}>
            <h3>PAN</h3>
            <p>
              A Personal Area Network connects devices around one
              individual using Bluetooth or USB.
            </p>
          </div>

        </div>

      </section>

      {/* DEVICES */}

      <section className={styles.section}>

        <h2>Common Networking Devices</h2>

        <ul className={styles.list}>
          <li>Routers</li>
          <li>Switches</li>
          <li>Firewalls</li>
          <li>Wireless Access Points</li>
          <li>Modems</li>
          <li>Servers</li>
          <li>Network Interface Cards (NIC)</li>
          <li>Repeaters</li>
          <li>Bridges</li>
          <li>Gateways</li>
        </ul>

      </section>

      {/* OSI */}

      <section className={styles.section}>

        <h2>The OSI Model</h2>

        <p>
          The Open Systems Interconnection (OSI) Model is a
          seven-layer framework that explains how data moves from one
          device to another across a network.
        </p>

        <div className={styles.skillsGrid}>

          <div className={styles.skill}>Layer 7 – Application</div>

          <div className={styles.skill}>Layer 6 – Presentation</div>

          <div className={styles.skill}>Layer 5 – Session</div>

          <div className={styles.skill}>Layer 4 – Transport</div>

          <div className={styles.skill}>Layer 3 – Network</div>

          <div className={styles.skill}>Layer 2 – Data Link</div>

          <div className={styles.skill}>Layer 1 – Physical</div>

        </div>

      </section>

      {/* TCP/IP */}

      <section className={styles.section}>

        <h2>TCP/IP Model</h2>

        <p>
          The TCP/IP model is the practical networking model used
          across the Internet. It consists of the Application,
          Transport, Internet, and Network Access layers, enabling
          reliable communication between devices worldwide.
        </p>

      </section>

      {/* PROTOCOLS */}

      <section className={styles.section}>

        <h2>Common Networking Protocols</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>HTTP / HTTPS</h3>
            <p>Used for browsing websites securely.</p>
          </div>

          <div className={styles.card}>
            <h3>DNS</h3>
            <p>Converts domain names into IP addresses.</p>
          </div>

          <div className={styles.card}>
            <h3>DHCP</h3>
            <p>Automatically assigns IP addresses to devices.</p>
          </div>

          <div className={styles.card}>
            <h3>FTP / SFTP</h3>
            <p>Transfers files across networks securely.</p>
          </div>

          <div className={styles.card}>
            <h3>SSH</h3>
            <p>Provides secure remote administration.</p>
          </div>

          <div className={styles.card}>
            <h3>SMTP</h3>
            <p>Responsible for sending email messages.</p>
          </div>

        </div>

      </section>

      {/* SECURITY */}

      <section className={styles.section}>

        <h2>Networking & Cybersecurity</h2>

        <p>
          Networking and cybersecurity are closely connected.
          Understanding network architecture helps security
          professionals identify vulnerabilities, monitor traffic,
          detect attacks, configure firewalls, and secure digital
          infrastructure against unauthorized access.
        </p>

      </section>

      {/* JOURNEY */}

      <section className={styles.section}>

        <h2>My Networking Journey</h2>

        <p>
          Throughout my Computer Security and Forensics studies,
          I have gained practical experience configuring routers,
          switches, VLANs, IP addressing, subnetting, DHCP,
          routing protocols, and firewall configurations using
          Cisco Packet Tracer and laboratory environments.
        </p>

        <p>
          I continue strengthening my networking knowledge because
          it serves as the foundation for cybersecurity,
          penetration testing, cloud computing, and secure
          software development.
        </p>

      </section>

    </>
  );
};