const ROUTES = {
  HOME: { path: '/', name: 'Home' },
  //   PROFILE: {
  //     path: (id: string) => `/profile/${id}`,
  //     name: 'Profile',
  //     requiresAuth: true,
  //   },
  ABOUT_US: { path: '/about-us', name: 'About Us' },
  CONTACT_US: { path: '/contact-us', name: 'Contact Us' },
  SERVICES: { path: '/services', name: 'Services' },
  SERVICES_DRAINAGE: {
    path: '/services/drainage',
    name: 'Drainage',
  },
  SERVICES_HARDSCAPING: {
    path: '/services/hardscaping',
    name: 'Hardscaping',
  },
  SERVICES_CARPENTRY: {
    path: '/services/carpentry',
    name: 'Carpentry',
  },
  SERVICES_PRESSURE_WASHING: {
    path: '/services/pressure-washing',
    name: 'Pressure Washing',
  },
  SERVICES_WINDOW_CLEANING: {
    path: '/services/windowcleaning',
    name: 'Window Cleaning',
  },
  SERVICES_GUTTER_CLEANING: {
    path: '/services/guttercleaning',
    name: 'Gutter Cleaning',
  },
  SERVICES_MOSS_REMOVAL: {
    path: '/services/mossremoval',
    name: 'Moss Removal',
  },
  SERVICES_PAINTING: {
    path: '/services/painting',
    name: 'Painting',
  },
  INSTAGRAM: { path: '/instagram', name: 'Instagram' },
};

export default ROUTES;
