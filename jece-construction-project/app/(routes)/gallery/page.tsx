import PageBanner from "@/components/ui/app/page-banner";
import React from "react";
import banner_7 from "@/assets/banner/7.jpg";

interface GalleryPageProps {}

const GalleryPage: React.FC<GalleryPageProps> = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Gallery"
        title="Gallery"
      />
    </>
  );
};

export default GalleryPage;
