import React from "react";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import goal from "@/assets/images/goal.jpg";
import CTALink from "@/components/ui/app/cta-link";
import pattern_7 from "@/assets/images/pattern-7.png";
import { Eye, Hammer, HardHat } from "lucide-react";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/ui/app/section-title";
import Pharagraph from "@/components/ui/app/pharagraph";

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
                <SectionHeader>What's Our Goal</SectionHeader>

                <SectionTitle>
                  Why we are best in <br />
                  construction co. over the world
                </SectionTitle>

                <Pharagraph>
                  Manufacturing industry became a key sector of production and
                  labor and North American countries during the Industrial
                  Revolution, upsetting industry sector ocean to me.
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
                      <h4
                        className={cn(
                          "text-2xl font-bold my-4 font-montserrat",
                          "text-app-dark"
                        )}
                      >
                        Industrial Mission
                      </h4>
                      <Pharagraph>
                        Our mission is to lead the way in building durable,
                        innovative structures that drive industrial progress and
                        inspire communities.
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
                      <h4
                        className={cn(
                          "text-2xl font-bold my-4 font-montserrat",
                          "text-app-dark"
                        )}
                      >
                        Our Vision
                      </h4>
                      <Pharagraph>
                        Construction is a general term meaning the art and
                        science to form objects systems.
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
