import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PageBannerProps {
  bannerImg: string;
  title: string;
  breadcrumb: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  bannerImg,
  title,
  breadcrumb,
}) => {
  return (
    <React.Fragment>
      <Wrapper
        className={cn(
          "pt-[130px] pb-[130px] relative min-h-[349px]",
          "before:content-[''] before:absolute before:inset-0 before:bg-(image:--banner-bg) before:bg-top-left before:bg-cover before:bg-no-repeat",
          "after:content-[''] after:absolute after:inset-0 after:bg-black/60"
        )}
        style={
          {
            "--banner-bg": `url(${bannerImg})`,
          } as React.CSSProperties
        }
      >
        <Container className="z-10 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-4">
            <ul className="flex text-lg relative capitalize text-white *:not-last:after:content-['/'] *:not-last:after:font-light *:not-last:after:text-sm *:not-last:after:mx-3 ">
              <li>
                <Link
                  href="/"
                  className="text-app-brown text-lg transition-app-color hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>{breadcrumb}</li>
            </ul>
            <h2 className="font-bold font-montserrat text-4xl uppercase text-white">
              {title}
            </h2>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default PageBanner;
