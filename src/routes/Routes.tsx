import React, { Suspense } from 'react';
// Router Package
import { BrowserRouter, Routes as Router, Route } from 'react-router';
// App
import {
  HomePage,
  Loading,
  AboutUsPage,
  ContactUsPage,
  NotFoundPage,
  ServicesPage,
  InstagramPage,
} from '@/routes/components/lazy-pages';
import ErrorBoundary from '@/pages/Error/ErrorBoundary';
import RootLayout from '@/pages/RootLayout/RootLayout';
import ScrollToTop from '@/hooks/useScrollToTop';
import ROUTES from '@/config/routes';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Router>
            <Route path="/" element={<RootLayout />}>
              {/* Public */}

              <Route index element={<HomePage />} />
              <Route path={ROUTES.ABOUT_US.path} element={<AboutUsPage />} />
              <Route
                path={ROUTES.CONTACT_US.path}
                element={<ContactUsPage />}
              />
              <Route path={ROUTES.SERVICES.path} element={<ServicesPage />} />
              <Route path={ROUTES.INSTAGRAM.path} element={<InstagramPage />} />

              {/* Private */}

              {/* Not Found Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
