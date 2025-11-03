import Text from '@/components/common/text';
import clsx from 'clsx';
import React from 'react';
import ContentTitle from '@/components/common/content-title';
import VideoPlayer from '@/components/common/video-player';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import PageContainer from '@/components/layout/page-container';
import { DRAINAGE_GALLERY } from '@/config/constants';
import {
  DRAINAGE_VIDEO_1_MOV,
  DRAINAGE_VIDEO_1_IMG,
  DRAINAGE_VIDEO_2_MOV,
  DRAINAGE_VIDEO_2_IMG,
} from '@/assets';
import MetaTags from '@/components/seo/meta-tags';
import GridSection from '@/components/layout/grid-section';

interface DrainagePageProps {}

const DrainagePage: React.FC<DrainagePageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Drainage - Leader Property Maintenance - Drainage Service"
        description="Drainage The number one way to maintain your drainage system is to regularly clean it and inspect it. This doesn’t necessarily need to be done every single year, but if you’ve never cleaned or inspected your system, we highly suggest booking one of our trained technicians that have years in the drainage field. The way we"
        keywords="Drainage Vancouver, property maintenance, perimeter drain cleaning, hydro-flushing, drainage inspection, storm main line cleaning, drain tile replacement, drain repair, preventative maintenance, drainage camera inspection"
        canonical="https://www.lpmaintenance.ca/drainage/"
        ogTitle="Drainage - Leader Property Maintenance - Drainage Service"
        ogDescription="Drainage The number one way to maintain your drainage system is to regularly clean it and inspect it. This doesn’t necessarily need to be done every single year, but if you’ve never cleaned or inspected your system, we highly suggest booking one of our trained technicians that have years in the drainage field. The way we"
        ogType="article"
        ogUrl="https://www.lpmaintenance.ca/drainage/"
      />

      <Banner title="Drainage" />
      <PageContainer>
        <Gallery gallery={DRAINAGE_GALLERY} />

        <ContentTitle className={clsx('mt-5 text-center', 'lg:text-left')}>
          Drainage
        </ContentTitle>

        <Text>
          The number one way to maintain your drainage system is to regularly
          clean it and inspect it. This doesn’t necessarily need to be done
          every single year, but if you’ve never cleaned or inspected your
          system, we highly suggest booking one of our trained technicians that
          have years in the drainage field. The way we clean a drainage system
          is by hydro-flushing the perimeter pipes—we use a high-pressure reel
          that gets fed into the pipes and cleans the inside with water
          pressure. We then perform a final camera inspection to make sure we
          properly cleaned all the problem areas. Not only do we clean the pipes
          surrounding the perimeter of the house, we also clean the main line to
          the city storm system, until the end of the property line; this is
          still your responsibility to maintain. In worst cases, the full system
          may need to be replaced—this is especially common in older houses
          where the drain tiles are made of either cement or clay and cannot be
          repaired.
        </Text>

        <ul
          role="list"
          className={clsx('list-disc pl-5 text-base mt-2', 'text-fog-steel')}
        >
          <li>
            We strongly believe in preventative maintenance. You want to make
            sure you have your system checked or cleaned before any of these
            symptoms may occur. A flood could cause irreparable damage and could
            cost thousands of dollars that could be coming out of your own
            pocket.
          </li>
          <li>
            Generally, we suggest having your system cleaned every 2-4 years
            depending on how it is functioning. Preventative maintenance also
            includes small repairs in areas where we believe that there may be
            an issue in the future.
          </li>
        </ul>

        <VideoPlayer
          src={DRAINAGE_VIDEO_1_MOV}
          poster={DRAINAGE_VIDEO_1_IMG}
          className={clsx('mt-15')}
        />

        <GridSection>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <VideoPlayer
              src={DRAINAGE_VIDEO_2_MOV}
              poster={DRAINAGE_VIDEO_2_IMG}
              className={clsx('mt-0')}
            />
          </div>
          <div className={clsx('col-span-12', 'lg:col-start-8 lg:col-span-6')}>
            <ContentTitle className={clsx('mt-2 text-center', 'lg:text-left')}>
              We offer:
            </ContentTitle>

            <ul
              role="list"
              className={clsx(
                'list-disc pl-5 text-base mt-2 mx-auto max-w-max',
                'lg:mx-0 lg:max-w-full',
                'text-fog-steel'
              )}
            >
              <li>Full Drainage Replacement</li>
              <li>Excavation and Waterproofing</li>
              <li>Sump and Catch Basin Installation</li>
              <li>Drain Cleaning</li>
            </ul>
          </div>
        </GridSection>

        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default DrainagePage;
