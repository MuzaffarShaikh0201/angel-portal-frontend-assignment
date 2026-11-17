import type { ReactNode } from 'react';
import Container from './Container';
import styles from './Section.module.css';

export type SectionTone = 'default' | 'alt' | 'dark';

type SectionProps = {
  children: ReactNode;
  /** Background treatment: white, warm off-white, or the dark ink band. */
  tone?: SectionTone;
  /** Anchor target for in-page links, e.g. "programmes". */
  id?: string;
  /** Id of the section's heading, so screen readers announce the region by name. */
  labelledBy?: string;
};

/** A full-width page band with vertical rhythm and a centred container. */
function Section({ children, tone = 'default', id, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${styles.section} ${styles[tone]}`}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
