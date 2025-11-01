import ContentTitle from '@/components/common/content-title';
import Image from '@/components/common/image';
import Text from '@/components/common/text';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import clsx from 'clsx';
import React from 'react';
import outdoorTiles from '@/assets/images/background/outdoor-tiles.jpg';
import List from '@/components/common/list';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import ROUTES from '@/config/routes';
import whyPeopleChooseUs from '@/assets/json/why-people-choose-us.json';
import DRAINAGE_1_IMAGE from '@/assets/images/banner/drainage/drainage-1.png';
import DRAINAGE_2_IMAGE from '@/assets/images/banner/drainage/drainage-2.png';

interface HardscapingPageProps {}

const whyHireUsItems = [
  'Time-Saving',
  'Expertise & Experience',
  'Safety',
  'Quality Workmanship',
  'Right Tools & Materials',
  'Cost-Effective in the Long Run',
  'Compliance & Permits',
];

const HardscapingPage: React.FC<HardscapingPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Hardscaping" />
      <Wrapper className={clsx('pt-15 pb-15')}>
        <Container>
          <Gallery
            gallery={[
              { id: 1, alt: 'image alt', image: DRAINAGE_1_IMAGE },
              { id: 2, alt: 'image alt', image: DRAINAGE_2_IMAGE },
            ]}
          />
          <div className={clsx('grid grid-cols-12 relative gap-5 my-15')}>
            <div className={clsx('col-span-6')}>
              <ContentTitle>Hardscraping</ContentTitle>
              <Text className={clsx('mb-5')}>
                Hardscaping refers to the non-living, solid elements of a
                landscape, such as patios, walkways, driveways, retaining walls,
                and other constructed features. It’s the opposite of
                softscaping, which focuses on the living elements like plants.
                Hardscaping provides structure and permanence to a yard,
                delineating spaces and creating pathways.
              </Text>
              <Text className={clsx('mb-5')}>
                Hardscaping in landscaping is the integration of non-living
                elements in landscaping, such as paths, retaining walls and
                patios. It involves the use of hard materials like bricks,
                concrete, gravel, wood and stones to create structures and
                features that are functional and/or aesthetic.
              </Text>

              <ContentTitle className={clsx('mb-2')}>
                Why hiring us?
              </ContentTitle>

              <List items={whyHireUsItems} className={clsx('columns-1')} />
            </div>
            <div className={clsx('col-span-6')}>
              <Image
                src={outdoorTiles}
                alt="Outdoor tiles hardscaping example"
              />
            </div>
          </div>

          <WhyChooseUs
            imageSrc={insuredLicensedImg}
            imageAlt="Insured and Licensed"
            title="Why people choose us?"
            items={whyPeopleChooseUs}
            ctaText="Get a Quote"
            ctaLink={ROUTES.CONTACT_US.path}
          />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default HardscapingPage;
