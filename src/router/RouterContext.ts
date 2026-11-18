import { createContext } from 'react';

export type RouterValue = {
  pathname: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterValue | null>(null);
