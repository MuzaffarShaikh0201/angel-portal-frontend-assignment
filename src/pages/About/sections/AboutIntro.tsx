import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { aboutFacts, aboutIntro, aboutMission } from '../../../content/about';
import styles from './AboutIntro.module.css';

/** Location and founding facts, the "About" text, then the mission with the graduation photo (as on the original). */
function AboutIntro() {
  const { image } = aboutMission;

  return (
    <Section labelledBy="about-intro-title">
      <dl className={styles.facts}>
        {aboutFacts.map((fact) => (
          <div key={fact.title} className={styles.fact}>
            <dt className={styles.label}>{fact.title}</dt>
            {fact.paragraphs.map((line) => (
              <dd key={line}>{line}</dd>
            ))}
          </div>
        ))}
      </dl>

      <div className={styles.about}>
        <SectionHeading
          id="about-intro-title"
          eyebrow={aboutIntro.eyebrow}
          title={aboutIntro.title}
        />
        <div className={styles.text}>
          {aboutIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.mission}>
        <h3 className={styles.label}>{aboutMission.title}</h3>
        {aboutMission.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.missionText}>
            {paragraph}
          </p>
        ))}
      </div>

      <img
        className={styles.photo}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
    </Section>
  );
}

export default AboutIntro;
