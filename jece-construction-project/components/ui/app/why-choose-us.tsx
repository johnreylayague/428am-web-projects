import React from "react";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Eye, Hammer, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/ui/app/section-title";
import Pharagraph from "@/components/ui/app/pharagraph";
import pattern_16 from "@/assets/images/pattern-16.png";
import choose from "@/assets/images/choose.jpg";

interface WhyChooseUsProps {}

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <React.Fragment>
      <Wrapper className="pt-10 pb-50">
        <Container>
          <div className="grid grid-cols-2 gap-10">
            <div className="w-full h-full relative">
              <div
                className={cn(
                  "absolute inset-0",
                  "z-0",
                  "after:absolute",
                  "after:content-['']",
                  "after:left-0",
                  "after:top-[100px]",
                  "after:w-[400px]",
                  "after:h-[460px]",
                  "after:border-[6px]",
                  "after:border-solid",
                  "after:bg-white after:border-[#222]",

                  "before:content-['']",
                  "before:absolute",
                  "before:right-0",
                  "before:top-[220px]",
                  "before:w-[282px]",
                  "before:h-[450px]",
                  "before:bg-(image:--pattern-bg)",
                  "before:bg-no-repeat",
                  "before:bg-contain"
                )}
                style={
                  {
                    "--pattern-bg": `url(${pattern_16.src})`,
                  } as React.CSSProperties
                }
              ></div>
              <figure className="relative pl-[35px] pr-[50px]">
                <Image
                  src={choose}
                  alt="Our goal"
                  className="relative w-full h-full object-cover"
                />
              </figure>

              <div className="relative flex items-center ml-[80px] -mt-[55px] max-w-max w-full gap-[25px] pt-[25px] pb-[25px] pl-[25px] pr-[45px] bg-app-brown">
                <span>
                  <Trophy className="text-black" size={40} strokeWidth={1.5} />
                </span>
                <span className="text-2xl font-medium text-white">
                  201 Awards Winning <br /> Construction Company
                </span>
              </div>
            </div>
            <div>
              <SectionHeader>Why Choose Us</SectionHeader>

              <SectionTitle>
                We Offer Best Services <br />
                And Solutions
              </SectionTitle>

              <Pharagraph>
                We provide full and specific solutions for our every customers.
                Construction Providing international construction services
                company and is a leading builder in diverse market segments. The
                company has earned recognition for undertaking large, complex
                projects, fostering innovation, embracing emerging technologies,
                and making a difference for their clients.
              </Pharagraph>

              <div className="flex flex-col gap-8 my-8">
                <div className="flex items-start gap-4">
                  <span>
                    <Hammer
                      className="text-app-brown"
                      size={36}
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <h4
                      className={cn(
                        "text-2xl font-bold font-montserrat mb-2",
                        "text-app-dark"
                      )}
                    >
                      Civil & Environmental Services
                    </h4>
                    <Pharagraph>
                      Part of experts team to manage commercial, institutional,
                      and industrial projects.
                    </Pharagraph>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span>
                    <Eye
                      className="text-app-brown"
                      size={36}
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <h4
                      className={cn(
                        "text-2xl font-bold font-montserrat mb-2",
                        "text-app-dark"
                      )}
                    >
                      Energy Saving Methods
                    </h4>
                    <Pharagraph>
                      Part of experts team to manage commercial, institutional,
                      and industrial projects.
                    </Pharagraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default WhyChooseUs;
