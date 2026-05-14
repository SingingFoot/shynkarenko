import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './page.module.css';
import musicStyles from './music.module.css';

export default function Music() {
  return (
    <Layout
      title="Music by Oleh Shynkarenko"
      description="Music composed and performed by Oleh Shynkarenko (Олег Шинкаренко) — Ukrainian singer-songwriter. Songs in Ukrainian in post-punk and new wave style, recorded in Zaporizhzhia, Ukraine. Tracks: Last Tram (Останній Трамвай, 2006), Princess (Принцеса, 2002).">
      <Head>
        <meta name="keywords" content="Oleh Shynkarenko music, Олег Шинкаренко музика, Ukrainian music, українська музика, Ukraine, Україна, Zaporizhzhia, post-punk, new wave, Останній Трамвай, Last Tram, Принцеса, Princess" />
        <meta property="og:title" content="Music by Oleh Shynkarenko — Ukrainian Musician" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Music</h1>
          <div className={styles.content}>
            <p>Music composed and performed by Oleh Shynkarenko.</p>

            <div className={musicStyles.trackCard}>
              <div className={musicStyles.trackHeader}>
                <div className={musicStyles.trackMeta}>
                  <h2 className={musicStyles.trackTitle}>Last Tram</h2>
                  <span className={musicStyles.trackSubtitle}>Останній Трамвай · 2006</span>
                </div>
              </div>

              <audio
                className={musicStyles.player}
                controls
                src="/music/last-tram.wav"
              >
                Your browser does not support the audio element.
              </audio>

              <p className={musicStyles.trackNote}>
                Recorded in 2006, <em>Last Tram</em> (<em>Останній Трамвай</em>) grew out of a love
                story and turns on a Ukrainian play on words —{' '}
                <em>пошити у дурні</em> (to make a fool of someone) against{' '}
                <em>у дурні пошитися</em> (to make a fool of oneself) — holding both meanings in
                tension at once. The song borrows the sonic vocabulary of 1980s post-punk and new
                wave, wearing those genre markers as a kind of mask: the style's detached cool
                becomes the very vehicle for the song's emotional argument.
              </p>
            </div>

            <div className={musicStyles.trackCard}>
              <div className={musicStyles.trackHeader}>
                <div className={musicStyles.trackMeta}>
                  <h2 className={musicStyles.trackTitle}>Princess</h2>
                  <span className={musicStyles.trackSubtitle}>Принцеса · c. 2002</span>
                </div>
              </div>

              <audio
                className={musicStyles.player}
                controls
                src="/music/princess.wav"
              >
                Your browser does not support the audio element.
              </audio>

              <p className={musicStyles.trackNote}>
                Written and recorded around 2002, <em>Princess</em> (<em>Принцеса</em>) is a
                recollection of a love affair with a girl who carried herself with playful, slightly
                uncertain royalty. The lyrics are cast as her monologue — a string of demands she
                makes on her partner, conditional on circumstances that never quite arrive. Because
                the conditions stay hypothetical, the demands slide into a game, and even she
                doesn't seem fully convinced by the rules she's inventing. The music reaches for the
                new wave of the 1980s, but heard from the Zaporizhzhya of the early 2000s that
                style becomes something else: a deliberate simulation, a mask pulled over the
                unglamorous textures of provincial life, making the gesture of cool both sincere
                and quietly ironic at the same time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
