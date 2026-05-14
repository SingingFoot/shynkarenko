import React from 'react';
import Layout from '@theme/Layout';
import styles from './page.module.css';
import videoStyles from './videos.module.css';

export default function Videos() {
  return (
    <Layout title="Videos" description="Videos by Oleh Shynkarenko">
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Videos</h1>
          <div className={styles.content}>

            <div className={videoStyles.videoCard}>
              <div className={videoStyles.embedWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/PV_seR_C4zI"
                  title="I was afraid to climb the stairs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className={videoStyles.videoMeta}>
                <h2 className={videoStyles.videoTitle}>
                  I Was Afraid to Climb the Stairs
                </h2>
                <span className={videoStyles.videoSubtitle}>Documentary · 2018</span>
              </div>

              <p className={videoStyles.videoNote}>
                There was a time when the theatre on Khortytsia island in Zaporizhzhya drew real
                audiences. Then the money ran out — so thoroughly that the actors had to fish just
                to feed their cats. One by one they gave up and left. The film catches them now,
                looking back with the particular tenderness reserved for things that were both
                genuine and doomed.
              </p>
              <p className={videoStyles.videoNote}>
                The new director arrives with a different vocabulary: investment, business model,
                growth potential. His optimism is not entirely unconvincing. But the distance
                between his plans and the empty dressing rooms is also the distance between two
                ways of understanding what a theatre is for — and, by extension, what any
                institution held together by belief is for once the belief runs thin. The
                question the film leaves open is the one that keeps returning: is any of this
                getting better? The theatre, the city, the whole arrangement? It feels
                uncomfortably close to everything else.
              </p>
            </div>

            <div className={videoStyles.videoCard}>
              <div className={videoStyles.embedWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/OnE5CTWlLLY"
                  title="Leonora and Tschaika"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className={videoStyles.videoMeta}>
                <h2 className={videoStyles.videoTitle}>Leonora and Tschaika</h2>
                <span className={videoStyles.videoSubtitle}>Documentary · 2018</span>
              </div>

              <p className={videoStyles.videoNote}>
                Leonora Antonivna Savchuk was born in 1926. By the time the film finds her at
                91, she has lived through so much of the worst of the twentieth century that her
                memory functions almost as a chronicle: her father shot as an "enemy of the
                people" in 1937, herself put to work at twelve, deported to the Donbas mines in
                1944. She eventually walked out of the mines on foot to get home — an act of
                defiance the Soviet state answered with imprisonment.
              </p>
              <p className={videoStyles.videoNote}>
                What the film is really about, though, is what comes after. Leonora married a
                disabled war veteran in 1952, raised two children — one became an artist, one a
                mathematician — and kept going in the way that people keep going when there is
                no alternative except to stop. In her final years her closest companion is
                Tschaika (Chaika), a goat she introduces with the mock-seriousness of a woman
                who has earned the right to be gently absurd. She calls her a fashion model.
                The film holds both things at once: the full weight of what Leonora survived,
                and the lightness she found to carry it.
              </p>
            </div>

            <div className={videoStyles.videoCard}>
              <div className={videoStyles.embedWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/ZmUutHcf5Ok"
                  title="Stamp Collectors"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className={videoStyles.videoMeta}>
                <h2 className={videoStyles.videoTitle}>Stamp Collectors</h2>
                <span className={videoStyles.videoSubtitle}>Documentary · 2019</span>
              </div>

              <p className={videoStyles.videoNote}>
                All the boys loved collecting stamps. The years passed, and the boys grew old,
                and the stamps filled every corner of their lives without remainder. It was
                fascinating — endlessly, genuinely fascinating — and then it was over, and they
                found themselves alone among thousands of small pictures of lives that had long
                since vanished and would never come back.
              </p>
              <p className={videoStyles.videoNote}>
                There is something quietly devastating about guarding a museum no one will ever
                visit. And yet — it was joyful once. So why couldn't it be joyful now? The film
                sits with that question rather than resolving it, finding in the collectors'
                stubborn, tender devotion something that looks less like defeat than like a
                form of faithfulness.
              </p>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
