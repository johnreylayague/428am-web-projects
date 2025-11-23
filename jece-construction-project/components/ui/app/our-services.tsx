import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import Pharagraph from "@/components/ui/app/pharagraph";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/ui/app/section-title";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import { cn } from "@/lib/utils";
import CTALink from "@/components/ui/app/cta-link";
import Link from "next/link";
import TitleWithBr from "@/components/common/title-with-br";
import { ArrowRight } from "lucide-react";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
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

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="-mx-4"
          >
            {(() => {
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
              ];
              return (
                <CarouselContent className="p-4">
                  {services.map((service, idx) => (
                    <CarouselItem className="relative basis-1/3" key={idx}>
                      <div
                        className={cn(
                          "h-60 relative px-8 pt-8 pb-10",
                          "bg-white",
                          "border-b-4 border-app-brown",
                          "shadow-[0px_0px_15px_rgba(0,0,0,0.10)]"
                        )}
                      >
                        <h4 className="mb-6">
                          <Link
                            href="/"
                            className={cn(
                              "font-montserrat text-2xl font-bold transition-app-blue",
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
                            "border-r-4 text-sm font-semibold min-h-12 absolute -bottom-6 right-8",
                            "border-r-app-dark"
                          )}
                        >
                          Read More
                        </CTALink>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              );
            })()}
          </Carousel>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default OurServices;
