import { createContext } from 'react';

export type RouterValue = {
  /** Current path, e.g. "/about". */
  pathname: string;
  /** Client-side navigation to an internal URL (path, optional query and hash). */
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterValue | null>(null);
