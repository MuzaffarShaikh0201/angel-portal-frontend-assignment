import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { RouterContext } from './RouterContext';

type Location = { pathname: string; hash: string };

function readLocation(): Location {
  return { pathname: window.location.pathname, hash: window.location.hash };
}

/**
 * Minimal client-side router built on the History API.
 * - navigate() pushes a history entry and re-renders with the new path.
 * - popstate (browser back/forward) re-syncs state from window.location.
 * - After a navigate(), the page scrolls to the #hash target if present, otherwise to the top.
 */
function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<Location>(readLocation);
  // Scroll only after our own navigations (and an initial #hash); back/forward keeps the browser's behaviour.
  const scrollPending = useRef(window.location.hash !== '');

  useEffect(() => {
    const onPopState = () => setLocation(readLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!scrollPending.current) return;
    scrollPending.current = false;

    const target = location.hash
      ? document.getElementById(decodeURIComponent(location.hash.slice(1)))
      : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.href);
    const next = url.pathname + url.search + url.hash;
    const current = window.location.pathname + window.location.search + window.location.hash;

    // Re-clicking the current link scrolls again but doesn't add a duplicate history entry.
    if (next !== current) {
      window.history.pushState(null, '', next);
    }
    scrollPending.current = true;
    setLocation({ pathname: url.pathname, hash: url.hash });
  }, []);

  const value = useMemo(
    () => ({ pathname: location.pathname, navigate }),
    [location.pathname, navigate],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export default RouterProvider;
