import React, { Suspense } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router";

import {
  HomePage,
  Layout,
  Loading,
  NotFoundPage,
} from "@/routes/components/lazy-pages";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
