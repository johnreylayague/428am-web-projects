import { lazy } from "react";

export const HomePage = lazy(() => import("@/pages/Home/Home.tsx"));
export const Layout = lazy(() => import("@/pages/Layout/Layout.tsx"));
export const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFound.tsx"));
export const Loading = lazy(() => import("@/components/ui/Loading/Loading"));
