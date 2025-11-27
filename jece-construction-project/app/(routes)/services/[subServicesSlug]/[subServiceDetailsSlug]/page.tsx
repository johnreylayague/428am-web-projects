import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import ServiceFeature from "@/components/ui/app/service-feature";
import ProjectSummary from "@/components/ui/app/project-summary";
import ProjectChallenge from "@/components/ui/app/project-challenge";

interface SubServiceDetailsProps {}

const breadcrumb = [
  { title: "Services", link: "/services" },
  {
    title: "General Contracting",
    link: "/services/general-contracting",
  },
  { title: "Reliable Building" },
];

const SubServiceDetails: React.FC<SubServiceDetailsProps> = () => {
  return (
    <React.Fragment>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb={breadcrumb}
        title="Reliable Building"
      />

      <ServiceFeature />

      <ProjectSummary />

      <ProjectChallenge />

      <ProjectSummary />

      <Wrapper className="pb-[100px] bg-app-lightest-gray">
        <Container className="pt-[30px] border-t border-app-silver-gray">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-app-dark text-white text-base px-[30px] py-[12px] rounded-none transition-app-color hover:bg-app-blue cursor-pointer"
            >
              Previous Post
            </button>
            <button
              type="button"
              className="bg-app-dark text-white text-base px-[30px] py-[12px] rounded-none transition-app-color hover:bg-app-blue cursor-pointer"
            >
              Next Post
            </button>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default SubServiceDetails;
