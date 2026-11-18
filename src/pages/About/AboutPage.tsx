import CtaBanner from '../../components/sections/CtaBanner';
import PageBanner from '../../components/sections/PageBanner';
import StatsBand from '../../components/sections/StatsBand';
import { aboutBanner } from '../../content/about';
import { statsEyebrowAbout } from '../../content/shared';
import AboutIntro from './sections/AboutIntro';
import CoreValues from './sections/CoreValues';
import Lecturers from './sections/Lecturers';
import Partners from './sections/Partners';

/** About: sections in the same order as the original page. */
function AboutPage() {
  return (
    <>
      <PageBanner title={aboutBanner.title} intro={aboutBanner.intro} />
      <AboutIntro />
      <CoreValues />
      <Lecturers />
      <StatsBand eyebrow={statsEyebrowAbout} />
      <Partners />
      <CtaBanner />
    </>
  );
}

export default AboutPage;
