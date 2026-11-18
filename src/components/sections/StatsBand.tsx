import { stats, statsHeading } from '../../content/shared';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import styles from './StatsBand.module.css';

type StatsBandProps = {
  eyebrow?: string;
};

function StatsBand({ eyebrow }: StatsBandProps) {
  return (
    <Section tone="dark" labelledBy="stats-title">
      <SectionHeading
        id="stats-title"
        eyebrow={eyebrow}
        title={statsHeading.title}
        align="center"
      />
      <ul className={styles.grid}>
        {stats.map((stat) => (
          <li key={stat.label} className={styles.stat}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default StatsBand;
