import React from 'react';
import Services from '@/pages/Home/components/services';
import CTABanner from '@/pages/Home/components/cta-banner';
import GoogleReviewsWidget from '@/pages/Home/components/google-reviews-widget';
import Gallery from '@/components/ui/app/gallery';
import VideoPlayer from '@/components/common/video-player';
import clsx from 'clsx';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Gallery />

      <Services />

      <CTABanner />

      <VideoPlayer
        videoClassName={clsx('min-h-120')}
        className={clsx('min-h-120')}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
      />

      <GoogleReviewsWidget
        appId=""
        // appId="5d5006e8-cdd1-43de-b0d9-71b10b56f890"
      />
    </React.Fragment>
  );
};

export default HomePage;
