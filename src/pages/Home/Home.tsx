import React from 'react';
import Services from '@/pages/Home/components/services';
import Banner from '@/pages/Home/components/banner';
import CTABanner from '@/pages/Home/components/cta-banner';
import Testimonials from '@/pages/Home/components/testimonials';
import VideoReels from '@/pages/Home/components/video-reels';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Banner />
      <Services />
      <CTABanner />
      <Testimonials />
      <VideoReels />
    </React.Fragment>
  );
};

export default HomePage;
