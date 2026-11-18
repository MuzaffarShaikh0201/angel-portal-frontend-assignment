import CtaBanner from '../../components/sections/CtaBanner';
import StatsBand from '../../components/sections/StatsBand';
import Accreditations from './sections/Accreditations';
import CampusLife from './sections/CampusLife';
import CampusNews from './sections/CampusNews';
import Hero from './sections/Hero';
import MissionVision from './sections/MissionVision';
import Programmes from './sections/Programmes';
import SuccessStories from './sections/SuccessStories';
import Welcome from './sections/Welcome';

function HomePage() {
  return (
    <>
      <Hero />
      <Programmes />
      <CampusNews />
      <Welcome />
      <StatsBand />
      <MissionVision />
      <CampusLife />
      <SuccessStories />
      <Accreditations />
      <CtaBanner />
    </>
  );
}

export default HomePage;
