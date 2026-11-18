import type { ImageAsset } from '../types/content';

/**
 * Images are hotlinked from the original site rather than copied into the repo.
 * Every image URL is built here, so moving to self-hosted assets or a CDN is a one-line change.
 */
export const ASSET_BASE = 'https://www.ascenciamalta.edu.mt/assets/img';

/**
 * asset('team/tess.jpg') → 'https://www.ascenciamalta.edu.mt/assets/img/team/tess.jpg'.
 * The path is URL-encoded, as some original file names contain spaces.
 */
export function asset(path: string): string {
  return `${ASSET_BASE}/${encodeURI(path.replace(/^\/+/, ''))}`;
}

/**
 * Builds a typed image record. width/height are the file's natural size, so the browser
 * reserves the right space before the hotlinked image loads (no layout shift).
 */
export function image(path: string, alt: string, width: number, height: number): ImageAsset {
  return { src: asset(path), alt, width, height };
}
