import React from 'react';
// Components
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import ContactInformation from '@/components/layout/Footer/components/contact-information';
import GetInTouchCard from '@/components/layout/Footer/components/get-in-touch-card';
// Assets
import { ACCREDITED_BUSINESS_LOGO } from '@/assets';
// Clsx
import clsx from 'clsx';
import { SOCIAL_LINKS } from '@/config/constants';
import ROUTES from '@/config/routes';
import Copyright from '@/components/layout/Footer/components/copyright';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Wrapper className={clsx('py-15 lg:py-23', 'bg-theme-dark-navy')}>
        <Container>
          <div className={clsx('grid grid-cols-12 relative gap-y-10 lg:gap-0')}>
            {/* --- Left Column: Get In Touch Section --- */}
            <div className={clsx('col-span-12', 'lg:col-span-4')}>
              <GetInTouchCard
                buttonLink={ROUTES.CONTACT_US.path}
                buttonText="Get In Touch"
                paragraph="Find us on Instagram and Facebook. Get in touch, we guarantee your satisfaction 
                without question, we cannot wait to work with you!"
                facebookLink={SOCIAL_LINKS.FACEBOOK}
                instagramLink={SOCIAL_LINKS.INSTAGRAM}
              />
            </div>

            {/* --- Middle Column: Accredited Business Logo --- */}
            <div className={clsx('col-span-12', 'lg:col-span-4')}>
              <div className={clsx('flex items-center justify-center')}>
                <figure>
                  <img
                    src={ACCREDITED_BUSINESS_LOGO}
                    alt="Accredited Business"
                  />
                </figure>
              </div>
            </div>

            {/* --- Right Column: Contact Information --- */}
            <div className={clsx('col-span-12', 'lg:col-span-4')}>
              <ContactInformation
                title="Get In Touch"
                phoneNumber={{ text: '6043372045', link: 'tel:6043372045' }}
                email={{
                  text: 'info@lpmaintenance.ca',
                  link: 'mailto:info@lpmaintenance.ca',
                }}
                address="Burnaby, BC . Canada"
              />
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* --- Copyright Section --- */}
      <Wrapper className={clsx('bg-theme-navy')}>
        <Container>
          <Copyright
            companyName="Leader Property Maintenance"
            prefixText="Designed"
          />
        </Container>
      </Wrapper>
    </footer>
  );
};

export default Footer;
