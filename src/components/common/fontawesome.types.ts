import {
  type IconDefinition,
  faEnvelope,
  faCopyright,
  faStar,
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
  faChevronLeft,
  faChevronRight,
  faRightLong,
  faPhoneFlip,
  faStar as solidFaStar,
  faQuoteRight,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

// Regular icons
type RegularIconKeys =
  | 'fa-regular fa-envelope'
  | 'fa-regular fa-copyright'
  | 'fa-regular fa-star';

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
  | 'fa-solid fa-chevron-left'
  | 'fa-solid fa-question'
  | 'fa-solid fa-qoute-right'
  | 'fa-solid fa-chevron-right'
  | 'fa-solid fa-star'
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
  'fa-solid fa-star': solidFaStar,
  'fa-solid fa-chevron-left': faChevronLeft,
  'fa-solid fa-chevron-right': faChevronRight,
  'fa-solid fa-magnifying-glass': faSearch,
  'fa-solid fa-question': faQuestion,
  'fa-solid fa-location-dot': faLocationDot,
  'fa-solid fa-chevron-up': faChevronUp,
  'fa-solid fa-right-long': faRightLong,
  'fa-solid fa-qoute-right': faQuoteRight,
  'fa-solid fa-phone-flip': faPhoneFlip,
  // Regular icons
  'fa-regular fa-envelope': faEnvelope,
  'fa-regular fa-star': faStar,
  'fa-regular fa-copyright': faCopyright,
};

// Fallback icon key to use when an unknown key is provided
export const FALLBACK_ICON: IconKeys = 'fa-solid fa-question';

// Runtime type guard to validate icon keys
export const isValidIconKey: (key: string) => boolean = (
  key: string
): boolean => {
  const isValid = key in iconDictionary;
  return isValid;
};
