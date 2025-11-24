"use client";
import SectionHeader from "@/components/ui/app/section-header-secondary";

import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { cn } from "@/lib/utils";

interface OurProjectsProps {}

const placeholderImages = [
  {
    id: 1,
    src: "https://placehold.co/120x120?text=Project+1",
    alt: "Project 1",
    category: "All",
  },
  {
    id: 2,
    src: "https://placehold.co/120x120?text=Project+2",
    alt: "Project 2",
    category: "ArchitectureBuilding",
  },
  {
    id: 3,
    src: "https://placehold.co/120x120?text=Project+3",
    alt: "Project 3",
    category: "Construction",
  },
  {
    id: 4,
    src: "https://placehold.co/120x120?text=Project+4",
    alt: "Project 4",
    category: "Industrial",
  },
  {
    id: 5,
    src: "https://placehold.co/120x120?text=Project+5",
    alt: "Project 5",
    category: "All",
  },
  {
    id: 6,
    src: "https://placehold.co/120x120?text=Project+6",
    alt: "Project 6",
    category: "ArchitectureBuilding",
  },
  {
    id: 7,
    src: "https://placehold.co/120x120?text=Project+7",
    alt: "Project 7",
    category: "Industrial",
  },
  {
    id: 8,
    src: "https://placehold.co/120x120?text=Project+8",
    alt: "Project 8",
    category: "Construction",
  },
  {
    id: 9,
    src: "https://placehold.co/120x120?text=Project+9",
    alt: "Project 9",
    category: "All",
  },
  {
    id: 10,
    src: "https://placehold.co/120x120?text=Project+10",
    alt: "Project 10",
    category: "ArchitectureBuilding",
  },
];

const projectFilters = [
  { key: "All", label: "All Projects" },
  { key: "ArchitectureBuilding", label: "Architecture Building" },
  { key: "Construction", label: "Construction" },
  { key: "Industrial", label: "Industrial" },
];

const OurProjects: React.FC<OurProjectsProps> = () => {
  const [apiZoomCarousel, setApiZoomCarousel] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  useEffect(() => {
    if (!apiZoomCarousel) {
      return;
    }

    const updateIndex = () => {
      setCurrentIndex(apiZoomCarousel.selectedScrollSnap());
    };

    updateIndex();

    apiZoomCarousel.on("select", updateIndex);

    return () => {
      apiZoomCarousel.off("select", updateIndex);
    };
  }, [apiZoomCarousel]);

  // Filter images based on selected filter
  const filteredImages =
    selectedFilter === "All"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === selectedFilter);

  // Calculate number of dots for nav based on image count
  const dotCount = filteredImages.length <= 3 ? 1 : 2;

  return (
    <React.Fragment>
      <Wrapper className="pt-20 pb-20">
        <Container>
          <SectionHeader label="Projects" title="Our Projects" />

          {/* Start: Project Filter Tabs */}
          <ul className="flex gap-4 justify-center mb-10">
            {projectFilters.map((filter) => (
              <li key={filter.key}>
                <button
                  type="button"
                  onClick={() => setSelectedFilter(filter.key)}
                  className={cn(
                    "px-[30px] py-[8px] uppercase cursor-pointer text-app-dark font-medium border-2 border-transparent transition-colors duration-150",
                    selectedFilter === filter.key &&
                      "border-app-brown text-app-brown"
                  )}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
          {/* End: Project Filter Tabs */}

          <Carousel setApi={setApiZoomCarousel} className="-mx-7">
            <CarouselContent className="p-7 -ml-7">
              {filteredImages.map((img, idx) => (
                <CarouselItem key={img.id} className="h-[357px] basis-1/4">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot navigation using carousel primitives */}
          <div className="flex justify-center gap-2">
            <Carousel>
              <CarouselContent>
                {[...Array(dotCount)].map((_, idx) => (
                  <CarouselItem key={idx} className="basis-auto">
                    <button
                      aria-label={`Go to slide ${idx + 1}`}
                      type="button"
                      className={cn(
                        "w-[12px] h-[12px] rounded-none transition-colors duration-200 focus:outline-none",
                        idx === (dotCount === 1 ? 0 : currentIndex)
                          ? "bg-app-brown"
                          : "bg-gray-300 hover:bg-gray-400"
                      )}
                      onClick={() => {
                        if (apiZoomCarousel) {
                          apiZoomCarousel.scrollTo(idx);
                        }
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default OurProjects;
