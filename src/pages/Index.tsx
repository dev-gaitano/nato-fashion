
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionsPreview from "@/components/CollectionsPreview";
import About from "@/components/About";
import Sustainability from "@/components/Sustainability";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CollectionsPreview />
      <About />
      <Sustainability />
    </div>
  );
};

export default Index;
