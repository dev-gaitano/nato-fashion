
import { useEffect } from "react";
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
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections except Hero (which should always be visible)
    document.querySelectorAll('section:not(#hero)').forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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
