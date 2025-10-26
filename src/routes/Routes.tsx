import React, { Suspense } from 'react';
// Router Package
import { BrowserRouter, Routes as Router, Route } from 'react-router';
// App
import { HomePage, Loading } from '@/routes/components/lazy-pages';
import ErrorBoundary from '@/pages/Error/ErrorBoundary';
import RootLayout from '@/pages/RootLayout/RootLayout';
import ScrollToTop from '@/hooks/useScrollToTop';
import AboutUsPage from '@/pages/AboutUs/AboutUs';
import ContactUsPage from '@/pages/ContactUs/ContactUs';
import ServicesPage from '@/pages/Services/Services';
import NotFoundPage from '@/pages/NotFound/NotFound';

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
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="contact-us" element={<ContactUsPage />} />
              <Route path="servivces" element={<ServicesPage />} />

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
