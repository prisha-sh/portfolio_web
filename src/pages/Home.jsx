import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { TechStackSection } from "../components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExtracurricularsSection } from "../components/ExtracurricularsSection";
import { LeadershipSection } from "../components/LeadershipSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

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
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExtracurricularsSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

