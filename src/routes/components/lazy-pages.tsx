import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/Home/Home.tsx'));
export const AboutUsPage = lazy(() => import('@/pages/AboutUs/AboutUs'));
export const ContactUsPage = lazy(() => import('@/pages/ContactUs/ContactUs'));
export const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));
export const ServicesPage = lazy(
  () => import('@/pages/Services/Index/Services')
);
export const ServicesLayoutPage = lazy(
  () => import('@/pages/Services/Layout/Layout')
);
export const InstagramPage = lazy(() => import('@/pages/Instagram/Instagram'));
export const DrainagePage = lazy(
  () => import('@/pages/Services/Drainage/Drainage')
);
export const HardscapingPage = lazy(
  () => import('@/pages/Services/Hardscaping/Hardscaping')
);
export const CarpentryPage = lazy(
  () => import('@/pages/Services/Carpentry/Carpentry')
);
export const PressureWashingPage = lazy(
  () => import('@/pages/Services/PressureWashing/PressureWashing')
);
export const WindowCleaningPage = lazy(
  () => import('@/pages/Services/WindowCleaning/WindowCleaning')
);
export const GutterCleaningPage = lazy(
  () => import('@/pages/Services/GutterCleaning/GutterCleaning')
);
export const MossRemovalPage = lazy(
  () => import('@/pages/Services/MossRemoval/MossRemoval')
);
export const PaintingPage = lazy(
  () => import('@/pages/Services/Painting/Painting')
);
