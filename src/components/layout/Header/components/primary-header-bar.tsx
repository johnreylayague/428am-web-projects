import React from 'react';
import clsx from 'clsx';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import { CompanyLogoLink } from '@/components/layout/Header/components/company-logo-link';
import NavigationLinks from '@/components/layout/Header/components/navigation-links';
import MobileSidebarDrawer from '@/components/layout/Header/components/mobile-sidebar-drawer';
import CTAButtonLink from '@/components/common/cta-button-link';
import ROUTES from '@/config/routes';
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';

interface PrimaryHeaderBarProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLink?: string;
  buttonText?: string;
  routes?: typeof ROUTES_DATA;
}

const PrimaryHeaderBar: React.FC<PrimaryHeaderBarProps> = ({
  className,
  logoSrc = COMPANY_LOGO,
  logoAlt = 'leader property maintenance',
  buttonLink = ROUTES.CONTACT_US.path,
  buttonText = 'Get A Qoute',
  routes = ROUTES_DATA,
}) => {
  return (
    <Wrapper className={clsx('overflow-hidden', className)}>
      <Container>
        <div className={clsx('flex items-center min-h-24 justify-between')}>
          <CompanyLogoLink to={ROUTES.HOME.path} src={logoSrc} alt={logoAlt} />

          <NavigationLinks routes={routes} className={clsx('hidden')} />

          <CTAButtonLink
            buttonLink={buttonLink}
            buttonText={buttonText}
            className={clsx('hidden rounded-xs mb-0 text-sm font-bold')}
          />

          <MobileSidebarDrawer />
        </div>
      </Container>
    </Wrapper>
  );
};

export default PrimaryHeaderBar;
