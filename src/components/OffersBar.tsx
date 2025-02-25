
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const offers = [
  {
    text: "Spring Collection Launch: Get 15% off with code",
    code: "SPRING24"
  },
  {
    text: "Free Shipping on Orders Over $150 with code",
    code: "FREESHIP"
  },
  {
    text: "New Customer Special: 10% off your first order with",
    code: "WELCOME10"
  },
  {
    text: "Limited Time: Buy One Get One 50% Off with code",
    code: "BOGO50"
  }
];

export const useOffersBarState = () => {
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

  return {
    isVisible,
    setIsVisible,
    isDismissed,
    setIsDismissed
  };
};

const OffersBar = () => {
  const { isVisible, isDismissed, setIsDismissed } = useOffersBarState();
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000); // Change offer every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible || isDismissed) return null;

  const currentOffer = offers[currentOfferIndex];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-nato-400 text-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        <div className="text-sm font-medium text-center transition-opacity duration-300">
          {currentOffer.text}{" "}
          <span className="font-bold animate-pulse">{currentOffer.code}</span>
        </div>
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
