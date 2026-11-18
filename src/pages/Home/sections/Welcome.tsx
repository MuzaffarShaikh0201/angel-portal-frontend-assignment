import Section from '../../../components/ui/Section';
import { leaders, welcome } from '../../../content/home';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <Section labelledBy="welcome-title">
      <div className={styles.layout}>
        <div className={styles.message}>
          <h2 id="welcome-title">{welcome.title}</h2>
          {welcome.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className={styles.signOff}>{welcome.signOff}</p>
        </div>
        <ul className={styles.portraits}>
          {leaders.map((leader) => (
            <li key={leader.src}>
              <img
                className={styles.portrait}
                src={leader.src}
                alt={leader.alt}
                width={leader.width}
                height={leader.height}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Welcome;
