import Carousel from '../../../components/ui/Carousel';
import Section from '../../../components/ui/Section';
import SectionHeading from '../../../components/ui/SectionHeading';
import { successStories, successStoriesHeading } from '../../../content/home';
import styles from './SuccessStories.module.css';

function embedUrl(permalink: string): string {
  return `${permalink.replace(/\/?$/, '/')}embed/captioned/`;
}

function SuccessStories() {
  const { eyebrow, title, intro } = successStoriesHeading;

  return (
    <Section labelledBy="success-stories-title">
      <SectionHeading id="success-stories-title" eyebrow={eyebrow} title={title} align="center">
        <p>{intro}</p>
      </SectionHeading>
      <Carousel label={title} perView={{ base: 1, sm: 2, md: 3 }}>
        {successStories.map((post, index) => (
          <iframe
            key={post.permalink}
            className={styles.embed}
            src={embedUrl(post.permalink)}
            title={`Instagram reel ${index + 1}`}
            loading="lazy"
            allowFullScreen
          />
        ))}
      </Carousel>
    </Section>
  );
}

export default SuccessStories;
