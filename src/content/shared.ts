import type { CallToAction, SectionCopy, Stat } from '../types/content';

/** Content shared by several pages. Verbatim visible copy from ascenciamalta.edu.mt. */

/** Stats band (Home and About). The original animates these up from 0; these are the final values. */
export const statsHeading: SectionCopy = { title: 'Ascencia Malta in Numbers' };

/** About shows an eyebrow above the stats heading; Home does not. */
export const statsEyebrowAbout = 'Explore us';

export const stats: Stat[] = [
  { value: '150+', label: 'Courses & Programmes Available' },
  { value: '26+', label: 'Nationalities on Campus' },
  { value: '3 In 1 Schools', label: 'Higher Education, English Language & Digital Campus' },
  { value: '70%', label: 'of Students Find Employment in Malta' },
  { value: '5 - 8 Level', label: 'Higher Education Programmes' },
  { value: '100%', label: 'Accredited Programmes (MFHEA & ATHE)' },
];

/** "Join us!" call to action (all three pages). */
export const joinUs: CallToAction = {
  title: 'Join us!',
  text: 'Do you wish to join the Ascencia Malta Community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!',
  action: { label: 'GET IN TOUCH', href: '/contact' },
};
