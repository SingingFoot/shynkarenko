import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './books.module.css';

const BOOKS = [
  {
    title: 'How to Disappear Completely',
    slug: 'yak',
    image: '/img/books/yak.jpg',
    description: 'A collection of short fiction exploring the fragility of selfhood.',
  },
  {
    title: 'Kaharlyk',
    slug: 'kaharlyk',
    image: '/img/books/kaharlyk.jpg',
    description: 'A novel about the end of the world as a condition of thought.',
  },
  {
    title: 'The First Ukrainian Robots',
    slug: 'robots',
    image: '/img/books/robots.jpg',
    description: 'A satirical "Agro-Cyberpunk" adventure set in the 22nd century.',
  },
  {
    title: 'Cherep (Skull)',
    slug: 'cherep',
    image: '/img/books/cherep.jpg',
    description: 'A surrealist parable and biting political satire of modern society.',
  },
  {
    title: 'Bandera Distortion',
    slug: 'bandera',
    image: '/img/books/bandera.jpg',
    description: 'A satirical exploration of historical memory and propaganda.',
  },
];

export default function Books() {
  return (
    <Layout title="Books" description="Books by Oleh Shynkarenko">
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Books</h1>

          <div className={styles.list}>
            {BOOKS.map((book) => (
              <Link key={book.slug} to={`/books/${book.slug}`} className={styles.card}>
                <div className={styles.coverWrap}>
                  <img
                    src={useBaseUrl(book.image)}
                    alt={book.title}
                    className={styles.cover}
                  />
                </div>
                <div className={styles.body}>
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.desc}>{book.description}</p>
                  <span className={styles.arrow}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
