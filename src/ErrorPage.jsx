import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <section className={styles.errorContainer}>
      <div className={styles.content}>

        <h1 className={styles.errorCode}>404</h1>

        <h2 className={styles.title}>
          Oops! Page Not Found
        </h2>

        <p className={styles.message}>
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect. Let's get you back to exploring
          the portfolio.
        </p>

        <Link to="/" className={styles.homeButton}>
          ← Back to Home
        </Link>

      </div>
    </section>
  );
};