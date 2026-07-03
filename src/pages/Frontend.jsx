import { Link } from "react-router-dom";
import styles from "./Frontend.module.css";

export const Frontend = ({link}) => {
  return (
    <>
      

      <section className={styles.hero}>
        
        <div className={styles.overlay}>

          <h1>Frontend Development</h1>
          
      <div className={styles.buttonContainer}>
              <Link to="/" className={styles.backButton}>
                  ← Back to Skills
              </Link>
      </div>
          

          <p>
            Building modern, responsive and user-friendly web
            applications with JavaScript, React and modern UI
            technologies.
          </p>

        </div>

      </section>


      {/* Content */}

      <section className={styles.container}>

        <h2>Introduction</h2>

        <p>
          Frontend development is the art of creating the visual
          interface that users interact with whenever they visit a
          website or web application. It combines creativity,
          programming, and user experience principles to build
          applications that are attractive, responsive, accessible,
          and easy to use.
        </p>

        <p>
          As a frontend developer, your responsibility extends beyond
          making websites look beautiful. You ensure that applications
          are fast, interactive, mobile-friendly, and provide an
          enjoyable experience regardless of the device being used.
        </p>


        <h2>Core Technologies</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>HTML5</h3>

            <p>
              Provides the structure of every webpage by organizing
              content into meaningful elements such as headings,
              sections, forms, images and navigation.
            </p>
          </div>

          <div className={styles.card}>
            <h3>CSS3</h3>

            <p>
              Responsible for styling websites using layouts,
              animations, Flexbox, Grid, transitions and responsive
              design techniques.
            </p>
          </div>

          <div className={styles.card}>
            <h3>JavaScript</h3>

            <p>
              Adds functionality and interactivity, allowing websites
              to respond to user actions, manipulate data and build
              dynamic interfaces.
            </p>
          </div>

          <div className={styles.card}>
            <h3>React</h3>

            <p>
              A component-based JavaScript library used for building
              scalable user interfaces with reusable components and
              efficient rendering.
            </p>
          </div>

        </div>


        <h2>Modern Frontend Workflow</h2>

        <ul className={styles.list}>

          <li>Planning the user interface.</li>

          <li>Creating wireframes and prototypes.</li>

          <li>Developing reusable React components.</li>

          <li>Managing application state.</li>

          <li>Connecting to backend APIs.</li>

          <li>Testing responsiveness.</li>

          <li>Optimizing performance.</li>

          <li>Deploying applications.</li>

        </ul>


        <h2>Responsive Design</h2>

        <p>
          Modern websites should adapt to desktops, tablets and
          smartphones. CSS Flexbox, CSS Grid and Media Queries allow
          developers to create layouts that automatically adjust to
          different screen sizes while maintaining excellent user
          experience.
        </p>


        <h2>Performance Optimization</h2>

        <p>
          High-performance applications improve user satisfaction.
          Techniques such as lazy loading, code splitting, image
          optimization, caching and minimizing unnecessary renders are
          essential for creating fast applications.
        </p>


        <h2>Best Practices</h2>

        <div className={styles.bestPractices}>

          <div>Write clean and reusable code.</div>

          <div>Use semantic HTML.</div>

          <div>Keep components modular.</div>

          <div>Optimize images.</div>

          <div>Ensure accessibility.</div>

          <div>Test on multiple devices.</div>

          <div>Follow responsive design principles.</div>

          <div>Improve loading speed.</div>

        </div>


        <h2>Projects You Can Build</h2>

        <div className={styles.projects}>

          <div className={styles.project}>
            Banking Dashboard
          </div>

          <div className={styles.project}>
            E-Commerce Website
          </div>

          <div className={styles.project}>
            Hospital Management System
          </div>

          <div className={styles.project}>
            Portfolio Website
          </div>

          <div className={styles.project}>
            Social Media Platform
          </div>

          <div className={styles.project}>
            Learning Management System
          </div>

        </div>


        <h2>Conclusion</h2>

        <p>
          Frontend development continues to evolve rapidly with new
          technologies and frameworks. Mastering the fundamentals of
          HTML, CSS and JavaScript before progressing to frameworks
          like React creates a strong foundation for building modern,
          scalable and secure web applications.
        </p>

        <div className={styles.buttonContainer}>
    <Link to="/" className={styles.backButton}>
        ← Back to Skills
    </Link>
</div>

      </section>

    </>
  );
};