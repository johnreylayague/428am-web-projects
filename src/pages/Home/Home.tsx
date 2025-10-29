import React from 'react';
import Services from '@/pages/Home/components/services';
import Gallery from '@/pages/Home/components/gallery';
import CTABanner from '@/pages/Home/components/cta-banner';
import Testimonials from '@/pages/Home/components/testimonials';
import VideoReels from '@/pages/Home/components/video-reels';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Gallery />
      <Services />
      <CTABanner />
      <Testimonials />
      <VideoReels />
    </React.Fragment>
  );
};

export default HomePage;
