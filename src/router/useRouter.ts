import { useContext } from 'react';
import { RouterContext, type RouterValue } from './RouterContext';

export function useRouter(): RouterValue {
  const router = useContext(RouterContext);
  if (!router) {
    throw new Error('useRouter must be used inside <RouterProvider>');
  }
  return router;
}
