import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import SectionHeader from "@/components/ui/app/section-header-secondary";
import Link from "next/link";

interface ServicesPageProps {}

const services = [
  {
    href: "/services/general-contracting",
    img: "https://placehold.co/600x400?text=General+Contracting",
    alt: "General Contracting",
    label: "General Contracting",
  },
  {
    href: "/services/apartment-design",
    img: "https://placehold.co/600x400?text=Apartment+Design",
    alt: "Apartment Design",
    label: "Apartment Design",
  },
  {
    href: "/services/material-management",
    img: "https://placehold.co/600x400?text=Material+Management",
    alt: "Material Management",
    label: "Material Management",
  },
  {
    href: "/services/building-renovation",
    img: "https://placehold.co/600x400?text=Building+Renovation",
    alt: "Building Renovation",
    label: "Building Renovation",
  },
  {
    href: "/services/building-construction",
    img: "https://placehold.co/600x400?text=Building+Construction",
    alt: "Building Construction",
    label: "Building Construction",
  },
  {
    href: "/services/architectural-design",
    img: "https://placehold.co/600x400?text=Architectural+Design",
    alt: "Architectural Design",
    label: "Architectural Design",
  },
];

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Services"
        title="Services"
      />
      <Wrapper className="pt-20 pb-20">
        <Container>
          <SectionHeader label="Services" title="Our Projects" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="relative flex flex-col overflow-hidden min-h-[271px] cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <h3 className="absolute bottom-0 left-0 right-0 bg-black/80 py-4 text-center">
                  <span className="relative font-bold text-lg text-white">
                    {service.label}
                  </span>
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default ServicesPage;
