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
        {/* <NavigationMenu viewport={false}>
          <NavigationMenuList className="*:first:[&_button]:pl-0">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer font-medium text-base text-app-dark">
                Home
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger hideIcon>About Us</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger hideIcon>Gallery</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger hideIcon>Services</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <ul
          className={"flex gap-4.5 items-center py-3 font-medium text-app-dark"}
        >
          <li>
            <Link
              href="/"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/" && "text-green-600"
              )}
            >
              <span className={"leading-4"}>Home</span>
              <ChevronDown size={13} />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/about" && "text-green-600"
              )}
            >
              <span className={"leading-4"}>About Us</span>
              <ChevronDown size={13} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                "flex justify-between items-end gap-1 cursor-pointer",
                pathname === "/services" && "text-green-600"
              )}
            >
              <span className={"leading-4"}>Services</span>
              <ChevronDown size={13} />
            </Link>
          </li>
        </ul>

        <CTALink
          id="in-get-a-qoute"
          name="btn-get-a-qoute"
          className="w-full max-w-45"
        >
          Get A Quote
        </CTALink>
      </Container>
    </Wrapper>
  );
};

export default NavMenu;
