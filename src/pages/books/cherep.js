import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../page.module.css';

export default function Cherep() {
  return (
    <Layout title="Cherep" description="Novel by Oleh Shynkarenko">
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cherep (Skull)</h1>
          <div className={styles.content}>
            <img 
              src={useBaseUrl('/img/books/cherep.jpg')} 
              alt="Cherep Cover" 
              className={styles.bookCover}
            />
            <p>
              <strong>Cherep</strong> (<em>Skull</em>, 2017) is a surrealist parable and biting political satire that critiques modern Russian society and the pervasive power of state propaganda.
            </p>
            <p>
              The plot follows three ordinary Russians who, while attempting to escape a massive fire, accidentally find themselves among "volunteers" heading to the Ukrainian border. They end up in a tank, driving across the vast Russian landscape toward Ukraine to "save their Russian-speaking brothers from fascists."
            </p>
            <p>
              The journey is surreal and nightmarish, serving as a potent metaphor for collective delusion and the distortion of reality caused by media manipulation. It explores how individuals can be swept up in nationalistic fervor and lose their sense of truth in the face of a constructed enemy.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
