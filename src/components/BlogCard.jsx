import { Link } from "react-router-dom";
import styles from "../styles/BlogCard.module.css";

export const BlogCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} />

      <div className={styles.content}>
        <span>{post.category}</span>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <div className={styles.info}>
          <small>{post.author}</small>
          <small>{post.readTime}</small>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className={styles.readButton}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};