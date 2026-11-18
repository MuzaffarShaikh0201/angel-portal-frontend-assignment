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

export type SocialLink = LinkItem & { icon: SocialIconName };

export type SectionCopy = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export type Programme = {
  name: string;
  level?: string;
  ects: string;
  mode: string;
  href: string;
  image: ImageAsset;
};

export type Stat = {
  value: string;
  label: string;
};

export type TextBlock = {
  title: string;
  paragraphs: string[];
};

export type LogoGroup = {
  title: string;
  logos: ImageAsset[];
};

export type NewsItem = {
  title: string;
  href: string;
  image: ImageAsset;
  author?: string;
};

export type GalleryItem = {
  caption: string;
  image: ImageAsset;
};

export type InstagramPost = {
  permalink: string;
};

export type CallToAction = {
  title: string;
  text: string;
  action: LinkItem;
};

export type ContactCard = {
  title: string;
  text: string;
  value: string;
  href?: string;
  icon: ImageAsset;
};

export type FormFieldCopy = {
  label: string;
  placeholder: string;
};
