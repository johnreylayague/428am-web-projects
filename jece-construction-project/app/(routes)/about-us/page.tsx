import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import PageBanner from "@/components/ui/app/page-banner";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import goal from "@/assets/images/goal.jpg";
import CTALink from "@/components/ui/app/cta-link";
import { Eye, Hammer, HardHat, Trophy } from "lucide-react";
import SectionHeaderSecondary from "@/components/ui/app/section-header-secondary";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/ui/app/section-title";
import Pharagraph from "@/components/ui/app/pharagraph";
import pattern_16 from "@/assets/images/pattern-16.png";
import clientLogo1 from "@/assets/images/1.png";
import clientLogo2 from "@/assets/images/2.png";
import clientLogo3 from "@/assets/images/3.png";
import clientLogo4 from "@/assets/images/4.png";
import choose from "@/assets/images/choose.jpg";

const getClientLogos = [
  { src: clientLogo1, alt: "Client 1" },
  { src: clientLogo2, alt: "Client 2" },
  { src: clientLogo3, alt: "Client 3" },
  { src: clientLogo4, alt: "Client 4" },
];

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        title="About Us"
        breadcrumb="About Us"
      />
      <Wrapper className={cn("pt-24 pb-20 relative ")}>
        <Container>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <figure className="relative size-full">
                <Image
                  src={goal}
                  alt="Our goal"
                  className="object-cover object-center w-full h-full"
                  fill
                  loading="eager"
                />
              </figure>
            </div>
            <div>
              <SectionHeaderSecondary
                align="left"
                title="Growth Every Year"
                label="About Us"
              />

              <Pharagraph className="mb-10">
                Manufacturing industry became a key sector of production and
                labor and North American countries during the Industrial
                Revolution, upsetting industry sector ocean to me.
              </Pharagraph>

              <div className="grid grid-cols-2 gap-10 mb-8">
                <div className="flex flex-row items-start space-x-3">
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
                        "text-2xl font-bold mb-4 font-montserrat uppercase",
                        "text-app-dark"
                      )}
                    >
                      100% Result
                    </h4>
                    <Pharagraph>
                      We deliver every project to completion, ensuring absolute
                      client satisfaction.
                    </Pharagraph>
                  </div>
                </div>
                <div className="flex flex-row items-start space-x-3">
                  <span>
                    <HardHat
                      className="text-app-brown"
                      size={36}
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <h4
                      className={cn(
                        "text-2xl font-bold mb-4 font-montserrat uppercase",
                        "text-app-dark"
                      )}
                    >
                      Quality Work
                    </h4>
                    <Pharagraph>
                      Our team is committed to top-quality standards in every
                      task we perform.
                    </Pharagraph>
                  </div>
                </div>
                <div className="flex flex-row items-start space-x-3">
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
                        "text-2xl font-bold mb-4 font-montserrat uppercase",
                        "text-app-dark"
                      )}
                    >
                      Awards
                    </h4>
                    <Pharagraph>
                      We are recognized and certified for our excellence and
                      dedication in the industry.
                    </Pharagraph>
                  </div>
                </div>
                <div className="flex flex-row items-start space-x-3">
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
                        "text-2xl font-bold mb-4 font-montserrat uppercase",
                        "text-app-dark"
                      )}
                    >
                      Certified
                    </h4>
                    <Pharagraph>
                      Our clients trust us to consistently deliver results that
                      stand the test of time.
                    </Pharagraph>
                  </div>
                </div>
              </div>

              <CTALink
                href="/"
                className="max-w-44 w-full border-r-4 border-app-dark"
              >
                About More
              </CTALink>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper className="pt-10 pb-50 bg-gray-100">
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

      <Wrapper className="pt-24 pb-20">
        <Container className="flex items-center flex-col">
          <h3 className="font-bold uppercase text-3xl text-app-dark">
            Our Client's
          </h3>

          <ul
            className={cn(
              `grid mt-10 relative w-full max-w-3/5 ${
                getClientLogos.length === 1 ? "grid-cols-1" : "grid-cols-2"
              }`,
              "*:flex *:justify-center *:items-center *:p-5 *:border-app-light-gray"
            )}
          >
            {getClientLogos.map((item, index) => {
              const cols = getClientLogos.length === 1 ? 1 : 2;
              const rows = Math.ceil(getClientLogos.length / cols);
              const currentRow = Math.floor(index / cols) + 1;

              const borderB =
                currentRow < rows ? "border-b border-app-light-gray" : "";
              const borderR = cols > 1 && index % 2 === 0 ? "border-r" : "";

              return (
                <li
                  key={index}
                  className={`flex justify-center items-center p-5 ${borderB} ${borderR} border-app-light-gray`}
                >
                  <figure className="min-h-28">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="object-contain object-center size-full"
                      loading="eager"
                    />
                  </figure>
                </li>
              );
            })}
          </ul>
        </Container>
      </Wrapper>
    </>
  );
};

export default AboutUsPage;
