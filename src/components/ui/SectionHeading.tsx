import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  level?: 1 | 2;
  align?: 'start' | 'center';
  id?: string;
};

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
