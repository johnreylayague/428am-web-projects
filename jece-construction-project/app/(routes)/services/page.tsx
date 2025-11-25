import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Services"
        title="Services"
      />
    </>
  );
};

export default ServicesPage;
