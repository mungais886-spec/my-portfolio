import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import styles from "../styles/BlogDetails.module.css";

export const BlogDetails = () => {
  const { slug } = useParams();

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  // If the post doesn't exist
  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <img
        src={post.image}
        alt={post.title}
        className={styles.image}
      />

      <span className={styles.category}>
        {post.category}
      </span>

      <h1>{post.title}</h1>

      <div className={styles.info}>
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <p className={styles.content}>
        {post.content}
      </p>

      <Link to="/blog" className={styles.backButton}>
        ← Back to Blog
      </Link>
    </section>
  );
};