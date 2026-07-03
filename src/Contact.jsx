import styles from "./Contact.module.css";

export const Contact = () => {

  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className={styles.hero}>

        <div className={styles.heroOverlay}>

          <span>CONTACT ME</span>

          <h1>
            Let's Build Something Amazing Together
          </h1>

          <p>
            Whether you're looking for a Frontend Developer,
            Cybersecurity enthusiast, Graphic Designer, or simply
            want to discuss technology, I'm always open to new
            opportunities, collaborations, and meaningful conversations.
          </p>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className={styles.contact} id="contact">

        <div className={styles.header}>

          <span>GET IN TOUCH</span>

          <h1>Let's Work Together</h1>

          <p>
            Whether you have a project, an internship opportunity,
            or simply want to connect, feel free to reach out.
            I am always open to meaningful conversations,
            collaborations, and learning opportunities.
          </p>

        </div>

        <div className={styles.contactContainer}>

          {/* LEFT */}

          <div className={styles.contactInfo}>

            <h2>Contact Information</h2>

            <div className={styles.infoCard}>
              <h3>Location</h3>
              <p>Kisumu, Kenya</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Email</h3>
              <p>samson@example.com</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Phone</h3>
              <p>+254 703 762 243</p>
            </div>

            <div className={styles.infoCard}>
              <h3>University</h3>
              <p>Jaramogi Oginga Odinga University of Science and Technology (JOOUST)</p>
            </div>

          </div>

          {/* RIGHT */}

          <div className={styles.formContainer}>

            <h2>Send a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="7"
                placeholder="Write your message..."
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );
};