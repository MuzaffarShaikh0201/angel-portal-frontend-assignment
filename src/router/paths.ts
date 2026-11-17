/** True for same-origin paths ("/about", "/#programmes"); false for "https://…", "mailto:", "//cdn…". */
export function isInternalHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}

/** True for absolute http(s) URLs, which open in a new tab. mailto:/tel: links are neither. */
export function isExternalWebHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/** Removes trailing slashes so "/about/" and "/about" resolve to the same route. */
export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Finds the route whose path equals the (normalised) pathname. */
export function matchRoute<T extends { path: string }>(
  routes: readonly T[],
  pathname: string,
): T | undefined {
  const path = normalizePath(pathname);
  return routes.find((route) => route.path === path);
}
