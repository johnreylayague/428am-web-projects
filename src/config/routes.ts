interface RouteItem {
  path: string;
  // path: string | ((...args: any[]) => string);
  name: string;
  requiresAuth?: boolean;
}

const ROUTES: Record<string, RouteItem> = {
  HOME: { path: '/', name: 'Home' },
  //   PROFILE: {
  //     path: (id: string) => `/profile/${id}`,
  //     name: 'Profile',
  //     requiresAuth: true,
  //   },
  ABOUT_US: { path: '/about-us', name: 'Dashboard' },
  CONTACT_US: { path: '/contact-us', name: 'Contact Us' },
  SERVICES: { path: '/servivces', name: 'Services' },
};

export default ROUTES;
