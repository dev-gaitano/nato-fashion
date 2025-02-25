
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const OffersBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-nato-400 text-white transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        <p className="text-sm font-medium text-center">
          Spring Collection Launch: Get 15% off with code{" "}
          <span className="font-bold">SPRING24</span>
        </p>
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute right-4 hover:opacity-75 transition-opacity"
          aria-label="Dismiss offer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default OffersBar;
