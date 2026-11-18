import type { ReactNode } from 'react';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import styles from './MainLayout.module.css';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;
