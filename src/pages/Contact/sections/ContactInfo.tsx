import SectionHeading from '../../../components/ui/SectionHeading';
import { contactCards, contactInfoHeading } from '../../../content/contact';
import styles from './ContactInfo.module.css';

/**
 * "Let us know how we can help": phone, email and address cards.
 * Rendered inside the form's band (one block on the original), as its own labelled region.
 */
function ContactInfo() {
  return (
    <section className={styles.info} aria-labelledby="contact-info-title">
      <SectionHeading id="contact-info-title" title={contactInfoHeading.title} align="center" />
      <ul className={styles.grid}>
        {contactCards.map((card) => (
          <li key={card.title} className={styles.card}>
            <span className={styles.icon}>
              <img
                src={card.icon.src}
                alt={card.icon.alt}
                width={card.icon.width}
                height={card.icon.height}
                loading="lazy"
              />
            </span>
            <h3 className={styles.title}>{card.title}</h3>
            <p>{card.text}</p>
            {card.href ? (
              <a href={card.href} className={styles.value}>
                {card.value}
              </a>
            ) : (
              <p className={styles.value}>{card.value}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactInfo;
