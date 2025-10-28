import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import ScrollToTop from '@/components/common/scroll-to-top';
import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Banner from '@/components/layout/banner';
import NH_1 from '@/assets/images/banner/non-home-1.jpg';
import ROUTES from '@/config/routes';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  const location = useLocation();
  const isHome = location.pathname === ROUTES.HOME.path;

  return (
    <React.Fragment>
      <Header />
      {!isHome && <Banner title="Instagram" />}
      {/* {!isHome && <Banner title="Instagram" src={NH_1} alt="" />} */}
      <Outlet />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default RootLayout;
