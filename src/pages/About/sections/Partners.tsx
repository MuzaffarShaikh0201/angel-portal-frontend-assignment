import Carousel from '../../../components/ui/Carousel';
import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { partners, partnersHeading } from '../../../content/about';
import styles from './Partners.module.css';

function Partners() {
  return (
    <Section tone="alt" labelledBy="partners-title">
      <SectionHeading id="partners-title" title={partnersHeading.title} align="center">
        <p>{partnersHeading.intro}</p>
      </SectionHeading>
      <Carousel label={partnersHeading.title} perView={{ base: 2, sm: 3, md: 4, lg: 5 }}>
        {partners.map((logo) => (
          <div key={logo.src} className={styles.logoCard}>
            <img
              className={styles.logo}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </Section>
  );
}

export default Partners;
