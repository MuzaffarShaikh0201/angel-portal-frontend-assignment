import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { accreditationGroups, accreditationsHeading } from '../../../content/home';
import styles from './Accreditations.module.css';

function Accreditations() {
  return (
    <Section tone="alt" labelledBy="accreditations-title">
      <SectionHeading id="accreditations-title" title={accreditationsHeading.title} align="center">
        <p>{accreditationsHeading.intro}</p>
      </SectionHeading>
      <div className={styles.groups}>
        {accreditationGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.logos}>
              {group.logos.map((logo) => (
                <li key={logo.src} className={styles.logoCard}>
                  <img
                    className={styles.logo}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Accreditations;
