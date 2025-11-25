import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <Wrapper
      className={cn(
        "pt-[130px] pb-[130px] relative min-h-[349px]",
        "before:content-[''] before:absolute before:inset-0 before:bg-(image:--banner-bg) before:bg-top-left before:bg-auto before:bg-no-repeat",
        "after:content-[''] after:absolute after:inset-0 after:bg-black/60"
      )}
      style={
        {
          "--banner-bg": `url(${banner_7.src})`,
        } as React.CSSProperties
      }
    >
      <Container className="z-10 flex justify-center items-center">
        <div className={"flex justify-center items-center flex-col gap-4"}>
          <ul className="flex text-lg relative capitalize text-white *:not-last:after:content-['/'] *:not-last:after:mx-3 ">
            <li>
              <Link
                href={"/"}
                className="text-app-brown text-lg transition-app-color hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>About Us</li>
          </ul>
          <h2 className="font-bold font-montserrat text-4xl uppercase text-white">
            About Us
          </h2>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AboutUsPage;
