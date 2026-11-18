import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { campusNews, campusNewsHeading, moreCampusNews } from '../../../content/home';
import Link from '../../../router/Link';
import type { NewsItem } from '../../../types/content';
import styles from './CampusNews.module.css';

function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img
        className={styles.image}
        src={item.image.src}
        alt={item.image.alt}
        width={item.image.width}
        height={item.image.height}
        loading="lazy"
      />
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={item.href} className={styles.link}>
            {item.title}
          </Link>
        </h3>
        {item.author && <p className={styles.author}>{item.author}</p>}
      </div>
    </article>
  );
}

function CampusNews() {
  const { featured, side } = campusNews;
  const half = Math.ceil(side.length / 2);

  return (
    <Section tone="alt" labelledBy="campus-news-title">
      <SectionHeading id="campus-news-title" title={campusNewsHeading.title} />
      <div className={styles.layout}>
        <div className={styles.column}>
          {side.slice(0, half).map((item) => (
            <NewsCard key={item.href} item={item} />
          ))}
        </div>
        <div className={styles.featuredColumn}>
          <NewsCard item={featured} featured />
        </div>
        <div className={styles.column}>
          {side.slice(half).map((item) => (
            <NewsCard key={item.href} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.more}>
        <Button href={moreCampusNews.href}>{moreCampusNews.label}</Button>
      </div>
    </Section>
  );
}

export default CampusNews;
