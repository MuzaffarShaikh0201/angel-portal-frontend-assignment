import { pageBannerBackground } from '../../content/shared';
import Container from '../ui/Container';
import styles from './PageBanner.module.css';

type PageBannerProps = {
  title: string;
  intro?: string;
};

function PageBanner({ title, intro }: PageBannerProps) {
  return (
    <section className={styles.banner} aria-labelledby="page-title">
      <img
        className={styles.background}
        src={pageBannerBackground.src}
        alt={pageBannerBackground.alt}
        width={pageBannerBackground.width}
        height={pageBannerBackground.height}
        fetchPriority="high"
      />
      <Container>
        <div className={styles.content}>
          <h1 id="page-title" className={styles.title}>
            {title}
          </h1>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
      </Container>
    </section>
  );
}

export default PageBanner;
