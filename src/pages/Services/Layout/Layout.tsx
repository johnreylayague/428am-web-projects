import React from 'react';
import { Outlet } from 'react-router';

interface LayoutPageProps {}

const LayoutPage: React.FC<LayoutPageProps> = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
