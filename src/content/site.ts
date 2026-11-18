import { asset } from '../lib/asset';
import type { ContactItem, ImageAsset, LinkGroup, LinkItem, SocialLink } from '../types/content';

const ORIGIN = 'https://www.ascenciamalta.edu.mt';

export const logo: ImageAsset = {
  src: asset('logo/Ascencia-Malta-Logo.svg'),
  alt: 'Ascencia Malta Logo',
  width: 1050,
  height: 385,
};

export const phone: LinkItem = { label: '+356 7965 0480', href: 'tel:+35679650480' };
export const email: LinkItem = {
  label: 'info@ascenciamalta.mt',
  href: 'mailto:info@ascenciamalta.mt',
};
export const officeHours = 'Mon-Fri from 8:00 to 17:00';

export const mainNav: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const headerCta: LinkItem = { label: 'Study with Us', href: `${ORIGIN}/enrol-form` };

export const campus = {
  title: 'Floriana Campus :',
  lines: ['23 Vincenzo Dimech Rd', 'Floriana, FRN 1502, Malta'],
};

export const newsletters: LinkItem = { label: 'Newsletters', href: `${ORIGIN}/newsletters` };

export const socialLinks: SocialLink[] = [
  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/ascencia.malta' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/ascenciamalta' },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ascencia-malta-business-school/',
  },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@ascenciamalta' },
  { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@ascenciamalta' },
];

export const footerLinkGroups: LinkGroup[] = [
  {
    title: 'Programmes',
    links: [
      { label: 'Doctorate of Business Administration (DBA)', href: `${ORIGIN}/dba-degrees` },
      { label: 'MBA Degrees', href: `${ORIGIN}/masters-of-business-administration` },
      { label: 'Master Degrees', href: `${ORIGIN}/masters-degrees` },
      {
        label: 'Postgraduate Diploma Programmes',
        href: `${ORIGIN}/postgraduate-diploma-programmes`,
      },
      { label: 'Bachelor Degree', href: `${ORIGIN}/bachelor-degrees` },
      { label: 'Undergraduate Diploma Programmes', href: `${ORIGIN}/diploma-programmes` },
      { label: 'Award Certificates', href: `${ORIGIN}/award-certificates` },
    ],
  },
  {
    title: 'English language courses',
    links: [
      {
        label: 'English for Specific Purposes (ESP)',
        href: `${ORIGIN}/english-for-specific-purposes`,
      },
      { label: 'General English', href: `${ORIGIN}/english-school/general-english` },
      { label: 'Business English', href: `${ORIGIN}/english-school/business-english-course` },
      { label: 'IELTS Preparation', href: `${ORIGIN}/english-school/ielts-exam-preparation` },
      {
        label: 'CAE Preparation',
        href: `${ORIGIN}/english-school/cambridge-advanced-english-exam-preparation`,
      },
      {
        label: 'FCE Preparation',
        href: `${ORIGIN}/english-school/first-certificate-english-exam-preparation`,
      },
    ],
  },
];

export const footerContact: ContactItem[] = [
  { label: 'Email Us', value: email.label, href: email.href },
  { label: 'Phone Number:', value: phone.label, href: phone.href },
  {
    label: 'Erasmus + mobility:',
    value: 'erasmus@ascenciamalta.mt',
    href: 'mailto:erasmus@ascenciamalta.mt',
  },
];

export const copyright = '© 2026 Ascencia Malta - License No: 2021-018';

export const legalLinks: LinkItem[] = [
  { label: 'Terms & Conditions', href: `${ORIGIN}/terms-and-conditions` },
  { label: 'Privacy Policy', href: `${ORIGIN}/privacy-policy` },
];
