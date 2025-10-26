import React from 'react';
// Components
import FontAwesome from '@/components/ui/app/fontawesome';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import ContactInformation from '@/components/layout/Footer/components/contact-information';
import GetInTouch from '@/components/layout/Footer/components/get-in-touch';
// Utils
import { getCurrentYear as GetCurrentYear } from '@/utils/dateFormatter';
// Assets
import { ACCREDITED_BUSINESS_LOGO } from '@/assets';
// Clsx
import clsx from 'clsx';
import { SOCIAL_LINKS } from '@/config/constants';
import Mark from '@/components/common/mark';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      {/* ================================ 
          MAIN FOOTER SECTION
          ================================ */}
      <Wrapper className={clsx('py-15 lg:py-23', 'bg-theme-dark-navy')}>
        <Container>
          <div className={clsx('grid grid-cols-12 relative gap-y-10 lg:gap-0')}>
            {/* --- Left Column: Get In Touch Section --- */}
            <div className={clsx('col-span-12', 'lg:col-span-4')}>
              <GetInTouch
                buttonLink=""
                buttonText="Get In Touch"
                paragraph="Find us on Instagram and Facebook. Get in touch, we guarantee your satisfaction without question, we cannot wait to work with you!"
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
                phoneNumber="6043372045"
                email="info@lpmaintenance.ca"
                address="Burnaby, BC . Canada"
              />
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* ================================
          FOOTER BOTTOM / COPYRIGHT SECTION
          ================================ */}
      <Wrapper className={clsx('bg-theme-navy')}>
        <Container>
          <div className={clsx('py-4')}>
            {/* --- Copyright Text --- */}
            <p
              className={clsx(
                'font-medium text-center flex flex-col lg:flex-row gap-2',
                'lg:text-start',
                'text-white'
              )}
            >
              <span className={clsx('order-2', 'lg:order-1')}>
                <FontAwesome
                  icon="fa-regular fa-copyright"
                  className={clsx('mr-0', 'lg:mr-2')}
                />
                Designed {<GetCurrentYear />}
              </span>
              <span className={clsx('hidden', 'lg:block lg:order-2')}> - </span>
              <Mark
                className={clsx(
                  'order-1 block',
                  'lg:order-3 lg:inline-block',
                  'text-white'
                )}
              >
                Leader Property Maintenance
              </Mark>
            </p>
          </div>
        </Container>
      </Wrapper>
    </footer>
  );
};

export default Footer;
