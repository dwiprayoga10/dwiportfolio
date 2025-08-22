
import Navbar from "@/components/Navbar"; // tanpa {}

import { ThemeToggle } from "../components/ThemeToggle";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection"; // ✅ default import
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import StarBackground from "@/components/StarBackground";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
