import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSections } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSections />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
