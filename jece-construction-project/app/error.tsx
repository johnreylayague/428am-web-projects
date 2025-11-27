"use client";

import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import PageBanner from "@/components/ui/app/page-banner";
import CTALink from "@/components/common/cta-link";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";

const breadcrumb = [{ title: "Error" }];

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <React.Fragment>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb={breadcrumb}
        title="Something went wrong"
      />
      <Wrapper className="pt-[80px] pb-[100px]">
        <Container>
          <div className="text-center">
            <h2 className="font-montserrat font-semibold text-[100px] text-app-red mb-6">Error</h2>
            <h3 className="text-[32px] font-light mb-2">
              We’re sorry, something went wrong.
            </h3>
            <p className="text-xl font-light mt-[20px] mb-[30px] text-app-dark/80">
              {error?.message || "An unexpected error occurred. Please try again later."}
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => reset()}
                className="min-h-[62px] px-6 bg-app-dark text-white rounded-none transition-app-color hover:bg-app-blue cursor-pointer"
              >
                Try Again
              </button>
              <CTALink
                href="/"
                className="min-h-[62px] border-r-6 border-app-dark cursor-pointer"
              >
                Back To Home Page
              </CTALink>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default ErrorPage;
