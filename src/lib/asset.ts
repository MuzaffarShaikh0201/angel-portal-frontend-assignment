import type { ImageAsset } from '../types/content';

export const ASSET_BASE = 'https://www.ascenciamalta.edu.mt/assets/img';

export function asset(path: string): string {
  return `${ASSET_BASE}/${encodeURI(path.replace(/^\/+/, ''))}`;
}

export function image(path: string, alt: string, width: number, height: number): ImageAsset {
  return { src: asset(path), alt, width, height };
}
