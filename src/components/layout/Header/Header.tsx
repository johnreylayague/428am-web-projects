import React from 'react';
// React Router
import { Link } from 'react-router';
// Assets
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';
// Config
import ROUTES from '@/config/routes';
// Shadcn
import clsx from 'clsx';
// Components
import Wrapper from '@/components/layout/Wrapper';
import Container from '@/components/layout/Container';
import CTAButtonLink from '@/components/common/cta-button-link';
import ContactInformation from '@/components/layout/Header/components/contact-information';
import SocialLinks from '@/components/layout/Header/components/social-links';
import { SOCIAL_LINKS } from '@/config/constants';
import NavigationLinks from '@/components/layout/Header/components/navigation-links';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Wrapper className={clsx('bg-theme-navy')}>
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
            {/* Company logo */}
            <Link to={ROUTES.HOME.path}>
              <figure>
                <img
                  className={clsx('max-w-52 w-full')}
                  src={COMPANY_LOGO}
                  alt="leader property maintenance"
                />
              </figure>
            </Link>

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
