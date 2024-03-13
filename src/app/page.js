import AboutSection from "@/components/AboutSection.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Navbar from "@/components/Navbar.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screenm flex-col container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-8 py-3">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
