import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import Pharagraph from "@/components/common/pharagraph";
import SectionHeader from "@/components/ui/app/section-header";
import SectionTitle from "@/components/common/section-title";
import React from "react";
import ServicesCarousel from "@/components/ui/app/our-services-carousel";
import Mark from "@/components/common/mark";
import { servicesList } from "@/config/services-list";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <React.Fragment>
      <Wrapper className="pt-25 pb-24">
        <Container>
          <SectionHeader>Our Services</SectionHeader>

          <OurServicesDescription
            title="Construction Solutions for Homes, Businesses, and Industries"
            description={
              <>
                At <Mark>JECE Construction Corporation</Mark>, we deliver
                innovative, high-quality construction services for residential
                and industrial projects, creating durable and inspiring spaces.
              </>
            }
          />

          <ServicesCarousel services={servicesList} />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default OurServices;

interface OurServicesDescriptionProps {
  title: string;
  description: React.ReactNode;
}

const OurServicesDescription: React.FC<OurServicesDescriptionProps> = ({
  title,
  description,
}) => (
  <div className="flex gap-10 mb-10 items-center">
    <div className="flex-1">
      <SectionTitle type="h2" className="mb-0">
        {title}
      </SectionTitle>
    </div>
    <div className="flex-1">
      <Pharagraph>{description}</Pharagraph>
    </div>
  </div>
);
