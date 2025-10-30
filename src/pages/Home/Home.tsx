import React from 'react';
import Services from '@/pages/Home/components/services';
import CTABanner from '@/pages/Home/components/cta-banner';
import GoogleReviewsWidget from '@/pages/Home/components/google-reviews-widget';
import Gallery from '@/components/ui/app/gallery';
import VideoReels from '@/pages/Home/components/video-reels';
import DISK from '@/assets/images/background/disk.jpg';
import ROUTES from '@/config/routes';
import SERVICE_1 from '@/assets/images/background/service-1.jpg';
import SERVICE_2 from '@/assets/images/background/service-2.jpg';
import SERVICE_3 from '@/assets/images/background/service-3.jpg';
import SERVICE_4 from '@/assets/images/background/service-4.jpg';
import SERVICE_5 from '@/assets/images/background/service-5.jpg';
import SERVICE_6 from '@/assets/images/background/service-6.jpg';
import SERVICE_7 from '@/assets/images/background/service-7.jpg';
import SERVICE_8 from '@/assets/images/background/service-8.jpg';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const SERVICES = [
    {
      id: 1,
      name: 'draining',
      label: 'Draining',
      icon: 'fa-solid fa-water',
      link: ROUTES.SERVICES_DRAINAGE.path,
      image: SERVICE_1,
    },
    {
      id: 2,
      name: 'hardscaping',
      label: 'Hardscaping',
      icon: 'fa-solid fa-mountain',
      link: ROUTES.SERVICES_HARDSCAPING.path,
      image: SERVICE_2,
    },
    {
      id: 3,
      name: 'carpentry',
      label: 'Carpentry',
      icon: 'fa-solid fa-hammer',
      link: ROUTES.SERVICES_CARPENTRY.path,
      image: SERVICE_3,
    },
    {
      id: 4,
      name: 'pressure_washing',
      label: 'Pressure Washing',
      icon: 'fa-solid fa-spray-can',
      link: ROUTES.SERVICES_PRESSURE_WASHING.path,
      image: SERVICE_4,
    },
    {
      id: 5,
      name: 'window_cleaning',
      label: 'Window Cleaning',
      icon: 'fa-solid fa-window-maximize',
      link: ROUTES.SERVICES_WINDOW_CLEANING.path,
      image: SERVICE_5,
    },
    {
      id: 6,
      name: 'gutter_cleaning',
      label: 'Gutter Cleaning',
      icon: 'fa-solid fa-water-ladder',
      link: ROUTES.SERVICES_GUTTER_CLEANING.path,
      image: SERVICE_6,
    },
    {
      id: 7,
      name: 'moss_removal',
      label: 'Moss Removal',
      icon: 'fa-solid fa-leaf',
      link: ROUTES.SERVICES_MOSS_REMOVAL.path,
      image: SERVICE_7,
    },
    {
      id: 8,
      name: 'painting',
      label: 'Painting',
      icon: 'fa-solid fa-paint-roller',
      link: ROUTES.SERVICES_PAINTING.path,
      image: SERVICE_8,
    },
  ];
  return (
    <React.Fragment>
      <Gallery />

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
        iconClass="fa-solid fa-phone-volume"
      />

      <VideoReels
        title="Showreel"
        subtitle="Watch More About Us"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
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
