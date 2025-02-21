
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionsPreview from "@/components/CollectionsPreview";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CollectionsPreview />
      <About />
      <Partners />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
