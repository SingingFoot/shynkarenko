import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../page.module.css';

export default function Bandera() {
  return (
    <Layout title="Bandera Distortion" description="Novel by Oleh Shynkarenko">
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Bandera Distortion</h1>
          <div className={styles.content}>
            <img 
              src={useBaseUrl('/img/books/bandera.jpg')} 
              alt="Bandera Distortion Cover" 
              className={styles.bookCover}
            />
            <p>
              <strong>Bandera Distortion</strong> (2020) is a satirical and surrealist work of historical fiction. The title refers to the musical "distortion" effect, suggesting that the historical image of Stepan Bandera has been so heavily manipulated by various ideologies that the "sound" of his life has changed entirely.
            </p>
            <p>
              The story follows Artem Kochubey, a pro-Russian journalist from Kyiv who begins to see "Banderites" everywhere. Attempting to flee to Moscow, he accidentally boards the wrong train and ends up in the war-torn Donbas region. In his compartment, he meets Hremyslava, a Ukrainian sniper writing a novel about Stepan Bandera.
            </p>
            <p>
              As she reads her manuscript to him, Artem is transported back to the 1910s–1950s, where the historical war of the past overlaps with the existential war of the present. The book aims to present Bandera as a real human being rather than a flat propaganda icon, exploring the layers of myth and reality that define historical memory.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
