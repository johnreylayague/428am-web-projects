import React from "react";
import PageBanner from "@/components/ui/app/page-banner";
import banner_7 from "@/assets/banner/7.jpg";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import Pharagraph from "@/components/common/pharagraph";
import ServiceFeature from "@/components/ui/app/service-feature";

interface ProjectSummaryProps {}

const ProjectSummary: React.FC<ProjectSummaryProps> = () => {
  return (
    <React.Fragment>
      <Wrapper
        type={"section"}
        className="pt-[90px] pb-[90px] bg-app-lightest-gray"
      >
        <Container>
          <SectionTitle type="h2">Project Summery</SectionTitle>
          <Pharagraph className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </Pharagraph>
          <Pharagraph className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </Pharagraph>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default ProjectSummary;
