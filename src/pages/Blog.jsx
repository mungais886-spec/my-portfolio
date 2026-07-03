import styles from "../styles/Blog.module.css";
import { blogPosts } from "../data/blogData";
import { BlogCard } from "../components/BlogCard";
import { useState } from "react";

export const Blog = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.overlay}>

          <span className={styles.tag}>
            Developer Journal
          </span>

          <h1>
            Technology Articles,
            <br />
            Tutorials & Learning Notes
          </h1>

          <p>
            Welcome to my technical blog where I document my learning
            journey in React, JavaScript, Cybersecurity, Kali Linux,
            Computer Networking and modern software development.
            Every article represents practical knowledge gained through
            projects, coursework and continuous exploration.
          </p>

          <div className={styles.heroButtons}>
            <a href="#articles" className={styles.primaryButton}>
              Explore Articles
            </a>

            <button className={styles.secondaryButton}>
              {blogPosts.length} Articles
            </button>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className={styles.stats}>

        <div className={styles.statCard}>
          <h2>{blogPosts.length}+</h2>
          <p>Technical Articles</p>
        </div>

        <div className={styles.statCard}>
          <h2>5+</h2>
          <p>Technology Categories</p>
        </div>

        <div className={styles.statCard}>
          <h2>100%</h2>
          <p>Hands-on Learning</p>
        </div>

        <div className={styles.statCard}>
          <h2>∞</h2>
          <p>Continuous Improvement</p>
        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className={styles.searchSection}>

        <h2>Find an Article</h2>

        <p>
          Search by technology, topic or article title.
        </p>

        <input
          type="text"
          placeholder="Search React, Kali Linux, Networking..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className={styles.categories}>

        <span>React</span>
        <span>JavaScript</span>
        <span>Cybersecurity</span>
        <span>Kali Linux</span>
        <span>Networking</span>

      </section>

      {/* ================= ARTICLES ================= */}

      <section
        className={styles.latestPosts}
        id="articles"
      >

        <div className={styles.sectionHeading}>

          <div>

            <span>Latest Posts</span>

            <h2>Featured Technical Articles</h2>

          </div>

          <h3>{filteredPosts.length} Articles</h3>

        </div>

        <div className={styles.grid}>

          {filteredPosts.map((post) => (

            <BlogCard
              key={post.id}
              post={post}
            />

          ))}

        </div>

        {filteredPosts.length === 0 && (

          <div className={styles.noResults}>

            <h2>No Articles Found</h2>

            <p>
              Try another keyword or browse the available categories.
            </p>

          </div>

        )}

      </section>

    </>
  );
};