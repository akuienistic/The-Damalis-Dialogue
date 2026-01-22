import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Episodes from "@/components/Episodes";
import FeaturedVideos from "@/components/FeaturedVideos";
import Pricing from "@/components/Pricing";
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
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
