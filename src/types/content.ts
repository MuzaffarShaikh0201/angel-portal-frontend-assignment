/** Shared content models. Content files in src/content are typed against these. */

export type LinkItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LinkGroup = {
  title: string;
  links: LinkItem[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type SocialIconName = 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok';

/** label is used as the accessible name only; the original shows icons without text. */
export type SocialLink = LinkItem & { icon: SocialIconName };

/** Eyebrow + title + optional intro: the heading block used by most sections. */
export type SectionCopy = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

/** A programme card. The Award card has no MQF/EQF level on the original. */
export type Programme = {
  name: string;
  level?: string;
  ects: string;
  mode: string;
  href: string;
  image: ImageAsset;
};

/** A figure in the stats band, e.g. { value: '150+', label: 'Courses & Programmes Available' }. */
export type Stat = {
  value: string;
  label: string;
};

/** A titled block of text: core values, mission/vision, about facts. */
export type TextBlock = {
  title: string;
  paragraphs: string[];
};

export type LogoGroup = {
  title: string;
  logos: ImageAsset[];
};

/** A news story card linking to the full article on the original site. */
export type NewsItem = {
  title: string;
  href: string;
  image: ImageAsset;
  /** Byline, shown on the featured story only. */
  author?: string;
};

/** A captioned photo, e.g. a Campus Life slide. */
export type GalleryItem = {
  caption: string;
  image: ImageAsset;
};

/** An Instagram post shown through Instagram's own embed. */
export type InstagramPost = {
  permalink: string;
};

export type CallToAction = {
  title: string;
  text: string;
  action: LinkItem;
};

/** One of the cards beside the contact form (call / email / location). */
export type ContactCard = {
  title: string;
  text: string;
  value: string;
  href?: string;
};

export type FormFieldCopy = {
  label: string;
  placeholder: string;
};
