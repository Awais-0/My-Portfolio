import HeroSection from "../components/HeroSection";
import Works from '../components/Projects';
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen transition-all duration-300">
      {/* Hero Section */}
      <HeroSection />
      
      <section id="about" className="scroll-mt-24">
      <AboutSection />
      </section>
      

      <section id="projects" className="scroll-mt-24">
        <Works />
      </section>
      
      <section id="skills" className="scroll-mt-24">
        <SkillsSection />
      </section>

      <section id="testimonials" className="scroll-mt-24">
        <TestimonialsSection />
      </section>

    </main>
  );
};

export default Home;
