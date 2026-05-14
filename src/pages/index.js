
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <Layout
      title={siteConfig.title}
      description="Personal website of Oleh Shynkarenko">
      <main className={styles.main}>
        <div className={styles.hero}>
          {/* Portrait in orange circle */}
          <div className={styles.portraitWrapper}>
            <img
              src="/img/portrait.jpg"
              alt="Oleh Shynkarenko"
              className={styles.portrait}
            />
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
