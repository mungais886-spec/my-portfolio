import { Link } from "react-router-dom";
import styles from "./Graphics.module.css";

export const Graphics = () => {
  return (
    <>
      {/* Hero Section */}

      <section className={styles.hero}>

        <div className={styles.overlay}>

          <span className={styles.tag}>
            CREATIVE DESIGN • VISUAL COMMUNICATION • BRANDING
          </span>

          <h1>Graphic Design</h1>

          <p>
            Graphic design combines creativity and technology to communicate
            ideas through visual content. It transforms information into
            engaging designs that capture attention, strengthen brands, and
            improve user experiences across digital and print platforms.
          </p>

          <Link to="/" className={styles.backButton}>
            ← Back to Skills
          </Link>

        </div>

      </section>

      {/* Introduction */}

      <section className={styles.content}>

        <span>Introduction</span>

        <h2>What is Graphic Design?</h2>

        <p>
          Graphic design is the art of creating visual content that communicates
          messages effectively. It combines typography, color, imagery,
          illustration, layout, and creativity to produce designs that inform,
          persuade, and inspire audiences. Whether designing a company logo,
          social media content, website interface, business card, or marketing
          campaign, the primary goal of graphic design is to present
          information in a visually appealing and meaningful way.
        </p>

        <p>
          In today's digital world, graphic design plays an essential role in
          business, education, advertising, branding, and software development.
          Every modern application or website relies on good design principles
          to improve usability, accessibility, and user engagement.
        </p>

      </section>

      {/* Importance */}

      <section className={styles.section}>

        <h2>Why Graphic Design Matters</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Brand Identity</h3>

            <p>
              Professional logos, colors, and visual elements create memorable
              brands that people recognize and trust.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Communication</h3>

            <p>
              Graphics simplify complex ideas and make information easier to
              understand through visual storytelling.
            </p>
          </div>

          <div className={styles.card}>
            <h3>User Experience</h3>

            <p>
              Well-designed interfaces improve usability, making websites and
              applications more enjoyable to use.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Marketing</h3>

            <p>
              Businesses use creative designs to promote products, increase
              customer engagement, and improve sales.
            </p>
          </div>

        </div>

      </section>

      {/* Principles */}

      <section className={styles.section}>

        <h2>Fundamental Design Principles</h2>

        <div className={styles.principles}>

          <div className={styles.principle}>
            <h3>Balance</h3>

            <p>
              Creating visual stability by distributing elements evenly across
              a design.
            </p>
          </div>

          <div className={styles.principle}>
            <h3>Contrast</h3>

            <p>
              Using differences in size, color, and typography to draw
              attention and improve readability.
            </p>
          </div>

          <div className={styles.principle}>
            <h3>Alignment</h3>

            <p>
              Organizing elements to create clean, structured, and professional
              layouts.
            </p>
          </div>

          <div className={styles.principle}>
            <h3>Hierarchy</h3>

            <p>
              Guiding users by emphasizing the most important information first.
            </p>
          </div>

          <div className={styles.principle}>
            <h3>Consistency</h3>

            <p>
              Maintaining similar colors, typography, and layouts throughout a
              design.
            </p>
          </div>

          <div className={styles.principle}>
            <h3>White Space</h3>

            <p>
              Giving content room to breathe, making designs cleaner and easier
              to understand.
            </p>
          </div>

        </div>

      </section>

      {/* Skills */}

      <section className={styles.section}>

        <h2>Graphic Design Skills I Continue Developing</h2>

        <div className={styles.skillsGrid}>

          <div className={styles.skill}>Logo Design</div>

          <div className={styles.skill}>Poster Design</div>

          <div className={styles.skill}>Flyer Design</div>

          <div className={styles.skill}>Social Media Graphics</div>

          <div className={styles.skill}>Typography</div>

          <div className={styles.skill}>Color Theory</div>

          <div className={styles.skill}>Photo Manipulation</div>

          <div className={styles.skill}>Brand Identity</div>

          <div className={styles.skill}>Business Cards</div>

          <div className={styles.skill}>UI Mockups</div>

          <div className={styles.skill}>Banner Design</div>

          <div className={styles.skill}>Presentation Design</div>

        </div>

      </section>

      {/* Software */}

      <section className={styles.section}>

        <h2>Software & Tools</h2>

        <p>
          Throughout my learning journey, I continue developing practical
          experience using industry-standard design tools to create modern,
          professional, and visually engaging designs.
        </p>

        <div className={styles.tools}>

          <div>Adobe Photoshop</div>

          <div>Adobe Illustrator</div>

          <div>Canva</div>

          <div>Figma</div>

          <div>Adobe XD</div>

          <div>CorelDRAW</div>

        </div>

      </section>

      {/* Personal Journey */}

      <section className={styles.section}>

        <h2>My Design Journey</h2>

        <p>
          My interest in graphic design began with creating posters and visual
          content for presentations and church media activities. As I gained
          more experience, I developed a deeper appreciation for how design
          influences communication, branding, and user experience.
        </p>

        <p>
          Today, I continue improving my creative abilities by combining
          graphic design with frontend development. This enables me to design
          interfaces that are not only visually attractive but also functional,
          responsive, and user-centered.
        </p>

      </section>

      {/* Future Goals */}

      <section className={styles.section}>

        <h2>Future Goals</h2>

        <p>
          I aim to continue growing as both a software developer and creative
          designer by mastering modern design systems, user interface design,
          user experience principles, and digital branding. My goal is to
          develop applications that combine excellent functionality with
          outstanding visual experiences while solving real-world problems.
        </p>

      </section>

      {/* ================= GALLERY ================= */}

<section className={styles.gallerySection}>

    <span>Portfolio</span>

    <h2>Featured Design Projects</h2>

    <p className={styles.galleryIntro}>
        Below are some of the creative projects I have designed while
        developing my graphic design skills. Each project reflects my
        ability to combine creativity, branding, typography, and visual
        communication to produce professional digital content.
    </p>

    <div className={styles.galleryGrid}>

        <div className={styles.galleryCard}>
            <img src="/gallery/poster.jpg" alt="Church Poster" />

            <div className={styles.galleryContent}>
                <span>Poster Design</span>

                <h3>Church Event Poster</h3>

                <p>
                    Promotional artwork designed for church conferences,
                    youth meetings, and worship events.
                </p>
            </div>
        </div>

        <div className={styles.galleryCard}>
            <img src="/gallery/logo.jpg" alt="Logo Design" />

            <div className={styles.galleryContent}>
                <span>Brand Identity</span>

                <h3>Modern Logo Design</h3>

                <p>
                    Clean and memorable logo developed using modern
                    branding principles and color psychology.
                </p>
            </div>
        </div>

        <div className={styles.galleryCard}>
            <img src="/gallery/flyer.jpg" alt="Flyer Design" />

            <div className={styles.galleryContent}>
                <span>Marketing</span>

                <h3>Business Flyer</h3>

                <p>
                    Professional flyer created for product promotion
                    and digital marketing campaigns.
                </p>
            </div>
        </div>

        <div className={styles.galleryCard}>
            <img src="/gallery/social.jpg" alt="Social Media" />

            <div className={styles.galleryContent}>
                <span>Social Media</span>

                <h3>Instagram Campaign</h3>

                <p>
                    Social media graphics designed to improve brand
                    visibility and audience engagement.
                </p>
            </div>
        </div>

        <div className={styles.galleryCard}>
            <img src="/gallery/banner.jpg" alt="Banner" />

            <div className={styles.galleryContent}>
                <span>Banner</span>

                <h3>Website Banner</h3>

                <p>
                    Responsive website banner designed for landing
                    pages and promotional campaigns.
                </p>
            </div>
        </div>

        <div className={styles.galleryCard}>
            <img src="/gallery/ui.jpg" alt="UI Design" />

            <div className={styles.galleryContent}>
                <span>UI Design</span>

                <h3>Dashboard Interface</h3>

                <p>
                    Modern dashboard concept focusing on usability,
                    accessibility, and clean layouts.
                </p>
            </div>
        </div>

    </div>

</section>

    </>
  );
};