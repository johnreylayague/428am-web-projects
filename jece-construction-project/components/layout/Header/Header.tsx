import clsx from "clsx";
import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import { Phone, Clock9, MapPinned } from "lucide-react";
import Mark from "@/components/common/mark";
import companyLogo from "@/assets/logo/company-logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HomePageProps {}

const Header: React.FC<HomePageProps> = () => {
  return (
    <header
      className={cn(
        "relative border-t-6 border-t-app-blue",
        "before:absolute before:left-0 before:-top-1.5 before:w-[35%] before:h-[6px]",
        "before:bg-app-brown"
      )}
    >
      <Wrapper>
        <Container>
          <div className="flex items-center justify-between h-28">
            <div>
              <figure className="relative w-36 h-12">
                <Image
                  alt="company-logo"
                  src={companyLogo}
                  width={150}
                  height={50}
                  loading="eager"
                />
              </figure>
            </div>

            <ul
              className={cn(
                "flex items-center justify-between gap-10",
                "*:relative",
                "*:not-last:before:absolute",
                "*:not-last:before:top-0",
                "*:not-last:before:right-0",
                "*:not-last:before:block",
                "*:not-last:before:content-['']",
                "*:not-last:before:h-full",
                "*:not-last:before:border-r-px",
                "*:not-last:before:border-r",
                "*:not-last:before:border-r-black/10"
              )}
            >
              <li className="flex items-center">
                <Phone className="size-11 text-app-brown" />

                <div className="pl-5 pr-10">
                  <h5>Requesting A Call:</h5>
                  <a
                    href="tel:3013571234"
                    className="font-semibold block text-lg"
                  >
                    <Mark>(301) 357 1234</Mark>
                  </a>
                </div>
              </li>

              <li className="flex items-center">
                <Clock9 className="size-11 text-app-brown" />

                <div className="pl-5 pr-10">
                  <h5>Sunday - Friday:</h5>
                  <h6 className="font-semibold block text-lg">9am - 8pm</h6>
                </div>
              </li>

              <li className="flex items-center">
                <MapPinned className="size-11 text-app-brown" />

                <div className="pl-5 pr-10">
                  <h5>1428 Callison Laney Building</h5>
                  <address className="not-italic font-semibold block text-lg">
                    California
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </Wrapper>
      <Wrapper className="border-t border-t-black/10">
        <Container>
          <ul className="flex gap-5 items-center py-3">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/home">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;
