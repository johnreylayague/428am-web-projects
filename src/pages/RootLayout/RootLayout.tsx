import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import ScrollToTop from '@/components/ui/app/scroll-to-top';
import React from 'react';
import { Outlet } from 'react-router';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default RootLayout;
