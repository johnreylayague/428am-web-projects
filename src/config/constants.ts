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
import {
  HARDSCAPING_BANNER_1,
  HARDSCAPING_BANNER_2,
  HARDSCAPING_BANNER_3,
  HARDSCAPING_BANNER_4,
  CARPENTRY_BANNER_1_IMG,
  CARPENTRY_BANNER_2_IMG,
  CARPENTRY_BANNER_3_IMG,
  PRESSURE_WASHING_BANNER_1_IMG,
  PRESSURE_WASHING_BANNER_2_IMG,
  PRESSURE_WASHING_BANNER_3_IMG,
  PRESSURE_WASHING_BANNER_4_IMG,
  WINDOW_CLEANING_BANNER_2_IMG,
  WINDOW_CLEANING_BANNER_1_IMG,
  GUTTER_CLEANING_BANNER_1_IMG,
  GUTTER_CLEANING_BANNER_2_IMG,
  GUTTER_CLEANING_BANNER_3_IMG,
  GUTTER_CLEANING_BANNER_4_IMG,
  MOSS_REMOVAL_BANNER_1_IMG,
  MOSS_REMOVAL_BANNER_2_IMG,
  MOSS_REMOVAL_BANNER_3_IMG,
  MOSS_REMOVAL_BANNER_4_IMG,
  MOSS_REMOVAL_BANNER_5_IMG,
  MOSS_REMOVAL_BANNER_6_IMG,
  PAINTING_BANNER_1_IMG,
  PAINTING_BANNER_2_IMG,
  PAINTING_BANNER_3_IMG,
} from '@/assets/index';

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

export const HARDSCAPING_GALLERY = [
  {
    id: 1,
    alt: 'Hardscaping banner 1',
    image: HARDSCAPING_BANNER_1,
  },
  {
    id: 2,
    alt: 'Hardscaping banner 2',
    image: HARDSCAPING_BANNER_2,
  },
  {
    id: 3,
    alt: 'Hardscaping banner 3',
    image: HARDSCAPING_BANNER_3,
  },
  {
    id: 4,
    alt: 'Hardscaping banner 4',
    image: HARDSCAPING_BANNER_4,
  },
];

export const CARPENTRY_GALLERY = [
  {
    id: 1,
    alt: 'Carpentry banner 1',
    image: CARPENTRY_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Carpentry banner 2',
    image: CARPENTRY_BANNER_2_IMG,
  },
  {
    id: 3,
    alt: 'Carpentry banner 3',
    image: CARPENTRY_BANNER_3_IMG,
  },
];

export const PRESSURE_WASHING_GALLERY = [
  {
    id: 1,
    alt: 'Pressure Washing banner 1',
    image: PRESSURE_WASHING_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Pressure Washing banner 2',
    image: PRESSURE_WASHING_BANNER_2_IMG,
  },
  {
    id: 3,
    alt: 'Pressure Washing banner 3',
    image: PRESSURE_WASHING_BANNER_3_IMG,
  },
  {
    id: 4,
    alt: 'Pressure Washing banner 4',
    image: PRESSURE_WASHING_BANNER_4_IMG,
  },
];

export const WINDOW_CLEANING_GALLERY = [
  {
    id: 1,
    alt: 'Window Cleaning banner 1',
    image: WINDOW_CLEANING_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Window Cleaning banner 2',
    image: WINDOW_CLEANING_BANNER_2_IMG,
  },
];

export const GUTTER_CLEANING_GALLERY = [
  {
    id: 1,
    alt: 'Gutter Cleaning banner 1',
    image: GUTTER_CLEANING_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Gutter Cleaning banner 2',
    image: GUTTER_CLEANING_BANNER_2_IMG,
  },
  {
    id: 3,
    alt: 'Gutter Cleaning banner 3',
    image: GUTTER_CLEANING_BANNER_3_IMG,
  },
  {
    id: 4,
    alt: 'Gutter Cleaning banner 4',
    image: GUTTER_CLEANING_BANNER_4_IMG,
  },
];

export const MOSS_REMOVAL_GALLERY = [
  {
    id: 1,
    alt: 'Moss Removal banner 1',
    image: MOSS_REMOVAL_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Moss Removal banner 2',
    image: MOSS_REMOVAL_BANNER_2_IMG,
  },
  {
    id: 3,
    alt: 'Moss Removal banner 3',
    image: MOSS_REMOVAL_BANNER_3_IMG,
  },
  {
    id: 4,
    alt: 'Moss Removal banner 4',
    image: MOSS_REMOVAL_BANNER_4_IMG,
  },
  {
    id: 5,
    alt: 'Moss Removal banner 5',
    image: MOSS_REMOVAL_BANNER_5_IMG,
  },
  {
    id: 6,
    alt: 'Moss Removal banner 6',
    image: MOSS_REMOVAL_BANNER_6_IMG,
  },
];

export const PAINTING_GALLERY = [
  {
    id: 1,
    alt: 'Painting banner 1',
    image: PAINTING_BANNER_1_IMG,
  },
  {
    id: 2,
    alt: 'Painting banner 2',
    image: PAINTING_BANNER_2_IMG,
  },
  {
    id: 3,
    alt: 'Painting banner 3',
    image: PAINTING_BANNER_3_IMG,
  },
];
