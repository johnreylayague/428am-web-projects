import React from "react";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import goal from "@/assets/images/goal.jpg";
import CTALink from "@/components/common/cta-link";
import pattern_7 from "@/assets/images/pattern-7.png";
import { Eye, Hammer, HardHat } from "lucide-react";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/common/section-title";
import Pharagraph from "@/components/common/pharagraph";
import Mark from "@/components/common/mark";

interface OurGoalProps {}

const OurGoal: React.FC<OurGoalProps> = () => {
  return (
    <React.Fragment>
      <Wrapper
        className={cn(
          "pt-24 pb-20 relative bg-gray-100 before:content-[''] before:bg-white before:w-1/4 before:h-full before:absolute before:left-0 before:top-0"
        )}
      >
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-5">
              <div
                style={
                  {
                    "--pattern-bg": `url(${pattern_7.src})`,
                  } as React.CSSProperties
                }
                className={cn(
                  "relative pt-[90px] pr-[65px] -ml-[320px]",
                  "before:content-[''] before:absolute before:right-0 before:bottom-[-80px] before:w-[115px] before:h-[445px] before:bg-no-repeat before:bg-(image:--pattern-bg)"
                )}
              >
                <figure className="w-full relative before:content-[''] before:absolute before:right-[120px] before:top-[-100px] before:w-[1000%] before:bottom-[100px] before:bg-app-dark">
                  <Image src={goal} alt="Our goal" className="relative" />
                </figure>
              </div>
            </div>
            <div className="col-span-7">
              <main className="pl-13">
                <SectionHeader>Welcome to</SectionHeader>

                <SectionTitle>JECE Construction Corporation</SectionTitle>

                <Pharagraph>
                  Looking for a trusted partner for your construction needs?
                  We’re here to build with you.{" "}
                  <Mark>JECE Construction Corporation</Mark> delivers reliable,
                  high-quality work designed to create lasting, meaningful
                  spaces for your community.
                </Pharagraph>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <span>
                      <Hammer
                        className="text-app-brown"
                        size={36}
                        strokeWidth={1.5}
                      />
                    </span>
                    <div>
                      <SectionTitle className={cn("text-2xl my-4")}>
                        Our Mission
                      </SectionTitle>
                      <Pharagraph>
                        To deliver dependable, high-quality construction that
                        creates safe, durable, and inspiring spaces for
                        communities.
                      </Pharagraph>
                    </div>
                  </div>

                  <div>
                    <span>
                      <Eye
                        className="text-app-brown"
                        size={36}
                        strokeWidth={1.5}
                      />
                    </span>
                    <div>
                      <SectionTitle className={cn("text-2xl my-4")}>
                        Our Vision
                      </SectionTitle>
                      <Pharagraph>
                        To be a trusted construction partner recognized for
                        excellence, innovation, and projects that stand the test
                        of time.
                      </Pharagraph>
                    </div>
                  </div>
                </div>

                <CTALink
                  href="/"
                  className="max-w-44 w-full border-r-4 border-app-dark"
                >
                  Read More
                </CTALink>
              </main>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default OurGoal;
