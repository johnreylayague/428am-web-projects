import DEFAULT_SERVICE_IMAGE_SRC from '@/assets/images/background/outdoor-tiles.jpg';
import ROUTES from '@/config/routes';
import SERVICE_1 from '@/assets/images/background/service-1.jpg';
import SERVICE_2 from '@/assets/images/background/service-2.jpg';
import SERVICE_3 from '@/assets/images/background/service-3.jpg';
import SERVICE_4 from '@/assets/images/background/service-4.jpg';
import SERVICE_5 from '@/assets/images/background/service-5.jpg';
import SERVICE_6 from '@/assets/images/background/service-6.jpg';
import SERVICE_7 from '@/assets/images/background/service-7.jpg';
import SERVICE_8 from '@/assets/images/background/service-8.jpg';

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://www.facebook.com/LPmaintenance604',
  INSTAGRAM: 'https://www.instagram.com/lpmaintenance',
};

export const CONTACT = {
  email: 'info@lpmaintenance.ca',
  phone: '6043372045',
  address: 'Vancouver, BC',
};

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.3714840183!2d-123.20630407444166!3d49.25781819008981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sph!4v1761666196868!5m2!1sen!2sph';

export const DEFAULT_IMAGE = DEFAULT_SERVICE_IMAGE_SRC;

export const SERVICES = [
  {
    id: 1,
    name: 'draining',
    label: 'Draining',
    icon: 'sewage',
    link: ROUTES.SERVICES_DRAINAGE.path,
    image: SERVICE_1,
  },
  {
    id: 2,
    name: 'hardscaping',
    label: 'Hardscaping',
    icon: 'excavator',
    link: ROUTES.SERVICES_HARDSCAPING.path,
    image: SERVICE_2,
  },
  {
    id: 3,
    name: 'carpentry',
    label: 'Carpentry',
    icon: 'pencil',
    link: ROUTES.SERVICES_CARPENTRY.path,
    image: SERVICE_3,
  },
  {
    id: 4,
    name: 'pressure_washing',
    label: 'Pressure Washing',
    icon: 'washing',
    link: ROUTES.SERVICES_PRESSURE_WASHING.path,
    image: SERVICE_4,
  },
  {
    id: 5,
    name: 'window_cleaning',
    label: 'Window Cleaning',
    icon: 'window',
    link: ROUTES.SERVICES_WINDOW_CLEANING.path,
    image: SERVICE_5,
  },
  {
    id: 6,
    name: 'gutter_cleaning',
    label: 'Gutter Cleaning',
    icon: 'gutter',
    link: ROUTES.SERVICES_GUTTER_CLEANING.path,
    image: SERVICE_6,
  },
  {
    id: 7,
    name: 'moss_removal',
    label: 'Moss Removal',
    icon: 'material',
    link: ROUTES.SERVICES_MOSS_REMOVAL.path,
    image: SERVICE_7,
  },
  {
    id: 8,
    name: 'painting',
    label: 'Painting',
    icon: 'paint-roller',
    link: ROUTES.SERVICES_PAINTING.path,
    image: SERVICE_8,
  },
];
