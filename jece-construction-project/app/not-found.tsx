import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import PageBanner from "@/components/ui/app/page-banner";
import CTALink from "@/components/common/cta-link";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";

interface NotFoundPageProps {}

const breadcrumb = [{ title: "404 - Not Found" }];

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <React.Fragment>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb={breadcrumb}
        title="404 page not found"
      />
      <Wrapper className="pt-[80px] pb-[100px]">
        <Container>
          <div className="text-center">
            <h2 className="font-montserrat font-semibold text-[180px]">404</h2>
            <h3 className="text-[50px] font-light">
              Oops! That page can’t be found
            </h3>
            <p className="text-xl font-light mt-[20px] mb-[30px]">
              Sorry, but the page you are looking for does not exist
            </p>
            <CTALink
              href="/"
              className="min-h-[62px] border-r-6 border-app-dark"
            >
              Back To Home Page
            </CTALink>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default NotFoundPage;
