"use client";

import React, { useState } from "react";
import Pharagraph from "@/components/common/pharagraph";
import { cn } from "@/lib/utils";
import CTALink from "@/components/common/cta-link";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { useDotButton } from "@/hooks/useDotButton";
import CarouselDots from "@/components/ui/app/carousel-dots";
import service_bg from "@/assets/images/service-bg.png";

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

      <CarouselDots
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
        "group",
        "min-h-60 relative px-8 pt-8 pb-10 my-7 mx-4",
        "bg-white",
        "border-b-4 border-app-brown",
        "shadow-[0px_0px_15px_rgba(0,0,0,0.10)]",
        "before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:absolute hover:before:inset-0 hover:before:bg-cover hover:before:bg-(image:--pattern-bg) hover:before:bg-top-left hover:before:bg-no-repeat hover:before:opacity-100"
      )}
      style={
        {
          "--pattern-bg": `url(${service_bg.src})`,
        } as React.CSSProperties
      }
    >
      <h4 className="relative mb-6 min-h-16 flex items-center justify-between gap-15">
        <Link
          href="/"
          className={cn(
            "font-montserrat line-clamp-2 text-2xl font-bold capitalize transition-app-color hover:text-app-blue",
            "text-app-dark"
          )}
        >
          {title}
        </Link>
        <span className="ml-2 inline-flex align-middle">
          <ArrowRight className="w-5 h-5" />
        </span>
      </h4>
      <Pharagraph className="line-clamp-3 relative">{description}</Pharagraph>
      <CTALink
        href="/"
        className={cn(
          "absolute right-8 -bottom-6 border-r-4 text-sm font-semibold min-h-12 px-6",
          "border-r-app-dark",
          "transition-app-color",
          "group-hover:bg-app-blue group-hover:text-white"
        )}
      >
        Read More
      </CTALink>
    </div>
  );
};
