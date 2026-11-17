import {
  campus,
  copyright,
  footerContact,
  footerLinkGroups,
  legalLinks,
  logo,
  newsletters,
  socialLinks,
} from '../../content/site';
import Link from '../../router/Link';
import Container from '../ui/Container';
import { socialIconPaths } from '../ui/socialIconPaths';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
            />
          </Link>
          <address className={styles.address}>
            <strong>{campus.title}</strong>
            {campus.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <Link href={newsletters.href} className={styles.strongLink}>
            {newsletters.label}
          </Link>
          <ul aria-label="Social media" className={styles.social}>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <Link href={social.href} className={styles.socialLink} aria-label={social.label}>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d={socialIconPaths[social.icon]} fill="currentColor" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {footerLinkGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className={styles.heading}>{group.title}</h2>
            <ul className={styles.list}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <ul className={styles.list} aria-label="Contact">
            {footerContact.map((item) => (
              <li key={item.href}>
                <span className={styles.contactLabel}>{item.label}</span>
                <a href={item.href} className={styles.strongLink}>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className={styles.bottom}>
        <Container className={styles.bottomInner}>
          <span>{copyright}</span>
          <ul className={styles.legal}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
