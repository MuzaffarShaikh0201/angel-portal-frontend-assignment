import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { missionVision, missionVisionHeading } from '../../../content/home';
import styles from './MissionVision.module.css';

/** Two side-by-side statements: Our Mission and Our Vision. */
function MissionVision() {
  return (
    <Section labelledBy="mission-vision-title">
      <SectionHeading id="mission-vision-title" title={missionVisionHeading.title} />
      <div className={styles.grid}>
        {missionVision.map((block) => (
          <article key={block.title} className={styles.card}>
            <h3>{block.title}</h3>
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default MissionVision;
