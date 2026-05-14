import React from 'react';
import ArticleLayout from '@site/src/components/ArticleLayout';
import styles from './article.module.css';

export default function StruggleForReality() {
  return (
    <ArticleLayout
      title="From Counting Angels to Counting Likes"
      subtitle="Positivism's Ghost: How Science Became a New Religion in the Post-Truth Era"
      image="/img/articles/struggle-for-reality.png"
      prev={{ to: '/articles/faces-of-war', label: 'The Faces of War' }}
      next={{ to: '/articles/metamodern-oscillation-ostrykov', label: 'Metamodern Oscillation' }}
    >
      <p className={styles.lede}>
        The earliest form of scientific knowledge was religion, emerging at a time when early
        thinkers had no formal methods and relied solely on hypotheses shaped by their desires and
        mystical conceptions of how the world should be structured. The earliest religious inquiries
        were remarkably similar to modern scientific ones in nearly every aspect — except for their
        subject matter.
      </p>

      <p>
        For example, <strong>Thomas Aquinas</strong>, in his <em>Summa Theologica</em>, examines the
        question of whether multiple angels can simultaneously occupy the same space. This religious
        approach has persisted throughout history, influencing even modern scientific inquiry. Every
        scientific hypothesis, to some extent, carries an element of faith — a legacy inherited from
        religious thought. Here are three examples of modern scientific concepts that remain
        unproven, relying on a form of intellectual "faith": the multiverse hypothesis, mathematical
        Platonism, and string theory. Whenever you read about Mathematical Platonism or String
        Theory, it's hard not to think of those medieval scholastics from old jokes, seriously
        debating how many angels could comfortably fit on the head of a pin. Modern scientists have
        clearly inherited from medieval monks this remarkable penchant for passionately discussing
        things they can neither observe nor ever prove.
      </p>

      <hr />

      <h2>The Enlightenment and the Displacement of Religion</h2>

      <p>
        Since the Enlightenment, religion has gradually lost its influence in philosophy and science.
        A well-known anecdote illustrates this shift: when Napoleon asked the French astronomer and
        mathematician Pierre-Simon Laplace why God was not mentioned in his{' '}
        <em>Treatise on Celestial Mechanics</em>, Laplace famously replied:
      </p>

      <blockquote>
        <p><em>"Je n'ai pas besoin de cette hypothèse"</em> — "I have no need for that hypothesis."</p>
      </blockquote>

      <p>
        One of the last significant attempts at integrating religious elements into philosophy was
        Immanuel Kant's <strong>transcendental idealism</strong>. He developed a system of thought
        positioned between realism (which holds that the world exists independently of our
        perception) and idealism (which asserts that the world is a construct of our perception).
        According to Kant, human cognition is shaped by <strong>"pure reason"</strong>, an innate
        framework that precedes experience and organizes knowledge into fundamental categories. He
        argued that through pure reason, independent of sensory experience, one could resolve{' '}
        <strong>synthetic</strong> problems.
      </p>

      <p>
        Kant's idea carried a deeply theological undertone, because the only conceivable source of
        knowledge prior to experience is God. This aligns with Kant's famous statement:
      </p>

      <p className={styles.pullQuote}>
        "I had to deny knowledge in order to make room for faith." — Immanuel Kant
      </p>

      <p>
        Since knowledge prior to experience cannot be verified empirically, it inevitably remains a
        matter of faith. Kant introduced a "divine" limitation on human understanding — the concept
        of <strong>the thing in itself</strong> (<em>Ding an sich</em>), which exists beyond our
        perception and remains fundamentally unknowable. This paradox led to criticism from his
        contemporaries, who asked: <strong>If the thing in itself cannot be known, then how did Kant
        himself come to know about it?</strong>
      </p>

      <hr />

      <h2>Positivism and Its Discontents</h2>

      <p>
        Eventually, with the Industrial Revolution, religious influences began to be seen as an
        obstacle to progress. <strong>Auguste Comte</strong> (1798–1857) founded{' '}
        <strong>positivism</strong>, a philosophical approach that emphasized empirical science and
        rational inquiry as the only legitimate sources of knowledge. Comte believed the sciences
        form a hierarchy (mathematics at the base, then physics, chemistry, biology, and culminating
        in sociology) and formulated core positivist principles: empirical observation, scientific
        method as guide, law-like regularities, and rejection of metaphysics.
      </p>

      <p>
        Comte's positivism had a progressive social vision — he believed that as societies enter the
        positive stage, they would achieve intellectual unity and social reform. Subsequent events
        demonstrated this was merely an illusion. The rapid advancement of science, liberated from
        the ethical and mystical constraints of religion, contributed to the devastating{' '}
        <strong>First World War</strong>, where the massive loss of life was largely driven by
        high-tech weaponry.
      </p>

      <p>
        After the war, logical positivism of the <strong>Vienna Circle</strong> emerged, owing its
        birth to the final sentence of Ludwig Wittgenstein's{' '}
        <em>Tractatus Logico-Philosophicus</em> (1921):
      </p>

      <blockquote>
        <p>
          <strong>"Wovon man nicht sprechen kann, darüber muss man schweigen."</strong>{' '}
          (What cannot be spoken about must be kept silent.)
        </p>
      </blockquote>

      <p>
        This phrase defined the ideology of the movement, which became{' '}
        <strong>radical empiricism</strong>, formulated in the{' '}
        <strong>"verification principle"</strong>: a proposition is meaningful only if it can be
        definitively verified by empirical observation or is analytically true (true by definition).
      </p>

      <p>
        However, almost immediately, this principle encountered a problem, wittily described by the
        logical atomist <strong>Bertrand Russell</strong> in{' '}
        <em>Human Knowledge: Its Scope and Limits</em>:
      </p>

      <blockquote>
        <p>
          "Our lives are full of expectations which we usually only become aware of when they fail.
          Suppose you see half a horse at the moment when it comes round a corner; this may interest
          you very little, but if the second half turns out to belong to a cow rather than a horse,
          you will in all likelihood experience a state of extreme surprise which will be almost
          boundless. It must be admitted that such an occurrence is logically quite possible."
        </p>
      </blockquote>

      <p>
        Indeed, the statement <strong>"all swans are white"</strong> holds meaning only as long as
        no black swan is found. The <strong>empirical method of inductive knowledge through
        enumeration of observed cases cannot be considered reliable</strong>.
      </p>

      <hr />

      <h2>Popper, Kuhn, Feyerabend</h2>

      <p>
        Logical positivism was aided by a critical rationalist <strong>Karl Popper</strong>, who, in
        contrast to the verification principle, proposed the <strong>principle of
        falsification</strong>: a theory is scientific only if it can be tested and potentially
        refuted. If there is a possibility of finding a black swan, then it is meaningful to assert
        that all swans are white.
      </p>

      <p>
        This criterion also applies to entire scientific doctrines. For example,{' '}
        <strong>Marxism cannot be falsified</strong> because one cannot clearly imagine a scenario in
        which the class struggle definitively ends — thus it does not meet Popper's standard of
        scientific falsifiability. In contrast, theories that can be tested and potentially
        disproven — like Einstein's theory of relativity — are considered genuinely scientific.
        Popper's key principle: if a theory passes many tests, it isn't verified, only "corroborated"
        and held tentatively. No theory can be considered definitely true.
      </p>

      <p>
        However, the verification principle itself could not be verified, since it was not a
        phenomenon of nature but merely a philosophical claim about language. Moreover, the supposed
        rationality of the positivists was further undermined by <strong>Gödel's Two Incompleteness
        Theorems (1931)</strong>:
      </p>

      <ol>
        <li>
          <strong>First Incompleteness Theorem:</strong> In any sufficiently developed formal system,
          there exist true statements that cannot be proven within that system.
        </li>
        <li>
          <strong>Second Incompleteness Theorem:</strong> No such system can prove its own
          consistency.
        </li>
      </ol>

      <p>
        Criticism of positivism continued when <strong>Willard Van Orman Quine</strong>, in his 1951
        paper <em>"Two Dogmas of Empiricism,"</em> formulated further objections. The logical
        positivists inherited from Kant the distinction between <strong>analytic</strong> (true by
        definition) and <strong>synthetic</strong> (confirmed by experience) judgments. Quine rightly
        pointed out that any analytic judgment consists of elements that are not themselves analytic.
        For example, to prove the statement <em>"All bachelors are unmarried,"</em> one must first
        know from experience who bachelors are and what marriage means. Similarly, all arithmetic
        operations, which Kant considered analytic, are actually not, since understanding them first
        requires <strong>learning arithmetic</strong>.
      </p>

      <p>
        By the 1960s, logical positivism gradually dissolved. Philosophers{' '}
        <strong>Thomas Kuhn</strong> and <strong>Paul Feyerabend</strong> not only criticized the
        positivist approach but called for a reconsideration of the very attitude towards science.
      </p>

      <p>
        Thomas S. Kuhn in <em>The Structure of Scientific Revolutions</em> (1962) noted that the
        scientific community is extremely conservative, profoundly influenced by social and
        psychological factors, and does not recognize discoveries that go beyond established
        stereotypes. Alternative theories are not considered because they don't fit the reigning
        paradigm's rules.
      </p>

      <p>
        Paul Feyerabend took positivist criticism even further. In his 1975 book{' '}
        <em>Against Method</em>, he argued that science cannot have any fixed methodology and
        advocated <strong>"epistemological anarchism."</strong>
      </p>

      <p className={styles.pullQuote}>"Anything goes!" — Paul Feyerabend</p>

      <p>
        He claimed science is not inherently superior to other modes of knowledge such as myth or
        religion, and even argued that "science is a most aggressive and dogmatic religious
        institution." In books like <em>Science in a Free Society</em> (1978), he argued that
        different cultures may have different truth systems and we have no absolute reason to rank
        science above ancient myth, except by our own parochial standards.
      </p>

      <hr />

      <h2>Postmodernism and the Construction of Truth</h2>

      <p>
        In the 1980s, postmodernist thinkers like <strong>Jean-François Lyotard</strong> and{' '}
        <strong>Michel Foucault</strong> argued that science is not the mirror of nature but a
        particular narrative deeply shaped by social, linguistic, and power dynamics. Lyotard
        presented science as socially constructed and as one knowledge system among many, with no
        claim to ultimate validity. He noted two major metanarratives that guided modernity:
      </p>

      <ul>
        <li>
          that knowledge (science) is progressively leading us toward total truth and human
          emancipation, and
        </li>
        <li>that history is moving towards freedom and enlightenment.</li>
      </ul>

      <p>
        Lyotard described knowledge in postmodern societies as splintered into multiple language
        games and contexts. Science is just one "language game," with its own rules, but it does not
        have a privileged claim to represent Truth outside those rules.
      </p>

      <blockquote>
        <p>
          "Truth isn't outside power… truth is produced by virtue of multiple constraints and
          induces regular effects of power… each society has its regime of truth, its 'general
          politics' of truth: the types of discourse it accepts and makes function as true."
          — Michel Foucault
        </p>
      </blockquote>

      <p>
        A typical example of Lyotard and Foucault's concept of power-biased postmodern science is
        <strong> Elon Musk's influence and activity</strong>. He uses science for his ventures
        (SpaceX, Tesla, Neuralink) to promote techno-utopianism, positioning science as the
        solution to humanity's crises — a legitimizing discourse consolidating corporate and
        political influence. By owning X (Twitter), he controls narratives, amplifies right-wing
        voices, and influences political discourse.
      </p>

      <p>
        This meta-narrative approach has advanced to the point where, unlike positivists who claimed
        that a successful experiment reveals a fact of nature, constructivists now argue that the
        validity of an experiment depends on the authority of the experimenters. This raises the
        question: does truth established in this way remain truth, or does it become something else
        entirely?
      </p>

      <p>
        One notable example highlighting how easily the academic community can be misled was the{' '}
        <strong>Sokal affair in 1996</strong>, when physicist Alan Sokal successfully published a
        deliberately absurd article, <em>"Transgressing the Boundaries: Towards a Transformative
        Hermeneutics of Quantum Gravity,"</em> in the humanities journal <em>Social Text</em>. He
        later revealed his hoax to expose postmodern academia's tendency to adopt meaningless
        scientific jargon. A similar but broader attempt, <strong>"Sokal Squared" (2017–2018)</strong>,
        involved Peter Boghossian, James Lindsay, and Helen Pluckrose, who submitted numerous
        nonsensical papers to respected journals, again revealing ideological bias and vulnerability
        to pseudointellectual content in contemporary scholarship.
      </p>

      <hr />

      <h2>Post-Positivism and the Recovery of Science</h2>

      <p>
        This devastating approach to science was not halted but slightly tempered by the
        post-positivist reaction. Thinkers like Popper, Kuhn,{' '}
        <strong>Imre Lakatos</strong>, and <strong>Larry Laudan</strong> moved beyond the naive
        verifications of early positivism without embracing full relativism. Here are some of the
        main post-positivist principles:
      </p>

      <ul>
        <li>
          All theories could be disproven by future observations; none could be known as absolutely
          true; our picture of the world is always incomplete.
        </li>
        <li>
          A hypothesis isn't verified or falsified outright; rather, evidence raises or lowers our
          degree of confidence. Peer review, replication, and community consensus is crucial in
          warranting scientific knowledge.
        </li>
        <li>
          Contemporary philosophy of science often treats theories as <strong>models</strong> of the
          world rather than one-to-one mirrors. Theoretical terms are human constructs that may only
          apply in certain domains or under certain approximations.
        </li>
        <li>
          Science advances by solving problems rather than approaching truth in a straightforward
          way.
        </li>
        <li>
          <strong>Lakatos's research programs:</strong> Scientists work within research programs
          that have a "hard core" of fundamental assumptions and a "protective belt" of auxiliary
          hypotheses that can be adjusted. A progressive research program predicts novel facts and
          expands, whereas a degenerating one only patches itself to accommodate known problems.
        </li>
      </ul>

      <hr />

      <h2>The Rise of Post-Truth</h2>

      <p>
        After all these post-positivism observations, it was quite natural to expect a new form of
        knowledge — and it came. We call it <strong>post-truth</strong>. Post-truth describes a
        cognitive state where emotions and beliefs override facts, making factual refutation nearly
        impossible. Philosophers have long noted this: the Duhem-Quine thesis suggests any theory
        can be shielded from contradiction with enough added assumptions — explaining why flat-earthers
        in space might dismiss their experience as an AI-generated illusion.
      </p>

      <p>
        Classical epistemology focuses on individual knowledge, but post-truth is a{' '}
        <strong>societal condition</strong>. In a complex world, no one can be an expert in
        everything, so people rely on social knowledge shaped by groups, institutions, and shared
        values. Truth depends less on evidence and more on affiliations, trust, and community
        narratives. This is why certain political claims, no matter how false, are embraced by
        specific groups. If a public figure declares that immigrants eat cats and dogs, some will
        believe it — not from malice, but because they trust the source. Ironically, such a figure
        might even run a social network called <em>Truth</em>, reinforcing the post-truth cycle.
      </p>

      <p>
        The rise of social media has dismantled the epistemic structures that once defined the
        "normal world" of the 20th century. Previously, reputable media, universities, and research
        institutions shaped knowledge, refining it over time. Today, expertise has eroded, replaced
        by Twitter-like platforms where popularity — not accuracy — drives discourse, fragmenting
        our understanding of truth.
      </p>

      <p>
        By 2025, AI also raises questions about whether discovery is uniquely human and highlights
        biases in machine learning, where flawed data can reinforce systemic errors. While AI
        reshapes epistemic practices, it hasn't replaced human judgment — only shifted it to
        designing, fine-tuning, and monitoring AI, demanding new frameworks to ensure sound knowledge
        production.
      </p>

      <div className={styles.callout}>
        And so, after centuries of chasing truth, we've arrived at a world where AI generates
        scientific papers, Twitter polls decide reality, and philosophers debate whether knowledge
        still exists at all. Comte's positivism, Popper's falsification, and Foucault's power
        dynamics now compete with deepfakes and influencer "research." Perhaps science was just
        another metanarrative, or maybe we've simply upgraded from{' '}
        <strong>counting angels on needles to counting likes on hot takes</strong>. Either way, the
        post-truth era has spoken: the loudest voice wins, and reality is whatever gets the most
        engagement.
      </div>

      <div className={styles.references}>
        <h2>References</h2>
        <p>Aquinas 2006: Aquinas, Thomas. <em>Summa Theologica.</em> Aquinas Institute, 2006.</p>
        <p>Ayer 1936: Ayer, A. J. <em>Language, Truth and Logic.</em> London: Gollancz, 1936.</p>
        <p>Comte 1853: Comte, Auguste. <em>The Course in Positive Philosophy.</em> London: Chapman, 1853.</p>
        <p>Feyerabend 1975: Feyerabend, Paul. <em>Against Method.</em> London: New Left Books, 1975.</p>
        <p>Foucault 1980: Foucault, Michel. "Truth and Power." In <em>Power/Knowledge.</em> New York: Pantheon, 1980.</p>
        <p>Kuhn 1970: Kuhn, Thomas S. <em>The Structure of Scientific Revolutions.</em> 2nd ed. Chicago: University of Chicago Press, 1970.</p>
        <p>Lakatos 1970: Lakatos, Imre. "Falsification and the Methodology of Scientific Research Programmes." In <em>Criticism and the Growth of Knowledge.</em> Cambridge: Cambridge University Press, 1970.</p>
        <p>Laudan 1977: Laudan, Larry. <em>Progress and Its Problems.</em> Berkeley: University of California Press, 1977.</p>
        <p>Lyotard 1984: Lyotard, Jean-François. <em>The Postmodern Condition.</em> Minneapolis: University of Minnesota Press, 1984.</p>
        <p>O'Neil 2016: O'Neil, Cathy. <em>Weapons of Math Destruction.</em> New York: Crown, 2016.</p>
        <p>Popper 1959: Popper, Karl. <em>The Logic of Scientific Discovery.</em> London: Hutchinson, 1959.</p>
        <p>Quine 1951: Quine, W. V. O. "Two Dogmas of Empiricism." <em>The Philosophical Review</em> 60, no. 1 (1951): 20–43.</p>
        <p>Richardson 2019: Richardson, Alan. "Logical Empiricism." <em>Stanford Encyclopedia of Philosophy,</em> Spring 2019.</p>
      </div>
    </ArticleLayout>
  );
}
