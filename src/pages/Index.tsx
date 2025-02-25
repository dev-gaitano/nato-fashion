
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionsPreview from "@/components/CollectionsPreview";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import OffersBar from "@/components/OffersBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <OffersBar />
      <Navbar />
      <Hero />
      <CollectionsPreview />
      <About />
      <Partners />
      <Testimonials />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
