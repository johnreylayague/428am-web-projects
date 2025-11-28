import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/container";
import React from "react";
import Image from "next/image";
import company_logo from "@/assets/logo/company-logo.png";

// Lucide React icons
import { Phone, Mail, MapPin, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { servicesList } from "@/config/services-list";

interface FooterTopProps {}

const FooterTop: React.FC<FooterTopProps> = () => {
  return (
    <Wrapper className={cn("pt-22.5 pb-10", "bg-app-dark")}>
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
          )}
        >
          <div>
            <figure className={cn("relative w-full max-w-25 pb-4")}>
              <Image alt={"company logo"} src={company_logo} loading="eager" />
            </figure>
            <p className={cn("text-white")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt sed do eiusmod tempor incididunt.
            </p>
            <ul className={cn("mt-6 space-y-4")}>
              <li className={cn("flex items-center", "text-white")}>
                <Phone
                  className={cn("size-5 mr-3", "text-app-brown")}
                  strokeWidth={2}
                />
                +909-5005-404
              </li>
              <li className={cn("flex items-center", "text-white")}>
                <Mail
                  className={cn("size-5 mr-3", "text-app-brown")}
                  strokeWidth={2}
                />
                info@themerange.net
              </li>
              <li className={cn("flex items-center", "text-white")}>
                <MapPin
                  className={cn("size-5 mr-3", "text-app-brown")}
                  strokeWidth={2}
                />
                440 St, Melbourne Road
              </li>
              <li className={cn("flex items-center", "text-white")}>
                <Globe
                  className={cn("size-5 mr-3", "text-app-brown")}
                  strokeWidth={2}
                />
                VIC 6008, Australia
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("text-lg font-semibold text-white mb-5")}>
              Links
            </h4>
            <ul
              className={cn(
                "space-y-3",
                "*:text-white",
                "*:transition-colors",
                "*:hover:text-app-blue"
              )}
            >
              <li>
                <Link href="/" className="flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-app-brown group-hover:text-app-blue transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-app-brown group-hover:text-app-blue transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-app-brown group-hover:text-app-blue transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-app-brown group-hover:text-app-blue transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("text-lg font-semibold text-white mb-5")}>
              Services
            </h4>
            <ul
              className={cn(
                "space-y-3",
                "*:text-white",
                "*:transition-colors",
                "*:hover:text-app-blue"
              )}
            >
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services/${service.url}`}
                    className={cn("flex items-center group")}
                  >
                    <ChevronRight
                      className={cn(
                        "size-4 mr-2 transition-colors",
                        "text-app-brown group-hover:text-app-blue"
                      )}
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>  
          <div>
            <h4 className={cn("text-lg font-semibold text-white mb-5")}>
              Popular Projects
            </h4>
            <div className={cn("grid grid-cols-3 gap-2")}>
              {[...Array(9)].map((_, idx) => (
                <div
                  key={idx}
                  className={cn("aspect-square rounded overflow-hidden")}
                >
                  <Image
                    src={`https://placehold.co/120x120?text=Project${idx + 1}`}
                    alt={`Popular Project ${idx + 1}`}
                    width={120}
                    height={120}
                    className={cn("object-cover w-full h-full")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default FooterTop;
