
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import NEWS from '@site/src/data/news';

const PERSON_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oleh Shynkarenko',
  alternateName: ['Олег Шинкаренко', 'Олег Вікторович Шинкаренко', 'Oleg Shynkarenko'],
  birthPlace: { '@type': 'Place', name: 'Zaporizhzhia, Ukraine' },
  nationality: { '@type': 'Country', name: 'Ukraine' },
  jobTitle: ['Novelist', 'Technical Writer', 'Journalist', 'Documentary Filmmaker'],
  url: 'https://shynkarenko.netlify.app',
  sameAs: ['https://github.com/SingingFoot/shynkarenko'],
  knowsAbout: ['Ukrainian literature', 'Science fiction', 'Philosophy of technology', 'Metamodernism'],
  memberOf: { '@type': 'Organization', name: 'National Union of Writers of Ukraine' },
});

// Outer ring (minutes): 234px container, radius 116px from centre (117,117)
// Inner ring (hours):   220px portrait border, radius 110px from same centre
const OUTER = 234;          // outer container size (px)
const C     = OUTER / 2;    // centre coordinate = 117
const R_OUT = C - 1;        // 116 — minute dot sits on outer ring
const R_IN  = 110;          // hour dot sits on inner portrait ring

function getAngles() {
  const now = new Date();
  const h = now.getHours() % 12 + now.getMinutes() / 60;
  const m = now.getMinutes() + now.getSeconds() / 60;
  return {
    hour:   (h / 12) * 2 * Math.PI - Math.PI / 2,
    minute: (m / 60) * 2 * Math.PI - Math.PI / 2,
  };
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [showExplanation, setShowExplanation] = useState(false);
  // null on server — populated client-side only so we always use the visitor's local timezone
  const [angles, setAngles] = useState(null);

  // Set immediately on mount (client), then refresh every 10 s
  useEffect(() => {
    setAngles(getAngles());
    const timer = setInterval(() => setAngles(getAngles()), 10_000);
    return () => clearInterval(timer);
  }, []);

  // Dot positions — computed only when angles are available
  const hx = angles ? C + R_IN  * Math.cos(angles.hour)   : C;
  const hy = angles ? C + R_IN  * Math.sin(angles.hour)   : C;
  const mx = angles ? C + R_OUT * Math.cos(angles.minute) : C;
  const my = angles ? C + R_OUT * Math.sin(angles.minute) : C;

  return (
    <Layout
      title={siteConfig.title}
      description="Oleh Shynkarenko (Олег Шинкаренко, Oleg Shynkarenko) — Ukrainian novelist, journalist, documentary filmmaker, and researcher from Zaporizhzhia, Ukraine. Member of the National Union of Writers of Ukraine.">
      <Head>
        <script type="application/ld+json">{PERSON_SCHEMA}</script>
        <meta property="og:title" content="Oleh Shynkarenko — Ukrainian Writer" />
        <meta name="keywords" content="Олег Шинкаренко, Oleh Shynkarenko, Oleg Shynkarenko, Ukraine, Україна, українська література, Ukrainian literature, Ukrainian novelist, Zaporizhzhia" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>

          {/* Double-ring clock portrait */}
          <div className={styles.ringContainer}>
            {/* Inner portrait circle */}
            <div className={styles.portraitWrapper}>
              <img
                src="/img/portrait.jpg"
                alt="Oleh Shynkarenko"
                className={styles.portrait}
              />
            </div>

            {/* SVG: outer ring stroke + minute dot (3px) + hour dot (5px) */}
            <svg
              width={OUTER}
              height={OUTER}
              className={styles.clockOverlay}
              aria-hidden="true"
              style={{ overflow: 'visible' }}
            >
              {/* Outer ring */}
              <circle
                cx={C}
                cy={C}
                r={R_OUT}
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
              />
              {/* Dots rendered only after client mount so time is always visitor-local */}
              {angles && (
                <>
                  {/* Hour dot — 5 px, on inner ring */}
                  <circle cx={hx} cy={hy} r={5} fill="#ff8c00" />
                  {/* Minute dot — 3 px, on outer ring */}
                  <circle cx={mx} cy={my} r={3} fill="#ff8c00" />
                </>
              )}
            </svg>
          </div>

          <h1 className={styles.name}>Oleh Shynkarenko</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.navLinks}>
            <Link className={styles.navLink} to="/about">About me</Link>
            <Link className={styles.navLink} to="/books">Books</Link>
            <Link className={styles.navLink} to="/articles">Articles</Link>
            <Link className={styles.navLink} to="/photos">Photos</Link>
            <Link className={styles.navLink} to="/videos">Videos</Link>
            <Link className={styles.navLink} to="/music">Music</Link>
            <Link className={styles.navLink} to="/news">News</Link>
          </div>

          {/* Latest News widget */}
          <div className={styles.newsModule}>
            <h2 className={styles.newsTitle}>Latest News</h2>
            <ul className={styles.newsList}>
              {NEWS.map((item) => (
                <li key={item.slug} className={styles.newsListItem}>
                  <a
                    href={`/news#${item.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.newsLink}
                  >
                    <span className={styles.newsLinkTitle}>{item.title}</span>
                    <span className={styles.newsLinkArrow}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Meme of the Day Module */}
          <div className={styles.memeModule}>
            <h2 className={styles.memeTitle}>Meme of the Day</h2>
            <img
              src={useBaseUrl('/img/sisi.jpg')}
              alt="Meme of the Day - Sisi"
              className={styles.memeImage}
            />
            <div>
              <button
                className={styles.explainButton}
                onClick={() => setShowExplanation(!showExplanation)}
              >
                {showExplanation ? 'Hide' : 'Explain!'}
              </button>
            </div>
            {showExplanation && (
              <div className={styles.explanation}>
                <p className={styles.explanationText}>
                  Sisi is a rising star in the Hungarian underground hip-hop scene, recognized for her authentic old-school flow and ironic lyrical style that often plays with urban stereotypes. In her track <a href="https://www.youtube.com/watch?v=YZGKISVffNY" target="_blank" rel="noopener noreferrer">"Blaha,"</a> she centers the narrative on Blaha Lujza tér, a major transport hub in Budapest that has historically held a reputation for being one of the city's grittiest, most chaotic, and potentially dangerous spots after dark. The song subverts this "tough" urban setting by describing surreal and clumsy situations, such as the singer walking alone through the square with a box of Cini Minis cereal and slipping on a banana peel. The meme's caption "Tiszta para a város!" (The city is pure stress/creepy!) becomes humorous because it is used ironically; while the phrase usually warns of urban danger, here it accompanies a story where the "scary" figures of Blaha actually act as silent, helpful neighbors who assist a girl struggling with her breakfast cereal, turning a site of public anxiety into a stage for slapstick comedy.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
