import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/articles/article.module.css';

/**
 * Shared layout for all article detail pages.
 *
 * Props:
 *   title    – page <title> and h1
 *   subtitle – optional italic line below h1
 *   image    – path to article cover SVG/image (relative to static/)
 *   prev     – { to: '/articles/slug', label: 'Short title' } | null
 *   next     – { to: '/articles/slug', label: 'Short title' } | null
 *   children – the article body
 */
export default function ArticleLayout({ title, subtitle, image, prev, next, children }) {
  const imgSrc = useBaseUrl(image);

  return (
    <Layout title={title} description={subtitle || `${title} — Oleh Shynkarenko`}>
      <main className={styles.page}>
        <div className={styles.container}>

          {/* ── Breadcrumb ── */}
          <Link to="/articles" className={styles.back}>
            ← All articles
          </Link>

          {/* ── Header card ── */}
          <div className={styles.headerCard}>
            {image && (
              <div className={styles.headerImgWrap}>
                <img src={imgSrc} alt={title} className={styles.headerImg} />
              </div>
            )}
            <div className={styles.headerContent}>
              <h1 className={styles.title}>{title}</h1>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          </div>

          {/* ── Orange gradient rule ── */}
          <div className={styles.accentLine} />

          {/* ── Article body ── */}
          <article className={styles.body}>
            {children}
          </article>

          {/* ── Inter-article navigation ── */}
          <nav className={styles.articleNav}>
            {prev ? (
              <Link to={prev.to} className={`${styles.navLink} ${styles.navLinkPrev}`}>
                <span className={styles.navDir}>← Previous</span>
                <span className={styles.navTitle}>{prev.label}</span>
              </Link>
            ) : <span />}

            {next ? (
              <Link to={next.to} className={`${styles.navLink} ${styles.navLinkNext}`}>
                <span className={styles.navDir}>Next →</span>
                <span className={styles.navTitle}>{next.label}</span>
              </Link>
            ) : <span />}
          </nav>

        </div>
      </main>
    </Layout>
  );
}
