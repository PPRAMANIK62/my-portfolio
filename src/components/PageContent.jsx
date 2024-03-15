"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutSection from "./AboutSection.jsx";
import AchievementSection from "./AchievementSection.jsx";
import EmailSection from "./EmailSection.jsx";
import HeroSection from "./HeroSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";

function PageContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="container mt-24 mx-auto px-8 py-3">
      <motion.div
        className="progress-bar fixed top-16 lg:top-20 left-0 right-0 h-3 bg-purple-500 z-10"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <HeroSection />
      <AchievementSection id={"about"} />
      <AboutSection />
      <AchievementSection id={"projects"} />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
}

export default PageContent;
