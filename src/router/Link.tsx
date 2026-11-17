import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { isExternalWebHref, isInternalHref, normalizePath } from './paths';
import { useRouter } from './useRouter';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Ctrl/Cmd/Shift/Alt-clicks and non-left clicks mean "new tab/window": let the browser handle them. */
function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

/**
 * A real <a href> (crawlable, works without JS) that performs client-side navigation
 * for plain left-clicks on internal URLs and marks itself aria-current="page" when active.
 * External links, new-tab targets and modified clicks fall through to the browser.
 * External http(s) links open in a new tab with rel="noopener noreferrer" (as on the original site).
 */
function Link({ href, onClick, target, rel, ...rest }: LinkProps) {
  const { pathname, navigate } = useRouter();
  const internal = isInternalHref(href);
  const isCurrent =
    internal && !href.includes('#') && normalizePath(href) === normalizePath(pathname);

  const external = isExternalWebHref(href);
  const resolvedTarget = target ?? (external ? '_blank' : undefined);
  const resolvedRel = rel ?? (external ? 'noopener noreferrer' : undefined);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !internal || isModifiedClick(event)) return;
    if (resolvedTarget && resolvedTarget !== '_self') return;

    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={handleClick}
      {...rest}
    />
  );
}

export default Link;
