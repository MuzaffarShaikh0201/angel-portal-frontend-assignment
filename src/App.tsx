import Button from './components/ui/Button';
import Section from './components/ui/Section';
import SectionHeading from './components/ui/SectionHeading';

// Temporary shell to exercise the design system; replaced by the router and layout in feat/router-layout.
function App() {
  return (
    <main>
      <Section labelledBy="welcome-title">
        <SectionHeading
          id="welcome-title"
          level={1}
          eyebrow="Think global, Study at Ascencia Malta"
          title="Welcome to Ascencia Malta"
        >
          <p>We are eager to give you the best education at Ascencia Malta</p>
        </SectionHeading>
        <Button href="#">Apply Now</Button>
      </Section>
    </main>
  );
}

export default App;
