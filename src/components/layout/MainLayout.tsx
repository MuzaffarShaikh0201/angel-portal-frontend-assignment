import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './MainLayout.module.css';

/** Page shell shared by every route: skip link, header, main landmark, footer. */
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
    </div>
  );
}

export default MainLayout;
