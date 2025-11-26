import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import Image from "next/image";
import ServiceTabs from "@/components/ui/app/service-tabs";
import Link from "next/link";

const serviceCardsData = [
  {
    category: "BUILDING, CONSTRUCTION",
    title: "Mortar Buildings",
    img: "https://placehold.co/370x370?text=Building",
    slug: "mortar-buildings",
  },
  {
    category: "CONSTRUCTION",
    title: "Modern Construction",
    img: "https://placehold.co/370x370?text=Construction",
    slug: "modern-construction",
  },
  {
    category: "ARCHITECTURE, INDUSTRIA",
    title: "Industrial Projects",
    img: "https://placehold.co/370x370?text=Industrial",
    slug: "industrial-projects",
  },
];

interface ServiceDetailsPageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
  const { serviceSlug } = await params;
  console.log(serviceSlug);

  return (
    <React.Fragment>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Services"
        title={serviceSlug}
      />

      <Wrapper className="py-[100px]">
        <Container>
          <ServiceTabs />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {serviceCardsData.map((card, idx) => (
              <Link
                key={idx}
                className="relative"
                href={`/services/${serviceSlug}/${card.slug}`}
              >
                <figure className="relative h-[370px] w-full bg-red-700">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={370}
                    height={370}
                    loading="eager"
                    className="object-center object-cover size-full"
                    style={{ width: "auto", height: "auto" }}
                  />
                </figure>
                <div className="relative py-7 px-7.5 border-l-4 -mt-15 mr-12.5 border-app-brown bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.10)]">
                  <div className="text-app-gray text-sm uppercase">
                    {card.category}
                  </div>
                  <h4 className="text-[20px] mt-2 capitalize font-bold font-montserrat text-app-dark">
                    {card.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default ServiceDetailsPage;
