import { useEffect, useState } from 'react';
import { headerCta, logo, mainNav } from '../../content/site';
import Link from '../../router/Link';
import { buttonClassName } from '../ui/buttonClassName';
import Container from '../ui/Container';
import styles from './Header.module.css';

const NAV_ID = 'main-nav';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={NAV_ID}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav
          id={NAV_ID}
          aria-label="Main"
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
        >
          <ul className={styles.navList}>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={headerCta.href} className={buttonClassName('primary')}>
            {headerCta.label}
          </Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
