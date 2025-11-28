import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import SectionHeader from "@/components/ui/app/section-header-secondary";
import Link from "next/link";
import { servicesList } from "@/config/services-list";

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb={[{ title: "Services" }]}
        title="Services"
      />
      <Wrapper className="pt-20 pb-20">
        <Container>
          <SectionHeader label="Services" title="Our Services" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceItem key={service.url} service={service} />
            ))}
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

const ServiceItem: React.FC<{ service: (typeof servicesList)[number] }> = ({
  service,
}) => (
  <Link
    href={`/services/${service.url}`}
    className="relative flex flex-col overflow-hidden min-h-[271px] cursor-pointer"
  >
    <img
      src={service.img}
      alt={service.alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <h3 className="absolute bottom-0 left-0 right-0 bg-black/80 py-4 text-center">
      <span className="relative font-bold text-lg text-white">
        {service.title}
      </span>
    </h3>
  </Link>
);

export default ServicesPage;
