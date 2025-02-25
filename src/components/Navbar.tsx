
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useOffersBarState } from "./OffersBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isVisible: showOffersBar, isDismissed } = useOffersBarState();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      } ${showOffersBar && !isDismissed ? "mt-[40px]" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-heading font-semibold">
            NATO
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#collections">Collections</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#sustainability">Sustainability</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t">
            <div className="flex flex-col space-y-4 p-4">
              <MobileNavLink href="/#collections" onClick={() => setIsMobileMenuOpen(false)}>
                Collections
              </MobileNavLink>
              <MobileNavLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/#sustainability" onClick={() => setIsMobileMenuOpen(false)}>
                Sustainability
              </MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg font-medium text-gray-700 hover:text-black transition-colors block py-2"
  >
    {children}
  </a>
);

export default Navbar;
