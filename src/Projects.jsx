import styles from "./Projects.module.css";

export const Projects = ({
  title,
  description,
  image,
  buttonText
}) => {
  return (
    <section className="styles.projects" id="projects">
    <div className={styles.projectsContainer}>

      <img
        src={image}
        alt={title}
        className={styles.projectImage}
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <button className={styles.projectButton}>
        {buttonText}
      </button>

    </div>
    </section>
  );
};