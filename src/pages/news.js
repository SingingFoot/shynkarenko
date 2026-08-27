import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './news.module.css';
import NEWS from '@site/src/data/news';

// A content block is one of:
//   'plain string'                                  → paragraph
//   { text, image }                                 → paragraph followed by a stamp illustration
//   { type: 'quote', text, attribution, url }       → pull quote
//   { type: 'image', src, alt, caption }            → figure with caption
//   { type: 'links', items: [{ label, note, url }] }→ external link cards
function ContentBlock({ block }) {
  const isString = typeof block === 'string';
  // Hooks must run unconditionally, so resolve any image path up front.
  const imageSrc = useBaseUrl(isString ? undefined : block.image || block.src);

  if (isString) {
    return <p>{block}</p>;
  }

  if (block.type === 'quote') {
    return (
      <blockquote className={styles.pullQuote}>
        <p className={styles.quoteText}>{block.text}</p>
        {block.attribution && (
          <cite className={styles.quoteAttribution}>
            {block.url ? (
              <a href={block.url} target="_blank" rel="noopener noreferrer">
                {block.attribution}
              </a>
            ) : (
              block.attribution
            )}
          </cite>
        )}
      </blockquote>
    );
  }

  if (block.type === 'image') {
    return (
      <figure className={styles.figure}>
        <img
          src={imageSrc}
          alt={block.alt || ''}
          className={styles.figureImage}
          loading="lazy"
        />
        {block.caption && (
          <figcaption className={styles.figureCaption}>{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  if (block.type === 'links') {
    return (
      <div className={styles.linkList}>
        {block.items.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <span className={styles.linkBody}>
              <span className={styles.linkLabel}>{link.label}</span>
              {link.note && <span className={styles.linkNote}>{link.note}</span>}
            </span>
            <span className={styles.linkArrow}>↗</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      <p>{block.text}</p>
      {block.image && (
        <img src={imageSrc} alt="" className={styles.stamp} loading="lazy" />
      )}
    </>
  );
}

export default function News() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied] = useState(null);

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
    const willOpen = !expanded[slug];
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));

    // Keep the address bar in step with what is actually open, so the URL is
    // always copy-pasteable for the item being read — not just for the one the
    // visitor happened to arrive on. replaceState avoids polluting history.
    if (typeof window === 'undefined') return;
    const { pathname, hash } = window.location;
    if (willOpen) {
      window.history.replaceState(null, '', `${pathname}#${slug}`);
    } else if (hash === `#${slug}`) {
      window.history.replaceState(null, '', pathname);
    }
  };

  const copyLink = async (slug) => {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(slug);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard blocked (insecure context, permissions) — at least put the
      // correct address in the bar so it can be copied by hand.
      window.history.replaceState(null, '', `${window.location.pathname}#${slug}`);
    }
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
                  <div className={styles.metaRow}>
                    <span className={styles.meta}>{item.date}</span>
                    {item.tag && <span className={styles.tag}>{item.tag}</span>}
                  </div>
                  <h2 className={styles.itemTitle}>{item.title}</h2>

                  {isOpen ? (
                    <div className={styles.fullContent}>
                      {item.content.map((block, idx) => (
                        <ContentBlock key={idx} block={block} />
                      ))}
                    </div>
                  ) : (
                    <p className={styles.excerpt}>{item.excerpt}</p>
                  )}

                  <div className={styles.actions}>
                    <button
                      className={styles.continueButton}
                      onClick={() => toggle(item.slug)}
                    >
                      {isOpen ? 'Show less' : 'Continue reading →'}
                    </button>
                    {isOpen && (
                      <button
                        className={styles.copyButton}
                        onClick={() => copyLink(item.slug)}
                        title="Copy a direct link to this item"
                      >
                        {copied === item.slug ? '✓ Link copied' : 'Copy link'}
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
