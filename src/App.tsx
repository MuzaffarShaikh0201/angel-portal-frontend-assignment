import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import { notFoundRoute, routes } from './routes';
import { matchRoute } from './router/paths';
import { useRouter } from './router/useRouter';

/** Resolves the current path to a page, keeps document.title in sync and renders it inside the layout. */
function App() {
  const { pathname } = useRouter();
  const route = matchRoute(routes, pathname) ?? notFoundRoute;
  const Page = route.component;

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    <MainLayout>
      <Page />
    </MainLayout>
  );
}

export default App;
