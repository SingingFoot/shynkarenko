import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './page.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PERSON_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oleh Shynkarenko',
  alternateName: ['Олег Шинкаренко', 'Олег Вікторович Шинкаренко', 'Oleg Shynkarenko'],
  birthDate: '1976-02-20',
  birthPlace: { '@type': 'Place', name: 'Zaporizhzhia, Ukraine' },
  nationality: { '@type': 'Country', name: 'Ukraine' },
  homeLocation: { '@type': 'Place', name: 'Budapest, Hungary' },
  email: 'singingfoot@gmail.com',
  jobTitle: ['Novelist', 'Senior Technical Writer', 'Journalist', 'PhD Candidate'],
  worksFor: { '@type': 'Organization', name: 'University of Pécs' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Zaporizhzhya State Engineering Academy' },
    { '@type': 'CollegeOrUniversity', name: 'International Academy of Journalism, Hamburg' },
    { '@type': 'CollegeOrUniversity', name: 'Classic Private University, Ukraine' },
  ],
  memberOf: { '@type': 'Organization', name: 'National Union of Writers of Ukraine' },
  knowsAbout: [
    'Ukrainian literature', 'Science fiction', 'Philosophy of technology',
    'Metamodernism', 'Ukrainian history', 'Technical writing', 'Journalism',
  ],
  knowsLanguage: ['Ukrainian', 'English', 'French', 'German', 'Hungarian'],
  url: 'https://shynkarenko.netlify.app/about',
  sameAs: ['https://github.com/SingingFoot/shynkarenko'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Novelist and Researcher',
    description: 'Ukrainian novelist, journalist, documentary filmmaker, and PhD researcher in Ukrainian science fiction studies.',
  },
});

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Layout
      title="About Oleh Shynkarenko"
      description="Oleh Shynkarenko (Олег Шинкаренко, Oleg Shynkarenko) — Ukrainian novelist, journalist, documentary filmmaker, and PhD candidate at the University of Pécs. Born in Zaporizhzhia, Ukraine. Member of the National Union of Writers of Ukraine. Author of Kaharlyk, The First Ukrainian Robots, and other novels.">
      <Head>
        <script type="application/ld+json">{PERSON_SCHEMA}</script>
        <meta name="keywords" content="Олег Шинкаренко, Олег Вікторович Шинкаренко, Oleh Shynkarenko, Oleg Shynkarenko, Ukrainian writer, українська письменник, Ukraine, Україна, Zaporizhzhia, Запоріжжя, National Union of Writers of Ukraine, University of Pécs, Ukrainian science fiction" />
        <meta property="og:title" content="About Oleh Shynkarenko — Ukrainian Novelist and Researcher" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Oleh Shynkarenko - Full Professional Profile</h1>
          <div className={styles.content}>
            <div className={styles.headerSection}>
              <img 
                src={useBaseUrl('/img/2000.jpg')} 
                alt="Oleh Shynkarenko" 
                className={styles.portrait} 
              />
              <section className={styles.personalInfo}>
                <h2>Personal Information</h2>
                <ul>
                  <li><strong>Name:</strong> Oleh Viktorovych Shynkarenko (Олег Вікторович Шинкаренко)</li>
                  <li><strong>Birth Date:</strong> February 20, 1976</li>
                  <li><strong>Birth Place:</strong> Zaporizhzhia, Ukraine</li>
                  <li><strong>Current Location:</strong> Budapest, Hungary</li>
                  <li><strong>Email:</strong> <a href="mailto:singingfoot@gmail.com">singingfoot@gmail.com</a></li>
                  <li><strong>Professional Affiliations:</strong> Member of the National Union of Writers of Ukraine.</li>
                </ul>
              </section>
            </div>

            <div className={styles.narrative}>
              <p>
                It all began in the industrial heart of Zaporizhzhya, where a young man mastered the Automation of Technological Processes at the Engineering Academy, learning to speak the secret language of sensors and valves. This mechanical foundation soon collided with the ethereal world of the "Ascension" film club and the Smoloskyp publishing house, where he steered cinematic dreams before 2008. But the ghosts of the machine demanded more, leading him through the International Academy of Journalism in Hamburg and a Postgraduate Diploma in English Translation, until he eventually found himself in the ancient halls of the University of Pécs. There, since 2022, he has been dissecting the Collapse of Techno-Communism and the trajectory from Utopia to Dystopia in Ukrainian science fiction—a research topic that feels less like a thesis and more like a map of the world he was already living in.
              </p>
              <p>
                By day, he became a ghost in the machine of global capitalism, a Senior Technical Writer whose words kept the digital gears turning. At SimpliGov, he authored API scriptures and SDK guides, maintaining the "status-page" of reality itself across the product lifecycle. He moved through the headless CMS architectures of 3M at GlobalLogic, translated the UI/UX visions of Verizon into mobile clarity, and even touched the fragile boundary between life and death at NuvoAir, where he managed the documentation for high-stakes medical devices under the watchful eyes of the FDA. Whether it was the ERP systems of BJet or the technical reports of EGIS Ukraina, he spent years translating complex backend structures into "clear, actionable guides" for a world that seemed increasingly scripted.
              </p>
              <p>
                Yet, there was another life lived through sound and ink. For five years at Hromadske Radio, his voice pulsed through the "Philosophical Drum" and the "Mechanics of Revolution," while his pen documented the fires of the Euromaidan for The Daily Beast. He became a chronicler of the surreal, publishing over 600 articles and novels that blurred the line between fact and fever dream: "Kaharlyk," a satirical dystopia, and "The First Ukrainian Robots." His academic mind fixated on the "Sexualization of Machines" and the "Enfant Terrible of Ukrainian Techno-Communism," writing for journals like Slavia and Információs Társadalom. Now, equipped with a polyglot’s tongue—from native Ukrainian and C2 English to the emerging sounds of Hungarian A2—he continues his interdisciplinary search, a philosopher-engineer standing at the intersection of cultural history and the cold, automated future.
              </p>
            </div>

            <button 
              className={styles.detailsButton} 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide details' : 'See details'}
            </button>

            {showDetails && (
              <div className={styles.detailsContent}>
                <section>
                  <h2>Education</h2>
                  <ul>
                    <li>
                      <strong>PhD Candidate in Philosophy</strong> (2022 – Present)
                      <ul>
                        <li><em>University of Pécs</em>, Hungary.</li>
                        <li>Research: "From Utopia to Dystopia: Ukrainian Science Fiction and the Collapse of Techno-Communism".</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Postgraduate Diploma in English Translation</strong>
                      <ul>
                        <li><em>Classic Private University</em>, Ukraine.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>International Academy of Journalism (Intajour)</strong>
                      <ul>
                        <li>Hamburg, Germany.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Bachelor’s Degree in Automation of Technological Processes</strong>
                      <ul>
                        <li><em>Zaporizhzhya State Engineering Academy</em>, Ukraine.</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Professional Experience</h2>

                  <h3>Technical Writing & Project Management</h3>
                  <ul>
                    <li>
                      <strong>Senior Technical Writer (Contract)</strong> | <em>SimpliGov</em> (Remote | July 2023 – April 2026)
                      <ul>
                        <li>Authored and maintained API and developer documentation, including OpenAPI/Swagger references and SDK guides published via SkillJar.</li>
                        <li>Owned release notes and status-page communications across the product lifecycle, ensuring timely and accurate updates for customers.</li>
                        <li>Built and maintained the internal knowledge base in Confluence, standardizing templates and information architecture.</li>
                        <li>Produced user guides and video tutorials that improved customer self-service and reduced repeat support inquiries.</li>
                        <li>Translated technical requirements from product, engineering, and customer success teams into clear, audience-appropriate documentation.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Senior Technical Writer</strong> | <em>GlobalLogic</em>, Kyiv (Nov 2021 – June 2023)
                      <ul>
                        <li>
                          <strong>3M | Technical Writer</strong>
                          <ul>
                            <li>Spearheaded the creation of comprehensive internal documentation for a headless CMS architecture, enabling seamless integration for cross-functional developer teams.</li>
                            <li>Translated complex backend structures into clear, actionable API guides and technical workflows to streamline content delivery systems.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Verizon | Technical Writer</strong>
                          <ul>
                            <li>Authored and maintained detailed UI/UX documentation for native iOS and Android applications, ensuring design consistency and functional clarity across mobile platforms.</li>
                            <li>Developed high-impact technical presentations for enterprise clients, effectively communicating complex product features and system capabilities to stakeholders.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>NuvoAir | Technical Writer (Medical Technology)</strong>
                          <ul>
                            <li>Managed the full lifecycle of technical documentation for high-stakes medical devices, catering to both clinical users (doctors/patients) and software engineers.</li>
                            <li>Authored critical regulatory and licensing documentation in compliance with strict government controls and healthcare standards (FDA/CE).</li>
                            <li>Coordinated the release process by producing precise release notes and developer manuals for integrated lung-function testing hardware and software.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Senior Technical Writer</strong> | <em>BJet</em>, Lviv (Aug 2021 – Nov 2021)
                      <ul>
                        <li>Produced documentation for ERP systems and dashboards.</li>
                        <li>Created user guides and video tutorials.</li>
                        <li>Maintained documentation platforms.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Technical Writer / Project Manager</strong> | <em>EGIS Ukraina</em> (2018 – 2020)
                      <ul>
                        <li>Prepared technical reports and project documentation.</li>
                        <li>Managed communication and information materials.</li>
                      </ul>
                    </li>
                  </ul>

                  <h3>Journalism & Media</h3>
                  <ul>
                    <li>
                      <strong>Broadcast Journalist</strong> | <em>Hromadske Radio</em> (2013 – 2018)
                      <ul>
                        <li>Hosted and produced podcasts: <em>Philosophical Drum</em>, <em>Mechanics of Revolution</em>, and <em>Legal Alphabet</em>.</li>
                        <li>Produced analytical media content.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Journalist and Media Analyst</strong> | <em>Various Organizations</em> (2008 – 2015)
                      <ul>
                        <li>Contributed to <em>The Daily Beast</em> during the Euromaidan (American news site).</li>
                        <li>Wrote for <em>Future Challenges</em> and other international projects.</li>
                        <li>Edited the website for the literary contest "Coronation of the Word".</li>
                        <li>Filmed video materials for the project "Video Teka" (Telekrytyka).</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Early Career</strong> (Pre-2008)
                      <ul>
                        <li>Worked as an engineer and correspondent for local publications in Zaporizhzhia.</li>
                        <li>Head of the Zaporizhzhia film club "Ascension" (2002) and the film club at "Smoloskyp" publishing house.</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2>Publications & Creative Work</h2>

                  <h3>Books (Novels)</h3>
                  <ul>
                    <li><strong>Kaharlyk</strong> (2014) – Satirical dystopia. Translated into English by Kalyna Language Press.</li>
                    <li><strong>The First Ukrainian Robots</strong> (2016).</li>
                    <li><strong>Cherep</strong> (2017).</li>
                    <li><strong>Bandera Distortion</strong> (2019).</li>
                  </ul>

                  <h3>Academic Publications</h3>
                  <ul>
                    <li><em>Science Fiction in Ukraine, 1920-2020 (Parts 1 & 2)</em>, Információs Társadalom (2023–2024).</li>
                    <li><em>The Sexualization of Machines in Early 20th Century Ukrainian Science Fiction</em>, Slavia (2025). DOI: 10.58377/SLAV.2025.4.02.</li>
                    <li><em>Posting into the Future</em>, Index on Censorship, SAGE Publications (2016).</li>
                    <li><em>Enfant Terrible of Ukrainian Techno-Communism</em>, Slavia (2025).</li>
                  </ul>

                  <h3>Media Impact</h3>
                  <ul>
                    <li>Produced more than 600 published articles and 200+ radio programs covering philosophy, politics, and culture.</li>
                  </ul>
                </section>

                <section>
                  <h2>Languages</h2>
                  <ul>
                    <li><strong>Ukrainian:</strong> Native</li>
                    <li><strong>English:</strong> C1-C2 (Advanced/Proficiency)</li>
                    <li><strong>French:</strong> B2 (Upper Intermediate)</li>
                    <li><strong>German:</strong> A2 (Elementary)</li>
                    <li><strong>Hungarian:</strong> A2 (Elementary)</li>
                  </ul>
                </section>

                <section>
                  <h2>Interests</h2>
                  <ul>
                    <li>Philosophy of technology</li>
                    <li>Science fiction and cultural history</li>
                    <li>Interdisciplinary research</li>
                  </ul>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
