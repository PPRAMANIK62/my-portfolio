import AboutSection from "@/components/AboutSection.jsx";
import AchievementSection from "@/components/AchievementSection.jsx";
import EmailSection from "@/components/EmailSection.jsx";
import Footer from "@/components/Footer.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "@/components/Navbar.jsx";
import ProjectsSection from "@/components/ProjectsSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screenm flex-col container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-8 py-3">
        <HeroSection />
        <AchievementSection id={"about"} />
        <AboutSection />
        <AchievementSection id={"projects"} />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
