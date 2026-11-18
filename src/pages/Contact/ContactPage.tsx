import CtaBanner from '../../components/sections/CtaBanner';
import PageBanner from '../../components/sections/PageBanner';
import { contactBanner } from '../../content/contact';
import ContactFormSection from './sections/ContactFormSection';

function ContactPage() {
  return (
    <>
      <PageBanner title={contactBanner.title} />
      <ContactFormSection />
      <CtaBanner />
    </>
  );
}

export default ContactPage;
