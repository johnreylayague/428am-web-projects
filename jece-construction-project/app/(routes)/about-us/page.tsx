import React from "react";
import banner_7 from "@/assets/banner/7.jpg";
import PageBanner from "@/components/ui/app/page-banner";

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="About Us"
        title="About Us"
      />
    </>
  );
};

export default AboutUsPage;
