import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import PageContent from "@/components/PageContent.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screenm flex-col container mx-auto px-12 py-4">
      <Navbar />
      <PageContent />
      <Footer />
    </main>
  );
}
