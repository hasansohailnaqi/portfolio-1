import AboutSection from './components/AboutSection';
import Certification from './components/Certification';
import HeroSection from './components/HeroSection';
import Project from './components/Project';
export const dynamic = "force-dynamic";
export default  function Home() {
  return (
    <div>
    <HeroSection />
    <AboutSection />
    <Project />
    <Certification />
      </div>
)}
