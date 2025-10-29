import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import ScrollToTop from '@/components/common/scroll-to-top';
import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Banner from '@/components/layout/banner';
import ROUTES from '@/config/routes';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  const location = useLocation();
  const isHome = location.pathname === ROUTES.HOME.path;

  return (
    <React.Fragment>
      <Header />
      {!isHome && <Banner title="Instagram" />}
      <Outlet />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default RootLayout;
