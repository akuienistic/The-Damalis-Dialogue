import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedVideos from "@/components/FeaturedVideos";
import Episodes from "@/components/Episodes";
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
