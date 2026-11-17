import { useContext } from 'react';
import { RouterContext, type RouterValue } from './RouterContext';

/** Access the current path and navigate(); must be used inside <RouterProvider>. */
export function useRouter(): RouterValue {
  const router = useContext(RouterContext);
  if (!router) {
    throw new Error('useRouter must be used inside <RouterProvider>');
  }
  return router;
}
