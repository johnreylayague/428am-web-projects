import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";

interface ContactUsPageProps {}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Contact Us"
        title="Contact Us"
      />
    </>
  );
};

export default ContactUsPage;
