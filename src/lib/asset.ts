/**
 * Images are hotlinked from the original site rather than copied into the repo.
 * Every image URL is built here, so moving to self-hosted assets or a CDN is a one-line change.
 */
export const ASSET_BASE = 'https://www.ascenciamalta.edu.mt/assets/img';

/** asset('team/tess.jpg') → 'https://www.ascenciamalta.edu.mt/assets/img/team/tess.jpg' */
export function asset(path: string): string {
  return `${ASSET_BASE}/${path.replace(/^\/+/, '')}`;
}
