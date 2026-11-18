import Carousel from '../../../components/ui/Carousel';
import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { campusLife, campusLifeHeading } from '../../../content/home';
import styles from './CampusLife.module.css';

/** Photo carousel of campus life; each photo carries its caption over the bottom edge. */
function CampusLife() {
  return (
    <Section tone="alt" labelledBy="campus-life-title">
      <SectionHeading id="campus-life-title" title={campusLifeHeading.title} align="center" />
      <Carousel label={campusLifeHeading.title} perView={{ base: 1.15, sm: 2, md: 3, lg: 4 }}>
        {campusLife.map(({ caption, image }) => (
          <figure key={image.src} className={styles.photo}>
            <img
              className={styles.image}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
            <figcaption className={styles.caption}>{caption}</figcaption>
          </figure>
        ))}
      </Carousel>
    </Section>
  );
}

export default CampusLife;
