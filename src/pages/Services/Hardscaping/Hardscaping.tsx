import ContentTitle from '@/components/common/content-title';
import Image from '@/components/common/image';
import Text from '@/components/common/text';
import PageContainer from '@/components/layout/page-container';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import clsx from 'clsx';
import React from 'react';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import { HARDSCAPING_GALLERY } from '@/config/constants';
import { OUTDOOR_TILES_BACKGROUND_IMG } from '@/assets';

interface HardscapingPageProps {}

const HardscapingPage: React.FC<HardscapingPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Hardscaping" />
      <PageContainer>
        <Gallery gallery={HARDSCAPING_GALLERY} />
        <div className={clsx('grid grid-cols-12 relative mt-15', 'lg:gap-10')}>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Hardscraping
            </ContentTitle>

            <Text className={clsx('mb-5')}>
              Hardscaping refers to the non-living, solid elements of a
              landscape, such as patios, walkways, driveways, retaining walls,
              and other constructed features. It’s the opposite of softscaping,
              which focuses on the living elements like plants. Hardscaping
              provides structure and permanence to a yard, delineating spaces
              and creating pathways.
            </Text>

            <Text className={clsx('mb-5')}>
              Hardscaping in landscaping is
              <strong>
                the integration of non-living elements in landscaping, such as
                paths, retaining walls and patios.
              </strong>
              It involves the use of hard materials like bricks, concrete,
              gravel, wood and stones to create structures and features that are
              functional and/or aesthetic.
            </Text>

            <ContentTitle className={clsx('text-center mb-2', 'lg:text-left')}>
              Why hiring us?
            </ContentTitle>

            <ul
              role="list"
              className={clsx('list-disc pl-5 text-base', 'text-fog-steel')}
            >
              <li>Time-Saving</li>
              <li>Expertise & Experience</li>
              <li>Safety</li>
              <li>Quality Workmanship</li>
              <li>Right Tools & Materials</li>
              <li>Cost-Effective in the Long Run</li>
              <li>Compliance & Permits</li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image
              src={OUTDOOR_TILES_BACKGROUND_IMG}
              alt="Outdoor tiles hardscaping"
            />
          </div>
        </div>

        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default HardscapingPage;
