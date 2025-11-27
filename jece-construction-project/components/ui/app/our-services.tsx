"use client";

import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import Pharagraph from "@/components/common/pharagraph";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/common/section-title";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { cn } from "@/lib/utils";
import CTALink from "@/components/common/cta-link";
import Link from "next/link";
import TitleWithBr from "@/components/common/title-with-br";
import { ArrowRight } from "lucide-react";

interface OurServicesProps {}

const services = [
  {
    title: "Apartment Design",
    description:
      "We will work with you to make small or large changes so you get the house of your dreams",
  },
  {
    title: "Repair Welding",
    description:
      "We will work with you to make small or large changes so you get the house of your dreams",
  },
  {
    title: "Expert Mechinical",
    description:
      "We will work with you to make small or large changes so you get the house of your dreams",
  },
  {
    title: "Interior Remodeling",
    description:
      "Transform your living and working spaces with our expert interior remodeling services tailored to your needs.",
  },
  {
    title: "Custom Woodworking",
    description:
      "Our team delivers bespoke woodworking solutions to add elegance and utility to any room.",
  },
  {
    title: "Electrical Installations",
    description:
      "We specialize in safe and efficient electrical installations for both new buildings and renovations.",
  },
  {
    title: "Plumbing Services",
    description:
      "From repairs to full-system installations, our reliable plumbing team ensures waterworks operate smoothly.",
  },
];

const OurServices: React.FC<OurServicesProps> = () => {
  const [apiZoomCarousel, setApiZoomCarousel] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  // Calculate number of dots for nav based on services/cards count
  // 1 dot if services are 3 or fewer, otherwise 2 dots
  const dotCount = services.length <= 3 ? 1 : 2;

  return (
    <React.Fragment>
      <Wrapper className="pt-25 pb-24">
        <Container>
          <SectionHeader>Our Services</SectionHeader>

          <div className="flex gap-10 mb-10">
            <div className="w-1/2">
              <SectionTitle type="h2">
                Construction solutions for residential & industries!
              </SectionTitle>
            </div>
            <div className="w-1/2">
              <Pharagraph>
                Construction is a general term meaning the art and science to
                form objects systems organizations.
              </Pharagraph>
            </div>
          </div>

          <Carousel setApi={setApiZoomCarousel} className="-mx-4">
            <CarouselContent className="ml-0">
              {services.map((service, idx) => (
                <CarouselItem className="relative basis-1/3 pl-0" key={idx}>
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
                        <TitleWithBr title={service.title} />
                        <span className="ml-2 inline-flex align-middle">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </Link>
                    </h4>
                    <Pharagraph>{service.description}</Pharagraph>
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Dot navigation using carousel primitives (1 dot for <= 3 cards, 2 dots for > 3 cards) */}
          <div className="flex justify-center mt-6 gap-2">
            <Carousel>
              <CarouselContent>
                {[...Array(dotCount)].map((_, idx) => (
                  <CarouselItem key={idx} className="basis-auto">
                    <button
                      aria-label={`Go to slide ${idx + 1}`}
                      type="button"
                      className={cn(
                        "w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none",
                        idx === (dotCount === 1 ? 0 : currentIndex)
                          ? "bg-app-brown"
                          : "bg-gray-300 hover:bg-gray-400"
                      )}
                      onClick={() => {
                        // If dotCount is 1, always scroll to slide 0
                        // Else, dots navigate to the appropriate groupings of slides. For now, keep simple: first dot to first, second to the next
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

export default OurServices;
