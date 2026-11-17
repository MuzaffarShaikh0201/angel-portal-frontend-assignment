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
