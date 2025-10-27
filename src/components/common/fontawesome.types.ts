import {
  type IconDefinition,
  faEnvelope,
  faCopyright,
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faLocationDot,
  faPhoneVolume,
  faChevronUp,
  faRightLong,
  faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';

// Regular icons
type RegularIconKeys = 'fa-regular fa-envelope' | 'fa-regular fa-copyright';

// Brand icons
type BrandIconKeys =
  | 'fa-brands fa-facebook'
  | 'fa-brands fa-facebookF'
  | 'fa-brands fa-instagram'
  | 'fa-brands fa-square-instagram';

// Solid icons
type SolidIconKeys =
  | 'fa-solid fa-location-dot'
  | 'fa-solid fa-phone-volume'
  | 'fa-solid fa-chevron-up'
  | 'fa-solid fa-right-long'
  | 'fa-solid fa-phone-flip'
  | 'fa-solid fa-magnifying-glass';

type IconMap = Record<IconKeys, IconDefinition>;

export type IconKeys = SolidIconKeys | BrandIconKeys | RegularIconKeys;

export const iconDictionary: IconMap = {
  // Brand icons
  'fa-brands fa-facebook': faFacebook,
  'fa-brands fa-facebookF': faFacebookF,
  'fa-brands fa-instagram': faInstagram,
  'fa-brands fa-square-instagram': faInstagramSquare,
  // Solid icons
  'fa-solid fa-phone-volume': faPhoneVolume,
  'fa-solid fa-magnifying-glass': faSearch,
  'fa-solid fa-location-dot': faLocationDot,
  'fa-solid fa-chevron-up': faChevronUp,
  'fa-solid fa-right-long': faRightLong,
  'fa-solid fa-phone-flip': faPhoneFlip,
  // Regular icons
  'fa-regular fa-envelope': faEnvelope,
  'fa-regular fa-copyright': faCopyright,
};
