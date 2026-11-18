import Section from '../../../components/ui/Section';
import { lecturers } from '../../../content/about';
import styles from './Lecturers.module.css';

function Lecturers() {
  const { title, intro, paragraphs, image } = lecturers;

  return (
    <Section labelledBy="lecturers-title">
      <div className={styles.layout}>
        <img
          className={styles.photo}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
        />
        <div className={styles.text}>
          <h2 id="lecturers-title">{title}</h2>
          <p className={styles.intro}>{intro}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Lecturers;
