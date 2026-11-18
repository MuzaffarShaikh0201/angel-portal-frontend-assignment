import Section from '../../../components/ui/Section';
import { contactMap } from '../../../content/contact';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './ContactFormSection.module.css';

function ContactFormSection() {
  return (
    <Section tone="alt" labelledBy="contact-form-title">
      <div className={styles.layout}>
        <ContactForm />
        <div className={styles.map}>
          <iframe
            src={contactMap.src}
            title={contactMap.title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <ContactInfo />
    </Section>
  );
}

export default ContactFormSection;
