import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './news.module.css';
import NEWS from '@site/src/data/news';

function ContentParagraph({ paragraph }) {
  // A paragraph can be a plain string, or { text, image } to pair it with an illustration.
  const imageSrc = useBaseUrl(typeof paragraph === 'string' ? undefined : paragraph.image);

  if (typeof paragraph === 'string') {
    return <p>{paragraph}</p>;
  }
  return (
    <>
      <p>{paragraph.text}</p>
      {paragraph.image && (
        <img src={imageSrc} alt="" className={styles.stamp} loading="lazy" />
      )}
    </>
  );
}

export default function News() {
  const [expanded, setExpanded] = useState({});

  // Auto-expand and scroll to an item if the page was opened with a #slug anchor
  // (e.g. from the "Latest News" widget links on the homepage).
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && NEWS.some((item) => item.slug === hash)) {
      setExpanded((prev) => ({ ...prev, [hash]: true }));
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const toggle = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <Layout
      title="News"
      description="Latest news and updates from Oleh Shynkarenko (Олег Шинкаренко) — Ukrainian novelist, journalist, and documentary filmmaker.">
      <Head>
        <meta name="keywords" content="Oleh Shynkarenko news, Олег Шинкаренко новини, updates, announcements" />
        <meta property="og:title" content="News — Oleh Shynkarenko" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>News</h1>

          <div className={styles.list}>
            {NEWS.map((item) => {
              const isOpen = !!expanded[item.slug];
              return (
                <article key={item.slug} id={item.slug} className={styles.card}>
                  <div className={styles.meta}>{item.date}</div>
                  <h2 className={styles.itemTitle}>{item.title}</h2>

                  {isOpen ? (
                    <div className={styles.fullContent}>
                      {item.content.map((paragraph, idx) => (
                        <ContentParagraph key={idx} paragraph={paragraph} />
                      ))}
                    </div>
                  ) : (
                    <p className={styles.excerpt}>{item.excerpt}</p>
                  )}

                  <button
                    className={styles.continueButton}
                    onClick={() => toggle(item.slug)}
                  >
                    {isOpen ? 'Show less' : 'Continue reading →'}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
