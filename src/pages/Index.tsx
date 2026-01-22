import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedVideos from "@/components/FeaturedVideos";
import Episodes from "@/components/Episodes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Episodes />
      <FeaturedVideos />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
