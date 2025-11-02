import React, { useRef } from 'react';
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';
import ROUTES from '@/config/routes';
import clsx from 'clsx';
import TopHeaderBar from '@/components/layout/Header/components/top-header-bar';
import { CONTACT, SOCIAL_LINKS } from '@/config/constants';
import { useScrollPastElementVisibility } from '@/hooks/useScrollPastElementVisibility';
import PrimaryHeaderBar from '@/components/layout/Header/components/primary-header-bar';
import type { SocialLinkItem } from '@/components/layout/Header/components/social-link';
import type { ContactInfoItem } from '@/components/layout/Header/components/contact-info';
import MobileSidebarDrawer from '@/components/layout/Header/components/mobile-sidebar-drawer';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { uiActions } from '@/store/ui-slice';

const serviceRoutes = [
  ROUTES.SERVICES_DRAINAGE,
  ROUTES.SERVICES_HARDSCAPING,
  ROUTES.SERVICES_CARPENTRY,
  ROUTES.SERVICES_PRESSURE_WASHING,
  ROUTES.SERVICES_WINDOW_CLEANING,
  ROUTES.SERVICES_GUTTER_CLEANING,
  ROUTES.SERVICES_MOSS_REMOVAL,
  ROUTES.SERVICES_PAINTING,
];

const socialLinks: SocialLinkItem[] = [
  { href: SOCIAL_LINKS.FACEBOOK, icon: 'fa-brands fa-facebookF' },
  { href: SOCIAL_LINKS.INSTAGRAM, icon: 'fa-brands fa-instagram' },
];

const contactInfo: ContactInfoItem[] = [
  {
    icon: 'fa-solid fa-map-location-dot',
    heading: 'Visit Our Location',
    content: CONTACT.address,
  },
  {
    icon: 'fa-regular fa-envelope',
    heading: 'Send Us Mail',
    content: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: 'fa-solid fa-phone-volume',
    heading: 'Phone Number',
    content: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
];

export type divRefType = HTMLElement | null;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const divRef = useRef<divRefType>(null);
  const hasScrolledPastDiv = useScrollPastElementVisibility(divRef);

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.mobileSidebarOpen);

  const handleClose = () => {
    dispatch(uiActions.closeMobileSidebar());
  };

  const handleOpen = () => {
    dispatch(uiActions.openMobileSidebar());
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      dispatch(uiActions.openMobileSidebar());
    } else {
      dispatch(uiActions.closeMobileSidebar());
    }
  };

  return (
    <header>
      <TopHeaderBar
        divRef={divRef}
        address="Vancouver, BC"
        phoneNumber={{ text: '6043372045', link: 'tel:6043372045' }}
        email={{
          text: 'info@lpmaintenance.ca',
          link: 'mailto:info@lpmaintenance.ca',
        }}
        socialLinks={socialLinks}
      />

      <PrimaryHeaderBar
        logoSrc={COMPANY_LOGO}
        logoAlt="leader property maintenance"
        buttonLink={ROUTES.CONTACT_US.path}
        buttonText="Get A Qoute"
        routes={ROUTES_DATA}
        serviceRoutes={serviceRoutes}
        onOpen={handleOpen}
      />

      <PrimaryHeaderBar
        logoSrc={COMPANY_LOGO}
        logoAlt="leader property maintenance"
        buttonLink={ROUTES.CONTACT_US.path}
        buttonText="Get A Qoute"
        onOpen={handleOpen}
        routes={ROUTES_DATA}
        serviceRoutes={serviceRoutes}
        className={clsx(
          hasScrolledPastDiv
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4',
          'fixed top-0 left-0 w-full  min-h-24 z-50 shadow border-b transition-all duration-700 ease-in-out border-theme-border-primary',
          'bg-white'
        )}
      />

      <MobileSidebarDrawer
        isOpen={isOpen}
        onClose={handleClose}
        onOpenChange={handleOpenChange}
        buttonLink={ROUTES.CONTACT_US.path}
        buttonText="Get A Qoute"
        serviceRoutes={serviceRoutes}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />
    </header>
  );
};

export default Header;
