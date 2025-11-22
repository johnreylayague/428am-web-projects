import React from "react";
import { cn } from "@/lib/utils";
import NavMenu from "@/components/layout/Header/components/nav-menu";
import ContactInfo from "@/components/layout/Header/components/contact-info";
import company_logo from "@/assets/logo/company-logo.png";

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
      <ContactInfo imageAlt="company logo" imageSrc={company_logo} />
      <NavMenu />
    </header>
  );
};

export default Header;
