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
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerAds = [
  {
    title: "Building Dreams, One Foundation at a Time",
    description:
      "From innovative design to quality construction, JECE Construction Corporation transforms your vision into reality with precision, care, and excellence.",
  },
  {
    title: "Your Partner in Every Space",
    description:
      "From structural works to interior finishing and landscaping, JECE Construction Corporation provides comprehensive solutions to create spaces that inspire and endure.",
  },
  {
    title: "Comprehensive Solutions for Every Space",
    description:
      "Whether structural elements, interior finishing, electrical, plumbing, HVAC, or landscaping, JECE Construction Corporation offers full-service solutions to create functional, beautiful, and lasting spaces.",
  },
];

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className="group relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className={cn("w-full relative")}
          >
            <CarouselContent>
              {bannerAds.map((ad, index) => (
                <CarouselItem
                  key={index}
                  className="relative min-h-160 flex items-center justify-center"
                >
                  <BannerCarouselItem
                    title={ad.title}
                    description={ad.description}
                    bannerImg={banner_img}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={cn(
                "left-8 cursor-pointer border-2 rounded-sm bg-transparent border-white",
                "hover:bg-app-blue hover:border-app-blue",
                "size-14",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-500 ease-in-out"
              )}
            >
              <ChevronLeft
                className="size-6 text-white transition-all duration-500"
                aria-hidden="true"
              />
            </CarouselPrevious>
            <CarouselNext
              className={cn(
                "right-8 cursor-pointer border-2 rounded-sm bg-transparent border-white",
                "hover:bg-app-blue hover:border-app-blue",
                "size-14",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-500 ease-in-out"
              )}
            >
              <ChevronRight
                className="size-6 text-white transition-all duration-500"
                aria-hidden="true"
              />
            </CarouselNext>
          </Carousel>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Banner;

interface BannerCarouselItemProps {
  title: string;
  description: string;
  bannerImg: { src: string };
}

const BannerCarouselItem: React.FC<BannerCarouselItemProps> = ({
  title,
  description,
  bannerImg,
}) => (
  <React.Fragment>
    <div
      className="bg-cover bg-top size-full absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-80"
      style={{
        backgroundImage: `url(${bannerImg.src})`,
      }}
    ></div>
    <div className="relative max-w-3xl w-full">
      <div className="text-center">
        <h4 className={cn("mb-5 text-6xl font-bold", "text-white")}>{title}</h4>
        <p className={cn("pb-9 text-lg font-normal", "text-white")}>
          {description}
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
