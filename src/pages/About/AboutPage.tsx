import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';

// Placeholder until feat/about-page builds the full set of sections.
function AboutPage() {
  return (
    <Section tone="alt" labelledBy="about-title">
      <SectionHeading
        id="about-title"
        level={1}
        eyebrow="About us"
        title="We are eager to give you the best education"
      />
    </Section>
  );
}

export default AboutPage;
