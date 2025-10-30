import Wrapper from '@/components/layout/wrapper';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import clsx from 'clsx';
import React from 'react';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import Container from '@/components/layout/container';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Image from '@/components/common/image';
import windowCleaningImg from '@/assets/images/background/window-cleaning.png';
import BasicServicesList from '@/pages/Services/WindowCleaning/components/basic-services-list';

const BASIC_WINDOW_CLEANING_SERVICES = [
  [
    'Exterior window cleaning ',
    <span className="font-normal text-gray-500" key="detail">
      (using ladders or water-fed poles)
    </span>,
  ],
  'Interior window cleaning',
  'Screen cleaning',
  'Sill and frame wiping',
  'Removal of cobwebs or bugs from window areas',
];

const SPECIALIZED_WINDOW_CLEANING_SERVICES = [
  'Hard water stain removal ',
  [
    'Paint or construction debris removal ',
    <span className="font-normal text-gray-500" key="detail">
      (often after renovations)
    </span>,
  ],
  'Skylight or high window cleaning',
  'Glass restoration or polishing',
];

interface WindowCleaningPageProps {}

const WindowCleaningPage: React.FC<WindowCleaningPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Drainage" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <main>
            <Gallery />
            <div className={clsx('relative grid grid-cols-12 gap-10 mt-15')}>
              <div className={clsx('col-span-6')}>
                <ContentTitle className={clsx('text-4xl font-bold')}>
                  Window Cleaning
                </ContentTitle>
                <Text>
                  We specialize in{' '}
                  <Strong>
                    {' '}
                    cleaning the interior and/or exterior surfaces of windows
                  </Strong>{' '}
                  in homes, offices, or commercial buildings. The goal is to
                  remove dirt, dust, water spots, smudges, and other debris to
                  leave the glass looking clear and streak-free.
                </Text>

                <ContentTitle className={clsx('text-2xl font-semibold mt-5')}>
                  What's Included in Window Cleaning?
                </ContentTitle>

                <BasicServicesList
                  title="Basic Services"
                  items={BASIC_WINDOW_CLEANING_SERVICES}
                  className={clsx('mt-5')}
                />

                <BasicServicesList
                  title="Deep or Specialized Services May Include"
                  items={SPECIALIZED_WINDOW_CLEANING_SERVICES}
                  className={clsx('mt-5')}
                />
              </div>
              <div className={clsx('col-span-6')}>
                <Image src={windowCleaningImg} alt="Window Cleaning Service" />
              </div>
            </div>
            <WhyChooseUs
              imageSrc={insuredLicensedImg}
              imageAlt="Insured and Licensed"
              title="Why people choose us?"
              items={WHY_PEOPLE_CHOOSE_US}
              ctaText="Get a Quote"
              ctaLink={ROUTES.CONTACT_US.path}
            />
          </main>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default WindowCleaningPage;
