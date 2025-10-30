import React from 'react';
import { Navigate } from 'react-router';
import ROUTES from '@/config/routes';

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return <Navigate to={ROUTES.SERVICES_DRAINAGE.path} replace />;
};

export default ServicesPage;
