import type { ComponentType } from 'react';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

export type Route = {
  path: string;
  title: string;
  component: ComponentType;
};

export const routes: readonly Route[] = [
  {
    path: '/',
    title: 'Ascencia Malta | DBA, MBA, MSc and Accredited Courses (MQF 5–8)',
    component: HomePage,
  },
  {
    path: '/about',
    title: 'About Ascencia Malta | Accredited Higher Education in malta',
    component: AboutPage,
  },
  {
    path: '/contact',
    title: 'Contact Ascencia Malta | Admissions & Programme Enquiries',
    component: ContactPage,
  },
];

export const notFoundRoute: Route = {
  path: '*',
  title: 'Not Found',
  component: NotFoundPage,
};
