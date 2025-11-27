import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import Wrapper from "@/components/layout/wrapper";
import banner_img from "@/assets/banner/image-3.jpg";
import { cn } from "@/lib/utils";
import CTALink from "@/components/common/cta-link";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className={cn("w-full relative")}
        >
          <CarouselContent className={cn("  ")}>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="relative  min-h-160 flex items-center justify-center"
              >
                <BannerCarouselItem />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              "absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white hover:bg-white/20 hover:text-white border-none shadow-none rounded-full p-2"
            )}
          >
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext
            className={cn(
              "absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white hover:bg-white/20 hover:text-white border-none shadow-none rounded-full p-2"
            )}
          >
            <span className="sr-only">Next</span>asdasd
          </CarouselNext>
        </Carousel>
      </Wrapper>
    </React.Fragment>
  );
};

export default Banner;

interface BannerCarouselItemProps {}

const BannerCarouselItem: React.FC<BannerCarouselItemProps> = () => (
  <React.Fragment>
    <div
      className="bg-cover bg-top size-full absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-80"
      style={{
        backgroundImage: `url(${banner_img.src})`,
      }}
    ></div>
    <div className="relative">
      <div className="text-center">
        <h4 className={cn("mb-5 text-6xl font-bold", "text-white")}>
          A Modern Construction <br /> &amp; Industrial{" "}
          <span className="text-app-brown">Agency</span>
        </h4>
        <p className={cn("pb-9 text-lg font-normal", "text-white")}>
          Build a Better Way Delivering Projects in Ways that Can't be
          Duplicated
        </p>
        <div className="space-x-5">
          <CTALink href="/about-us">View Project</CTALink>
          <CTALink
            href="/about-us"
            className="border-2 border-white bg-transparent"
          >
            <span>Learn More</span>
          </CTALink>
        </div>
      </div>
    </div>
  </React.Fragment>
);
