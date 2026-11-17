import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  /** Small uppercase label above the title, e.g. "Our academics offerings". */
  eyebrow?: string;
  title: string;
  /** Optional supporting paragraph under the title. */
  children?: ReactNode;
  /** Heading level: h1 for page banners, h2 for page sections. */
  level?: 1 | 2;
  align?: 'start' | 'center';
  /** Set when the parent Section uses labelledBy. */
  id?: string;
};

/** Eyebrow + title + optional intro, the repeated heading pattern on every section. */
function SectionHeading({
  eyebrow,
  title,
  children,
  level = 2,
  align = 'start',
  id,
}: SectionHeadingProps) {
  const Heading = level === 1 ? 'h1' : 'h2';

  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {children && <div className={styles.intro}>{children}</div>}
    </header>
  );
}

export default SectionHeading;
