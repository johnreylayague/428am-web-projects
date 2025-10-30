import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import Gallery from '@/components/ui/app/gallery';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import React from 'react';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import personCuttingImg from '@/assets/images/background/person-cutting.png';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import clsx from 'clsx';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import List from '@/components/common/list';
import Image from '@/components/common/image';
import Banner from '@/components/ui/app/banner';

interface PressureWashingPageProps {}

const PressureWashingPage: React.FC<PressureWashingPageProps> = () => {
  const PRESSURE_WASHING_LIST = [
    'Dirt and mud',
    'Mold and mildew',
    'Algae',
    'Paint or graffiti',
    'Oil stains and grime',
  ];

  const PRESSURE_WASHING_AREAS = [
    'Houses (siding, brick, stucco)',
    'Driveways and sidewalks',
    'Decks, patios, and fences',
    'Roofs and gutters',
    'Commercial buildings, parking lots',
    'Graffiti removal',
    'Fleet vehicles or heavy equipment',
  ];

  const ADVANTAGES_OF_HIRING_US = [
    {
      label: 'Time-saving',
      description: 'They’ve got the equipment and experience to do it quickly.',
    },
    {
      label: 'Better results',
      description:
        'Commercial-grade tools and cleaning agents get a deeper clean.',
    },
    {
      label: 'Safety',
      description:
        'They know how to handle high pressure without damaging surfaces or getting hurt.',
    },
    {
      label: 'Proper disposal',
      description:
        'Some services handle runoff and chemicals responsibly, especially for commercial or eco-sensitive areas.',
    },
  ];

  return (
    <React.Fragment>
      <Banner title="Pressure Washing" />
      <Wrapper className={clsx('pt-15 pb-25')}>
        <Container>
          <main>
            <Gallery />
            <div className={clsx('grid grid-cols-12 relative gap-10 mt-15')}>
              <div className={clsx('col-span-6')}>
                <ContentTitle>Pressue Washing</ContentTitle>
                <Text className={clsx('mt-3')}>
                  Pressure washing (also called <Strong>power washing</Strong> )
                  is the process of using a{' '}
                  <Strong>high-pressure stream of water</Strong> to clean
                  surfaces like buildings, sidewalks, decks, driveways, fences,
                  and vehicles. It’s a super effective way to remove:
                </Text>

                <List
                  items={PRESSURE_WASHING_LIST}
                  className={clsx('columns-1 mt-5')}
                  listItemClassName={clsx('font-bold', 'text-black')}
                />

                <Text>
                  At Leader Property Maintenance, we do a professional cleaning
                  service that uses high-powered pressure washers to clean
                  exterior surfaces. These services are usually offered by
                  cleaning or maintenance companies, and they take care of jobs
                  that are too big, too dirty, or too delicate to do yourself.
                  Useful to clean:
                </Text>

                <List
                  items={PRESSURE_WASHING_AREAS}
                  className={clsx('columns-1 mt-5')}
                  listItemClassName={clsx('font-bold', 'text-black')}
                  labelSeparator="-"
                />
              </div>
              <div className={clsx('col-span-6')}>
                <Image
                  src={personCuttingImg}
                  alt="Person pressure washing exterior surface"
                />
              </div>
            </div>

            <ContentTitle
              className={clsx('mt-15 mb-0 text-2xl font-bold', 'text-black')}
            >
              Advantages of hiring us
            </ContentTitle>

            <List
              items={ADVANTAGES_OF_HIRING_US}
              className={clsx('columns-1  mt-2')}
              labelSeparator=":"
            />

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

export default PressureWashingPage;
