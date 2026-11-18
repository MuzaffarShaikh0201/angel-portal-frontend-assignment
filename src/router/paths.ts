export function isInternalHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}

export function isExternalWebHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function matchRoute<T extends { path: string }>(
  routes: readonly T[],
  pathname: string,
): T | undefined {
  const path = normalizePath(pathname);
  return routes.find((route) => route.path === path);
}
