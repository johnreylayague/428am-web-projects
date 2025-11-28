"use client";

import React, { useCallback, useEffect, useState } from "react";
import Pharagraph from "@/components/common/pharagraph";
import { cn } from "@/lib/utils";
import CTALink from "@/components/common/cta-link";
import Link from "next/link";
import TitleWithBr from "@/components/common/--title-with-br";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";

interface ServiceItemData {
  title: string;
  description: string;
}

interface ServicesCarouselDefaultProps {
  services: ServiceItemData[];
}

const ServicesCarousel: React.FC<ServicesCarouselDefaultProps> = ({
  services,
}) => {
  const [apiZoomCarousel, setApiZoomCarousel] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(apiZoomCarousel);

  return (
    <React.Fragment>
      <Carousel
        className="-mx-4"
        opts={{ slidesToScroll: "auto" }}
        setApi={setApiZoomCarousel}
      >
        <CarouselContent className="ml-0">
          {services.map((service, idx) => (
            <CarouselItem className="relative basis-1/3 pl-0" key={idx}>
              <ServicesItem
                title={service.title}
                description={service.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <ServicesCarouselDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        onDotButtonClick={onDotButtonClick}
      />
    </React.Fragment>
  );
};

export default ServicesCarousel;

const ServicesItem: React.FC<ServiceItemData> = ({ title, description }) => {
  return (
    <div
      className={cn(
        "h-60 relative px-8 pt-8 pb-10 my-7 mx-4",
        "bg-white",
        "border-b-4 border-app-brown",
        "shadow-[0px_0px_15px_rgba(0,0,0,0.10)]"
      )}
    >
      <h4 className="mb-6">
        <Link
          href="/"
          className={cn(
            "font-montserrat text-2xl font-bold flex items-center justify-between transition-app-color hover:text-app-blue",
            "text-app-dark"
          )}
        >
          <TitleWithBr title={title} />
          <span className="ml-2 inline-flex align-middle">
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </h4>
      <Pharagraph>{description}</Pharagraph>
      <CTALink
        href="/"
        className={cn(
          "border-r-4 text-sm font-semibold min-h-12 px-6 -bottom-6 flex ml-auto max-w-max w-full relative",
          "border-r-app-dark"
        )}
      >
        Read More
      </CTALink>
    </div>
  );
};

const ServicesCarouselDots: React.FC<{
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (idx: number) => void;
}> = ({ scrollSnaps, selectedIndex, onDotButtonClick }) => (
  <div className="flex justify-center mt-4 space-x-2">
    {scrollSnaps.map((_, idx) => {
      return (
        <button
          key={idx}
          onClick={() => onDotButtonClick(idx)}
          className={cn(
            "rounded-full size-3.5 border-2 cursor-pointer transition-colors duration-300",
            "bg-white border-neutral-950",
            idx === selectedIndex && "bg-app-brown border-transparent"
          )}
          aria-label={`Go to slide ${idx + 1}`}
          type="button"
        />
      );
    })}
  </div>
);

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useDotButton = (emblaApi: any): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);

    return () => {
      if (emblaApi) {
        emblaApi
          .off("reInit", onInit)
          .off("reInit", onSelect)
          .off("select", onSelect);
      }
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
