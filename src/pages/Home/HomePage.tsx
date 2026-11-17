import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';

// Placeholder until feat/home-page builds the full set of sections.
function HomePage() {
  return (
    <Section labelledBy="home-title">
      <SectionHeading
        id="home-title"
        level={1}
        eyebrow="Think global, Study at Ascencia Malta"
        title="Welcome to Ascencia Malta"
      >
        <p>We are eager to give you the best education at Ascencia Malta</p>
      </SectionHeading>
      <Button href="/contact">Apply Now</Button>
    </Section>
  );
}

export default HomePage;
