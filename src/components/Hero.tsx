
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f3e8e2_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#e0cec7_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 bg-nato-100 text-nato-800 rounded-full text-sm font-medium">
            Embracing Diversity & Sustainability
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-tight">
            Where Fashion Meets
            <br />
            <span className="text-nato-700">Cultural Authenticity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of sustainable, inclusive fashion that celebrates
            African craftsmanship and embraces all bodies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#collections"
              className="px-8 py-3 bg-nato-800 text-white rounded-full font-medium hover-lift inline-flex items-center gap-2 group"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#about"
              className="px-8 py-3 border border-nato-800 text-nato-800 rounded-full font-medium hover-lift"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
