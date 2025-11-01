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
  ServicesLayoutPage,
  InstagramPage,
  DrainagePage,
  ServicesPage,
  HardscapingPage,
  CarpentryPage,
  PressureWashingPage,
  WindowCleaningPage,
  GutterCleaningPage,
  MossRemovalPage,
  PaintingPage,
} from '@/routes/components/lazy-pages';
import ErrorBoundary from '@/pages/Error/ErrorBoundary';
import RootLayout from '@/pages/RootLayout/RootLayout';
import ScrollToTop from '@/hooks/useScrollToTop';
import { useScreenSize } from '@/hooks/useScreenSize';
import ROUTES from '@/config/routes';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  // Initialize screen size tracking
  useScreenSize();

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

              <Route
                path={ROUTES.SERVICES.path}
                element={<ServicesLayoutPage />}
              >
                <Route index element={<ServicesPage />} />
                <Route
                  path={ROUTES.SERVICES_DRAINAGE.path}
                  element={<DrainagePage />}
                />
                <Route
                  path={ROUTES.SERVICES_HARDSCAPING.path}
                  element={<HardscapingPage />}
                />
                <Route
                  path={ROUTES.SERVICES_CARPENTRY.path}
                  element={<CarpentryPage />}
                />
                <Route
                  path={ROUTES.SERVICES_PRESSURE_WASHING.path}
                  element={<PressureWashingPage />}
                />
                <Route
                  path={ROUTES.SERVICES_WINDOW_CLEANING.path}
                  element={<WindowCleaningPage />}
                />
                <Route
                  path={ROUTES.SERVICES_GUTTER_CLEANING.path}
                  element={<GutterCleaningPage />}
                />
                <Route
                  path={ROUTES.SERVICES_MOSS_REMOVAL.path}
                  element={<MossRemovalPage />}
                />
                <Route
                  path={ROUTES.SERVICES_PAINTING.path}
                  element={<PaintingPage />}
                />
              </Route>

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
