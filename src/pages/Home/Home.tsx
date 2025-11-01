import React from 'react';
import Services from '@/pages/Home/components/services';
import CTABanner from '@/pages/Home/components/cta-banner';
import GoogleReviewsWidget from '@/pages/Home/components/google-reviews-widget';
import Gallery from '@/components/ui/app/gallery';
import VideoReels from '@/pages/Home/components/video-reels';
import DISK from '@/assets/images/background/disk.jpg';
import HOME_VIDEO from '@/assets/images/vidoes/vidoe-home.mov';
import HOME_VIDEO_IMAGE from '@/assets/images/background/vidoe_home.png';
import NH_2 from '@/assets/images/banner/non-home-2.png';
import NH_3 from '@/assets/images/banner/non-home-3.png';
import { SERVICES } from '@/config/constants';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Gallery items={[NH_2, NH_3]} imageClassName={'min-h-45 lg:min-h-auto'} />

      <Services
        services={SERVICES}
        headerTitle="Our Services"
        headerSubtitle="What We Do"
        headerLabel="Services"
      />

      <CTABanner
        backgroundImage={DISK}
        backgroundImageAlt="dummmy image"
        headline="Get a professional qoute now!"
        callToActionLabel="Call Us Now"
        phoneNumber="6043372045"
        icon="fa-solid fa-phone-volume"
      />

      <VideoReels
        title="Showreel"
        subtitle="Watch More About Us"
        src={HOME_VIDEO}
        poster={HOME_VIDEO_IMAGE}
      />

      <GoogleReviewsWidget
        appId=""
        scriptSrc=""
        // scriptSrc="https://elfsightcdn.com/platform.js"
        // appId="5d5006e8-cdd1-43de-b0d9-71b10b56f890"
      />
    </React.Fragment>
  );
};

export default HomePage;
