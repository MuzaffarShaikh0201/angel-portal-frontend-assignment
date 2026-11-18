import Button from '../../../components/ui/Button';
import Container from '../../../components/ui/Container';
import { hero } from '../../../content/home';
import styles from './Hero.module.css';

/** Full-width photo banner holding the page's h1 and its three actions. */
function Hero() {
  const [apply, explore, talk] = hero.actions;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.background}
        src={hero.background.src}
        alt={hero.background.alt}
        width={hero.background.width}
        height={hero.background.height}
        fetchPriority="high"
      />
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {hero.title}
          </h1>
          <p className={styles.text}>{hero.text}</p>
          <div className={styles.actions}>
            <Button href={apply.href}>{apply.label}</Button>
            <Button href={explore.href} variant="inverse">
              {explore.label}
            </Button>
            <Button href={talk.href} variant="ghost">
              {talk.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
