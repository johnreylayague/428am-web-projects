import React from 'react';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import List from '@/components/common/list';
import Strong from '@/components/common/strong';
import clsx from 'clsx';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import personCuttingImg from '@/assets/images/background/person-cutting.png';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import Image from '@/components/common/image';

interface CarpentryPageProps {}

const CARPENTRY_SERVICES = [
  {
    label: 'Framing',
    description:
      'Building the skeletal structure of houses, walls, roofs, etc.',
  },
  {
    label: 'Trim and Molding Installation',
    description: 'Crown molding, baseboards, window and door casings.',
  },
  {
    label: 'Cabinet Making',
    description:
      'Designing and building kitchen cabinets, wardrobes, or built-in shelves.',
  },
  {
    label: 'Decks and Patios',
    description: 'Designing and constructing outdoor wooden structures.',
  },
  {
    label: 'Furniture Repair or Custom Furniture',
    description: 'Fixing or building chairs, tables, shelves, etc.',
  },
  {
    label: 'Doors and Windows',
    description: 'Installation, repair, or replacement.',
  },
  {
    label: 'Wood Flooring Installation',
    description: 'Laying down hardwood floors or repairing them.',
  },
];

const CarpentryPage: React.FC<CarpentryPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Carpentry" />

      <Wrapper className={clsx('pt-15 pb-25')}>
        <Container>
          <main>
            <Gallery />
            <div className={clsx('relative grid grid-cols-12 gap-5 mt-15')}>
              <div className={clsx('col-span-6')}>
                <ContentTitle>Carpentry</ContentTitle>
                <Text>
                  Carpentry service refers to professional work done by a{' '}
                  <Strong>carpenter</Strong>, who is skilled in{' '}
                  <Strong>cutting, shaping, and installing wood</Strong> (and
                  sometimes other materials) for construction or repair
                  projects. These services can range from basic home repairs to
                  complex custom woodworking. Here’s a breakdown of what
                  carpentry services might include:
                </Text>

                <List
                  items={CARPENTRY_SERVICES}
                  className={clsx('columns-1 mt-5')}
                />
              </div>
              <div className={clsx('col-span-6')}>
                <Image
                  src={personCuttingImg}
                  alt="Person cutting wood with saw - carpentry in action"
                />
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

export default CarpentryPage;
