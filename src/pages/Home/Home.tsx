import React from 'react';
import Services from '@/pages/Home/components/services';
import Gallery from '@/pages/Home/components/gallery';
import CTABanner from '@/pages/Home/components/cta-banner';
import VideoReels from '@/pages/Home/components/video-reels';
import GoogleReviewsWidget from '@/pages/Home/components/google-reviews-widget';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Gallery />
      <Services />
      <CTABanner />
      {/* <Testimonials /> */}
      <VideoReels />
      <GoogleReviewsWidget
        appId=""
        // appId="5d5006e8-cdd1-43de-b0d9-71b10b56f890"
      />
    </React.Fragment>
  );
};

export default HomePage;
