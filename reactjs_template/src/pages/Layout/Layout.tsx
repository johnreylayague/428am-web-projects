import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer/Footer.tsx";
import React from "react";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
