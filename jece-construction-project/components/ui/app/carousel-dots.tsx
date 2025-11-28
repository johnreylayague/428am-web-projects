import React from "react";
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (idx: number) => void;
  className?: string;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
  className,
}) => (
  <div className={cn("flex justify-center mt-4 space-x-2", className)}>
    {scrollSnaps.map((_, idx) => {
      return (
        <button
          key={idx}
          onClick={() => onDotButtonClick(idx)}
          className={cn(
            "size-3.5 border-2 cursor-pointer transition-colors duration-300",
            "bg-white border-neutral-950",
            "hover:bg-app-blue hover:border-app-blue",
            idx === selectedIndex && "bg-app-brown border-transparent"
          )}
          aria-label={`Go to slide ${idx + 1}`}
          type="button"
        />
      );
    })}
  </div>
);

export default CarouselDots;
