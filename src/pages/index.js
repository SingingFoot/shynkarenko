
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

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
  const [angles, setAngles] = useState(getAngles);

  // Refresh every 10 s — smooth enough for the minute dot
  useEffect(() => {
    const timer = setInterval(() => setAngles(getAngles()), 10_000);
    return () => clearInterval(timer);
  }, []);

  // Hour dot position (on inner ring, r = 110 from centre 128)
  const hx = C + R_IN  * Math.cos(angles.hour);
  const hy = C + R_IN  * Math.sin(angles.hour);
  // Minute dot position (on outer ring, r = 127 from centre 128)
  const mx = C + R_OUT * Math.cos(angles.minute);
  const my = C + R_OUT * Math.sin(angles.minute);

  return (
    <Layout
      title={siteConfig.title}
      description="Personal website of Oleh Shynkarenko">
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
              {/* Hour dot — 5 px, on inner ring */}
              <circle cx={hx} cy={hy} r={5} fill="#ff8c00" />
              {/* Minute dot — 3 px, on outer ring */}
              <circle cx={mx} cy={my} r={3} fill="#ff8c00" />
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
