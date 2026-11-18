import type { ReactNode } from 'react';
import Container from './Container';
import styles from './Section.module.css';

export type SectionTone = 'default' | 'alt' | 'dark';

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  labelledBy?: string;
};

function Section({ children, tone = 'default', id, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${styles.section} ${styles[tone]}`}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
