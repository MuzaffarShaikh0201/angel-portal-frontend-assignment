import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { coreValueIcon, coreValues, coreValuesHeading } from '../../../content/about';
import styles from './CoreValues.module.css';

/** "Our Core Value": four diversity statements, each with the graduation-cap icon. */
function CoreValues() {
  return (
    <Section tone="alt" labelledBy="core-values-title">
      <SectionHeading id="core-values-title" title={coreValuesHeading.title} align="center">
        <p>{coreValuesHeading.intro}</p>
      </SectionHeading>
      <ul className={styles.grid}>
        {coreValues.map((value) => (
          <li key={value.title} className={styles.card}>
            <span className={styles.icon}>
              <img
                src={coreValueIcon.src}
                alt={coreValueIcon.alt}
                width={coreValueIcon.width}
                height={coreValueIcon.height}
                loading="lazy"
              />
            </span>
            <div className={styles.body}>
              <h3 className={styles.title}>{value.title}</h3>
              {value.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CoreValues;
