import React, { useRef } from 'react';
// React Router
import { Link } from 'react-router';
// Assets
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';
// Config
import ROUTES from '@/config/routes';
// Shadcn
import clsx from 'clsx';
// Components
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import CTAButtonLink from '@/components/common/cta-button-link';
import ContactInformation from '@/components/layout/Header/components/contact-information';
import SocialLinks from '@/components/layout/Header/components/social-links';
import { SOCIAL_LINKS } from '@/config/constants';
import NavigationLinks from '@/components/layout/Header/components/navigation-links';
import { useScrollPastElementVisibility } from '@/hooks/useScrollPastElementVisibility';
import { CompanyLogoLink } from '@/components/layout/Header/components/company-logo-link';

export type divRefType = HTMLElement | null;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const divRef = useRef<divRefType>(null);
  const hasScrolledPastDiv = useScrollPastElementVisibility(divRef);

  return (
    <header>
      <Wrapper innerRef={divRef} className={clsx('bg-theme-navy')}>
        <Container>
          <div className={clsx('py-2.5 flex items-center justify-between')}>
            <ContactInformation
              address="Vancouver, BC"
              phoneNumber={{ text: '6043372045', link: 'tel:6043372045' }}
              email={{
                text: 'info@lpmaintenance.ca',
                link: 'mailto:info@lpmaintenance.ca',
              }}
            />

            <SocialLinks
              links={[
                {
                  icon: 'fa-brands fa-facebookF',
                  link: SOCIAL_LINKS.FACEBOOK,
                },
                {
                  icon: 'fa-brands fa-instagram',
                  link: SOCIAL_LINKS.INSTAGRAM,
                },
              ]}
            />
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div className={clsx('flex items-center min-h-24')}>
            <CompanyLogoLink
              to={ROUTES.HOME.path}
              src={COMPANY_LOGO}
              alt="leader property maintenance"
            />

            <NavigationLinks routes={ROUTES_DATA} />

            <CTAButtonLink
              buttonLink={ROUTES.CONTACT_US.path}
              buttonText="Get A Qoute"
              className={clsx('rounded-xs mb-0 text-sm font-bold')}
            />
          </div>
        </Container>
      </Wrapper>

      <Wrapper
        className={clsx(
          hasScrolledPastDiv
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4',
          'fixed top-0 left-0 w-full  min-h-24 z-50 shadow border-b transition-all duration-700 ease-in-out border-theme-border-primary bg-white'
        )}
      >
        <Container>
          <div className={clsx('flex items-center min-h-24')}>
            <CompanyLogoLink
              to={ROUTES.HOME.path}
              src={COMPANY_LOGO}
              alt="leader property maintenance"
            />

            <NavigationLinks routes={ROUTES_DATA} />

            <CTAButtonLink
              buttonLink={ROUTES.CONTACT_US.path}
              buttonText="Get A Qoute"
              className={clsx('rounded-xs mb-0 text-sm font-bold')}
            />
          </div>
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;
