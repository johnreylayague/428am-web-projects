"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { useDotButton } from "@/hooks/useDotButton";
import CarouselDots from "@/components/ui/app/carousel-dots";
import Link from "next/link";

interface ProjectItemData {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface OurProjectCarouselProps {
  projects: ProjectItemData[];
}

const OurProjectCarousel: React.FC<OurProjectCarouselProps> = ({
  projects,
}) => {
  const [apiZoomCarousel, setApiZoomCarousel] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(apiZoomCarousel);

  return (
    <React.Fragment>
      <Carousel opts={{ slidesToScroll: "auto" }} setApi={setApiZoomCarousel}>
        <CarouselContent className="-ml-7">
          {projects.map((project, idx) => (
            <CarouselItem className="relative basis-1/4 pl-7" key={project.id}>
              <ProjectItem src={project.src} alt={project.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CarouselDots
        className="mt-8"
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        onDotButtonClick={onDotButtonClick}
      />
    </React.Fragment>
  );
};

export default OurProjectCarousel;

type ProjectItemProps = {
  src: string;
  alt: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ src, alt }) => {
  return (
    <Link href="/">
      <div className={cn("min-h-[357px] overflow-hidden size-full")}>
        <img
          src={src}
          alt={alt}
          className="object-cover object-center size-full"
        />
      </div>
    </Link>
  );
};
