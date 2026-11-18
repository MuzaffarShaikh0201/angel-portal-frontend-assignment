import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { programmes, programmesHeading } from '../../../content/home';
import Link from '../../../router/Link';
import type { Programme } from '../../../types/content';
import styles from './Programmes.module.css';

function ProgrammeCard({ programme }: { programme: Programme }) {
  const { name, level, ects, mode, href, image } = programme;

  return (
    <li className={styles.card}>
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
      <div className={styles.body}>
        <h3 className={styles.name}>
          <Link href={href} className={styles.link}>
            {name}
          </Link>
        </h3>
        {level && <p className={styles.level}>{level}</p>}
        <ul className={styles.meta}>
          <li>{ects}</li>
          <li>{mode}</li>
        </ul>
      </div>
    </li>
  );
}

function Programmes() {
  return (
    <Section id="programmes" labelledBy="programmes-title">
      <SectionHeading id="programmes-title" title={programmesHeading.title} />
      <ul className={styles.grid}>
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.name} programme={programme} />
        ))}
      </ul>
    </Section>
  );
}

export default Programmes;
