import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/Home/Home.tsx'));
export const AboutUsPage = lazy(() => import('@/pages/AboutUs/AboutUs'));
export const ContactUsPage = lazy(() => import('@/pages/ContactUs/ContactUs'));
export const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'));
export const ServicesPage = lazy(() => import('@/pages/Services/Services'));
export const InstagramPage = lazy(() => import('@/pages/Instagram/Instagram'));

export const Loading = lazy(() => import('@/components/ui/app/loading'));
