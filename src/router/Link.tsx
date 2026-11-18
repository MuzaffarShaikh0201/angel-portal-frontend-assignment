import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { isExternalWebHref, isInternalHref, normalizePath } from './paths';
import { useRouter } from './useRouter';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

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
