import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';

// Mirrors the original site's 404 page, which shows only "404" and "Not Found".
function NotFoundPage() {
  return (
    <Section labelledBy="not-found-title">
      <SectionHeading id="not-found-title" level={1} eyebrow="404" title="Not Found" />
    </Section>
  );
}

export default NotFoundPage;
