import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../page.module.css';

export default function Robots() {
  return (
    <Layout title="The First Ukrainian Robots" description="Novel by Oleh Shynkarenko">
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>The First Ukrainian Robots</h1>
          <div className={styles.content}>
            <img 
              src={useBaseUrl('/img/books/robots.jpg')} 
              alt="The First Ukrainian Robots Cover" 
              className={styles.bookCover}
            />
            <p>
              <strong>The First Ukrainian Robots</strong> (2016) is a satirical "Agro-Cyberpunk" adventure set in the 22nd century. In this future, the hybrid war between Ukraine and Russia has dragged on for over a hundred years. To avoid human casualties, both sides have agreed to use only robots on the front lines. However, robots have permeated all levels of society—from the marketplace to the parliament.
            </p>
            <p>
              The story follows a chaotic world where a mysterious terrorist organization called the "Movement Against Iron" begins an anarchic war against the machines. The narrative is highly experimental, often parodying itself and classic sci-fi tropes, referencing authors like Stanisław Lem and Philip K. Dick.
            </p>
            <p>
              Shynkarenko explores themes of automation, national identity, and the absurdity of perpetual conflict. The book is part of a thematic cycle that includes <em>Kaharlyk</em>, <em>Cherep</em>, and <em>Bandera Distortion</em>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
