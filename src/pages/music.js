import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './page.module.css';
import musicStyles from './music.module.css';

export default function Music() {
  return (
    <Layout
      title="Music by Oleh Shynkarenko"
      description="Music composed and performed by Oleh Shynkarenko (Олег Шинкаренко) — Ukrainian singer-songwriter. Songs in Ukrainian in post-punk and new wave style, recorded in Zaporizhzhia, Ukraine. Tracks: Rose (Роза, 1999), I will not tell you (Я не скажу тебе, 2000), Lake (Озеро, 2004), Last Tram (Останній Трамвай, 2006), Princess (Принцеса, 2002).">
      <Head>
        <meta name="keywords" content="Oleh Shynkarenko music, Олег Шинкаренко музика, Ukrainian music, українська музика, Ukraine, Україна, Zaporizhzhia, post-punk, new wave, Роза, Rose, Я не скажу тебе, I will not tell you, Озеро, Lake, Останній Трамвай, Last Tram, Принцеса, Princess" />
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
                  <h2 className={musicStyles.trackTitle}>Rose</h2>
                  <span className={musicStyles.trackSubtitle}>Роза · 1999</span>
                </div>
              </div>

              <audio
                className={musicStyles.player}
                controls
                src="/music/roza.wav"
              >
                Your browser does not support the audio element.
              </audio>

              <p className={musicStyles.trackNote}>
                This is my very first song <em>Rose</em> (<em>Роза</em>), written and recorded back in 1999. It is based on a poem by Federico García Lorca, which I slightly adapted to fit the rhythm of the music. Back then, I didn't own a computer and had absolutely no clue about digital audio recording. The track was engineered by a 16-year-old guy named Volodymyr, who managed to have an entire recording studio set up at his home. The vocals were performed as a duet by myself and Anna Chyzhova. Sound-wise, I was trying to capture the 1980s New Wave vibe that I was deeply fascinated by at the time. Chords drenched in chorus effect always give the impression of some otherworldly instrument—like a tamed Trumpet of Jericho.
              </p>
            </div>

            <div className={musicStyles.trackCard}>
              <div className={musicStyles.trackHeader}>
                <div className={musicStyles.trackMeta}>
                  <h2 className={musicStyles.trackTitle}>I will not tell you</h2>
                  <span className={musicStyles.trackSubtitle}>Я не скажу тебе · c. 2000</span>
                </div>
              </div>

              <audio
                className={musicStyles.player}
                controls
                src="/music/dont-say.wav"
              >
                Your browser does not support the audio element.
              </audio>

              <p className={musicStyles.trackNote}>
                This is the first song I ever recorded on my own computer, around the year 2000. Volodymyr, whom I collaborated with on the song 'Rosa,' had just taught me how to sample and use Sonic Foundry’s ACID, one of the earliest DAWs. That was the exact moment I realized I could create music out of literally anything. Back then, I was listening to Erik Satie and decided to build a track around one of his melodies. Recently, I tried to track it down and listened to over a hundred of Satie's pieces, yet I still couldn't find it. Nevertheless, the outro of this song features a direct sample from it, and the vocalist sings Satie's melody overlaid with my lyrics. My goal was to piece together something reminiscent of the Bristol trip-hop scene using a sample library, and I distorted my own voice in the chorus to create a 'Beauty and the Beast' juxtaposition. The vocalist was discovered by journalist Dmytro Volkovinsky; she possessed an incredible refinement that fit the track flawlessly. Ultimately, everything good I have ever written has been the result of sheer luck, rather than painstaking labor.
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

            <div className={musicStyles.trackCard}>
              <div className={musicStyles.trackHeader}>
                <div className={musicStyles.trackMeta}>
                  <h2 className={musicStyles.trackTitle}>Lake</h2>
                  <span className={musicStyles.trackSubtitle}>Озеро · c. 2004</span>
                </div>
              </div>

              <audio
                className={musicStyles.player}
                controls
                src="/music/ozero.mp3"
              >
                Your browser does not support the audio element.
              </audio>

              <p className={musicStyles.trackNote}>
                I recorded this song somewhere between 2003 and 2005. By that time, I had become quite adept at manipulating samples—slicing, rearranging, and tweaking pitch, dynamics, and volume with ease. Around then, Tetiana Levina and I recorded a few tracks together; she even performed two of them at a local competition in Zaporizhzhia and won an award. I didn't bother attending the performance, which pretty much sums up my attitude toward my own work—I never took it seriously or expected it to yield any dividends. Nonetheless, this particular song turned out rather well. I put an immense amount of effort into the solo guitar part; I played the track first, and then meticulously chopped and rearranged it to make it sound both melodic and delightfully convoluted. The whole process was captivating, leaving me with the distinct impression that I was doing something deeply important, yet entirely pointless.
              </p>
            </div>

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
          </div>
        </div>
      </main>
    </Layout>
  );
}
