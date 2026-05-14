import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './books.module.css'; // same card design as books

const ARTICLES = [
  {
    title: 'Metamodernism Manifesto',
    slug: 'manifesto',
    image: '/img/articles/manifesto.png',
    description: 'A philosophical manifesto on metamodernism as an artistic and cultural movement oscillating between sincerity and irony, trust and doubt.',
  },
  {
    title: 'The Faces of War',
    slug: 'faces-of-war',
    image: '/img/articles/faces-of-war.png',
    description: 'How Ukrainian cinema has shaped and distorted historical memory — from silent Soviet propaganda to contemporary metamodern filmmaking.',
  },
  {
    title: 'Struggle for Reality',
    slug: 'struggle-for-reality',
    image: '/img/articles/struggle-for-reality.png',
    description: 'From positivism to post-truth: tracing how science evolved from religious thinking and became vulnerable to social media and misinformation.',
  },
  {
    title: 'Metamodern Oscillation',
    slug: 'metamodern-oscillation-ostrykov',
    image: '/img/articles/metamodern-oscillation.png',
    description: 'A multi-perspective analysis of Pavlo Ostrikov\'s 2024 sci-fi film "You Are the Cosmos" through the lens of metamodern oscillation.',
  },
  {
    title: 'Portrait of a Russian Intellectual as a Crocodile',
    slug: 'portrait',
    image: '/img/articles/portrait.png',
    description: 'The Soviet cartoon Crocodile Ghena as an allegory for the Russian intellectual\'s relationship with Marxism, imperialism, and Ukraine.',
  },
  {
    title: 'Metamodern Timescapes',
    slug: 'timescapes',
    image: '/img/articles/timescapes.png',
    description: 'How the human experience and cultural representation of time has evolved from ancient clocks to metamodern digital fragmentation.',
  },
];

export default function Articles() {
  return (
    <Layout
      title="Articles by Oleh Shynkarenko"
      description="Essays and articles by Oleh Shynkarenko (Олег Шинкаренко) — on metamodernism, Ukrainian cinema and history, philosophy of time, science fiction, and cultural memory. Ukrainian literary criticism and cultural studies.">
      <Head>
        <meta name="keywords" content="Oleh Shynkarenko articles, Олег Шинкаренко статті, metamodernism, Ukrainian cinema, Ukrainian science fiction, philosophy, cultural history, Ukraine, Україна, українська культура, Ukrainian literature" />
        <meta property="og:title" content="Articles by Oleh Shynkarenko — Ukrainian Writer and Critic" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Articles</h1>

          <div className={styles.list}>
            {ARTICLES.map((article) => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className={styles.card}>
                <div className={styles.coverWrap}>
                  <img
                    src={useBaseUrl(article.image)}
                    alt={article.title}
                    className={styles.cover}
                  />
                </div>
                <div className={styles.body}>
                  <h2 className={styles.bookTitle}>{article.title}</h2>
                  <p className={styles.desc}>{article.description}</p>
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
