import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './photos.module.css';

const PHOTOS = [
  { file: 'mist.jpg',        alt: 'Misty landscape' },
  { file: 'bridge.jpg',      alt: 'Bridge' },
  { file: 'bird.jpg',        alt: 'Bird' },
  { file: 'girl.jpg',        alt: 'Portrait' },
  { file: 'trumpetist.JPG',  alt: 'Trumpetist' },
  { file: 'goths.JPG',       alt: 'Goths' },
  { file: 'old-lady.jpg',    alt: 'Old lady' },
  { file: 'seagull.jpg',     alt: 'Seagull' },
  { file: 'cat-dog.jpg',     alt: 'Cat and dog' },
  { file: 'rysya.jpg',       alt: 'Rysya' },
  { file: 'koza.png',        alt: 'Goat' },
  { file: 'Head.png',        alt: 'Head' },
  { file: '1980.png',        alt: '1980' },
  { file: '1985.jpg',        alt: '1985' },
  { file: '1996.png',        alt: '1996' },
  { file: '1996_roof.jpg',   alt: '1996 roof' },
  { file: 'shalandon.png',   alt: 'Sorj Chalandon and Iryna Slavinska' },
  { file: 'chernivtsi.png',  alt: 'Chernivtsi. 2014' },
];

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];
  const src = `/img/photos/${photo.file}`;

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Photo viewer">
      {/* stop click propagation on the image area */}
      <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        <button
          className={`${styles.navBtn} ${styles.navBtnPrev}`}
          onClick={onPrev}
          aria-label="Previous photo"
          disabled={index === 0}
        >‹</button>

        <img
          src={src}
          alt={photo.alt}
          className={styles.lightboxImg}
        />

        <button
          className={`${styles.navBtn} ${styles.navBtnNext}`}
          onClick={onNext}
          aria-label="Next photo"
          disabled={index === photos.length - 1}
        >›</button>
      </div>

      <div className={styles.lightboxCaption}>
        {photo.alt} &nbsp;·&nbsp; {index + 1} / {photos.length}
      </div>
    </div>
  );
}

export default function Photos() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const open  = useCallback((i) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() => setLightboxIndex(i => Math.max(0, i - 1)), []);
  const next  = useCallback(() => setLightboxIndex(i => Math.min(PHOTOS.length - 1, i + 1)), []);

  return (
    <Layout
      title="Photos by Oleh Shynkarenko"
      description="Photography by Oleh Shynkarenko (Олег Шинкаренко) — documentary and street photography from Ukraine and Hungary. Portraits, landscapes, and everyday life.">
      <Head>
        <meta name="keywords" content="Oleh Shynkarenko photos, Олег Шинкаренко фото, Ukrainian photography, Ukraine, Україна, documentary photography, street photography" />
        <meta property="og:title" content="Photos by Oleh Shynkarenko" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Photos</h1>

          <div className={styles.grid}>
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.file}
                className={styles.thumb}
                onClick={() => open(i)}
                aria-label={`Open ${photo.alt}`}
              >
                <img
                  src={`/img/photos/${photo.file}`}
                  alt={photo.alt}
                  loading="lazy"
                />
                <span className={styles.thumbOverlay}>{photo.alt}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </Layout>
  );
}
