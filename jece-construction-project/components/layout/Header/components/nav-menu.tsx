"use client";

import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import Link from "next/link";
import CTALink from "@/components/ui/app/cta-link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcn/navigation-menu";
import { usePathname } from "next/navigation";

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = () => {
  const pathname = usePathname();

  return (
    <Wrapper className={"border-b border-b-black/10"}>
      <Container className="flex items-center justify-between min-h-15">
        <ul
          className={"flex gap-8.5 items-center py-3 font-medium text-app-dark"}
        >
          <li>
            <Link
              href="/"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/" && "text-app-blue"
              )}
            >
              <span className={"leading-4"}>Home</span>
              {/* <ChevronDown size={13} /> */}
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/about-us" && "text-app-blue"
              )}
            >
              <span className={"leading-4"}>About Us</span>
              {/* <ChevronDown size={13} /> */}
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/services" && "text-app-blue"
              )}
            >
              <span className={"leading-4"}>Services</span>
              {/* <ChevronDown size={13} /> */}
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/gallery" && "text-app-blue"
              )}
            >
              <span className={"leading-4"}>Gallery</span>
              {/* <ChevronDown size={13} /> */}
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/contact-us" && "text-app-blue"
              )}
            >
              <span className={"leading-4"}>Contact Us</span>
              {/* <ChevronDown size={13} /> */}
            </Link>
          </li>
        </ul>

        <CTALink
          className={cn("w-full max-w-45 border-r-2 border-white", "")}
          href="/contact-us"
        >
          Get A Quote
        </CTALink>
      </Container>
    </Wrapper>
  );
};

export default NavMenu;
