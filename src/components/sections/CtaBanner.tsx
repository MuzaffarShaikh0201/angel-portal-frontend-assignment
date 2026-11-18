import { joinUs } from '../../content/shared';
import Button from '../ui/Button';
import Section from '../ui/Section';
import styles from './CtaBanner.module.css';

function CtaBanner() {
  return (
    <Section labelledBy="join-us-title">
      <div className={styles.banner}>
        <div className={styles.copy}>
          <h2 id="join-us-title" className={styles.title}>
            {joinUs.title}
          </h2>
          <p>{joinUs.text}</p>
        </div>
        <Button href={joinUs.action.href} variant="inverse" className={styles.action}>
          {joinUs.action.label}
        </Button>
      </div>
    </Section>
  );
}

export default CtaBanner;
