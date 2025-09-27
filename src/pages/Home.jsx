import HeroSection from "../components/HeroSection";
import Works from '../components/Projects';
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <main className="pt-20 md:pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen transition-all duration-300">
      {/* Hero Section */}
      <section id="home" className="scroll-mt-24">
      <HeroSection />
      </section>
      
      <section id="about" className="scroll-mt-24">
      <AboutSection />
      </section>
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24" id="projects">
        <Works />
      </section>
      
      <section id="skills" className="scroll-mt-24">
        <SkillsSection />
      </section>

    </main>
  );
};

export default Home;
