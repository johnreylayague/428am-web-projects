import React, { useRef } from 'react';
// React Router
// import { Link } from 'react-router';
// Assets
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';
// Config
import ROUTES from '@/config/routes';
// Shadcn
import clsx from 'clsx';
// Components
import TopHeaderBar from '@/components/layout/Header/components/top-header-bar';
import { SOCIAL_LINKS } from '@/config/constants';
// NavigationLinks used inside PrimaryHeaderBar
import { useScrollPastElementVisibility } from '@/hooks/useScrollPastElementVisibility';
// CompanyLogoLink used inside PrimaryHeaderBar
// MobileSidebarDrawer is used in PrimaryHeaderBar
import PrimaryHeaderBar from '@/components/layout/Header/components/primary-header-bar';

export type divRefType = HTMLElement | null;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const divRef = useRef<divRefType>(null);
  const hasScrolledPastDiv = useScrollPastElementVisibility(divRef);

  return (
    <header>
      <TopHeaderBar
        address="Vancouver, BC"
        phoneNumber={{ text: '6043372045', link: 'tel:6043372045' }}
        email={{
          text: 'info@lpmaintenance.ca',
          link: 'mailto:info@lpmaintenance.ca',
        }}
        socialLinks={[
          { icon: 'fa-brands fa-facebookF', link: SOCIAL_LINKS.FACEBOOK },
          { icon: 'fa-brands fa-instagram', link: SOCIAL_LINKS.INSTAGRAM },
        ]}
        className={clsx('hidden')}
      /> 

      <PrimaryHeaderBar
        logoSrc={COMPANY_LOGO}
        logoAlt="leader property maintenance"
        buttonLink={ROUTES.CONTACT_US.path}
        buttonText="Get A Qoute"
        routes={ROUTES_DATA}
      />

      <PrimaryHeaderBar
        logoSrc={COMPANY_LOGO}
        logoAlt="leader property maintenance"
        buttonLink={ROUTES.CONTACT_US.path}
        buttonText="Get A Qoute"
        routes={ROUTES_DATA}
        className={clsx(
          hasScrolledPastDiv
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4',
          'fixed top-0 left-0 w-full  min-h-24 z-50 shadow border-b transition-all duration-700 ease-in-out border-theme-border-primary bg-white'
        )}
      />
    </header>
  );
};

export default Header;
