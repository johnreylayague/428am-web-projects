import React from 'react';
import clsx from 'clsx';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import { CompanyLogoLink } from '@/components/layout/Header/components/company-logo-link';
import CTAButtonLink from '@/components/common/cta-button-link';
import MobileMenuButton from '@/components/layout/Header/components/mobile-menu-button';
import ROUTES from '@/config/routes';
import HeaderNavigation, {
  type RouteItem,
} from '@/components/layout/Header/components/header-navigation';
import type { ServiceRoute } from '@/components/layout/Header/components/header-menu-trigger';

interface PrimaryHeaderBarProps {
  className?: string;
  logoSrc: string;
  logoAlt: string;
  buttonLink: string;
  buttonText: string;
  routes: RouteItem[];
  onOpen: () => void;
  serviceRoutes: ServiceRoute[];
}

const PrimaryHeaderBar: React.FC<PrimaryHeaderBarProps> = ({
  className,
  logoSrc,
  logoAlt,
  buttonLink,
  buttonText,
  routes,
  onOpen,
  serviceRoutes,
}) => {
  return (
    <Wrapper className={clsx('', className)}>
      <Container className={clsx('flex items-center min-h-24 justify-between')}>
        <CompanyLogoLink to={ROUTES.HOME.path} src={logoSrc} alt={logoAlt} />

        <HeaderNavigation serviceRoutes={serviceRoutes} routes={routes} />

        <CTAButtonLink
          buttonLink={buttonLink}
          buttonText={buttonText}
          className={clsx(
            'rounded-xs text-center hidden mb-0 text-sm font-bold shrink-0 max-w-49 w-full',
            'lg:block'
          )}
        />

        <MobileMenuButton onClick={onOpen} />
      </Container>
    </Wrapper>
  );
};

export default PrimaryHeaderBar;
