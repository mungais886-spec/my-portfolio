import { Link } from "react-router-dom"
import styles from "./Kali.module.css"

export const Kali = () =>{
    return(
        <>
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <h1>Kali linux</h1>

                <div className={styles.buttonContainer}>
                    <Link to="/" className={styles.backButton}>
                        ← Back to Skills
                    </Link>
                </div>
                <p>PENETRATION TESTING • ETHICAL HACKING • SECURITY RESEARCH</p>         
            </div>
        </section>

        <section className={styles.content}>
            <span>Introduction</span>

            <h2>What is Kali linux?</h2>

            <p>Kali Linux is a Debian-based Linux distribution developed specifically
        for cybersecurity professionals and ethical hackers. Maintained by
        Offensive Security, it comes preloaded with hundreds of carefully
        selected security tools designed for penetration testing, vulnerability
        assessment, wireless security, digital forensics, reverse engineering,
        password auditing, web application testing, and network analysis.
        </p>

        <p>
            Unlike traditional operating systems that focus on everyday computing,
        Kali Linux is purpose-built for security assessment and research.
        Security professionals use it to simulate real-world cyberattacks in
        controlled environments, helping organizations discover weaknesses
        before malicious attackers can exploit them. Through responsible and
        authorized testing, Kali Linux plays a critical role in improving the
        resilience of modern information systems.
        </p>

        <p>
             Learning Kali Linux is not simply about mastering hacking tools; it is
        about understanding security principles, following ethical standards,
        and applying technical knowledge to protect networks, applications,
        and digital infrastructure. When used responsibly, it becomes one of
        the most powerful platforms for building practical cybersecurity skills.
        </p>
        </section>

        <section className={styles.details}>
            <h2>Why use Kali?</h2>
            <p>
                Kali Linux is designed to provide cybersecurity professionals with a complete environment for 
                security assessment, penetration testing, and digital investigations. Instead of installing 
                numerous security applications individually, Kali Linux comes equipped with a 
                carefully curated collection of tools that simplify security testing and research
            </p>

            <p>
                Organizations around the world use Kali Linux to identify weaknesses before attackers can exploit them. 
                By performing authorized security assessments, professionals can evaluate the strength of networks, applications,
                 wireless systems, and operating systems while recommending appropriate security improvements.
            </p>

            <p>
                Beyond professional penetration testing, Kali Linux is an excellent platform for students and aspiring cybersecurity experts.
                 It provides hands-on experience with industry-standard tools, enabling learners to understand how cyberattacks occur, 
                 how vulnerabilities are discovered,
                 and how effective security controls can be implemented to defend digital infrastructure.
            </p>

            <p>
                When used ethically and within legal boundaries, Kali Linux becomes an invaluable resource for improving security awareness, 
                developing practical technical skills, and preparing for careers in cybersecurity.
            </p>
        </section>

        <section className={styles.tools}>
            <h2>Popular Kali linux Tools</h2>
            <div className={styles.nmapWrapper}>
            <div className={styles.nmap}>
                <h2>Nmap</h2>
                <div className={styles.nmapImage}>
                    <img src="/nmap.png" alt="nmap" />
                </div>
            </div>
            <div className={styles.detailsNmap}>
                <p>
                    Nmap is one of the first tools I explored while learning cybersecurity because it provides
                    valuable insight into how networks operate. It is a powerful network discovery and security
                     auditing tool used to identify active devices,
                    detect open ports, discover running services, and determine operating system information.
                </p>
            </div>
            </div>

            <div className={styles.wiresharkWrapper}>
                <div className={styles.wireshark}>
                    <h2>Wireshark</h2>
                    <div className={styles.wiresharkImage}>
                        <img src="/wireshark.png" alt="wireshack" />
                    </div>
                </div>
                <div className={styles.wiresharkDetails}>
                    <p>
                        Wireshark is a network protocol analyzer that captures and 
                        examines network traffic in real time. It allows security professionals
                         to inspect individual packets traveling across a network,
                         making it an invaluable tool for troubleshooting, monitoring, 
                         and investigating suspicious activity.
                    </p>

                    <p>
                        Working with Wireshark has improved my understanding of how data moves between devices,
                         how different network protocols communicate, and how abnormal traffic 
                         patterns may indicate security issues. It has also reinforced
                         the importance of packet analysis in network diagnostics and incident investigations.
                    </p>
                </div>
            </div>

            <div className={styles.metasploitWrapper}>
                <div className={styles.metasploit}>
                    <h2>Metasploit Framework</h2>
                    <div className={styles.metasploitImage}>
                        <img src="/metasploit.png" alt="metasploit framework" />
                    </div>
                </div>
                <div className={styles.metasploitDetails}>
                    <p>
                        The Metasploit Framework is a penetration testing platform used to validate security 
                        vulnerabilities in controlled environments. Rather than attacking systems indiscriminately, 
                        it enables authorized security professionals to 
                        safely simulate attacks in order to understand how vulnerabilities can be exploited.
                    </p>

                    <p>
                        Learning about Metasploit has helped me appreciate the importance of vulnerability verification, 
                        security testing methodologies, and responsible disclosure. It demonstrates 
                        why organizations should regularly test their systems before malicious attackers discover weaknesses.
                    </p>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                    <Link to="/" className={styles.backButton}>
                        ← Back to Skills
                    </Link>
                </div>
        </section>
        </>
    )
}