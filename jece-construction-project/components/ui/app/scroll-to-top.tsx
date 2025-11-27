"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface ScrollToTopProps {
  showAfter?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showAfter = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > showAfter);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      type="button"
      onClick={handleScrollToTop}
      id="in-scroll-to-top"
      name="scroll-to-top"
      className={clsx(
        "fixed right-6 bottom-6 cursor-pointer rounded-none size-12 transition-all duration-500 ease-in-out z-50 shadow-lg",
        "hover:bg-app-blue hover:scale-110",
        "bg-app-brown text-white flex items-center justify-center",
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        "ring-2 ring-app-brown/10"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="size-6" />
    </Button>
  );
};

export default ScrollToTop;
