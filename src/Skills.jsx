import { Link } from "react-router-dom";
import styles from "./Skills.module.css";

export const Skills = ({ title, content, image, buttonText="learn more", link }) => {
  return (
    <div className={styles.container} id="skills">
      <img
        src={image}
        alt={title}
      />

      <h1>{title}</h1>

      <p>{content}</p>

      <Link to={link} className={styles.button}>
        {buttonText}
      </Link>
    </div>
  );
};