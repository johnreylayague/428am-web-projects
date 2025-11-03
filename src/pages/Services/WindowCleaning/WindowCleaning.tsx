import MetaTags from '@/components/seo/meta-tags';
import PageContainer from '@/components/layout/page-container';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import clsx from 'clsx';
import React from 'react';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Image from '@/components/common/image';
import windowCleaningImg from '@/assets/images/background/window-cleaning.png';
import { WINDOW_CLEANING_GALLERY } from '@/config/constants';
import GridSection from '@/components/layout/grid-section';

interface WindowCleaningPageProps {}

const WindowCleaningPage: React.FC<WindowCleaningPageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Window Cleaning - Leader Property Maintenance - Drainage Service"
        description="Window Cleaning We specialize in cleaning the interior and/or exterior surfaces of windows in homes, offices, or commercial buildings. The goal is to remove dirt, dust, water spots, smudges, and other debris to leave the glass looking clear and streak-free.What’s Included in Window Cleaning? Basic Services:Exterior window cleaning (using ladders or water-fed poles)Interior window cleaningScreen cleaningSill and"
        canonical="https://www.lpmaintenance.ca/windowcleaning/"
        ogTitle="Window Cleaning - Leader Property Maintenance - Drainage Service"
        ogDescription="Window Cleaning We specialize in cleaning the interior and/or exterior surfaces of windows in homes, offices, or commercial buildings. The goal is to remove dirt, dust, water spots, smudges, and other debris to leave the glass looking clear and streak-free.What’s Included in Window Cleaning? Basic Services:Exterior window cleaning (using ladders or water-fed poles)Interior window cleaningScreen cleaningSill and"
        ogType="article"
        ogUrl="https://www.lpmaintenance.ca/windowcleaning/"
      />
      <Banner title="Window Cleaning" />
      <PageContainer>
        <Gallery gallery={WINDOW_CLEANING_GALLERY} />
        <GridSection>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Window Cleaning
            </ContentTitle>

            <Text>
              We specialize in
              <Strong>
                cleaning the interior and/or exterior surfaces of windows
              </Strong>
              in homes, offices, or commercial buildings. The goal is to remove
              dirt, dust, water spots, smudges, and other debris to leave the
              glass looking clear and streak-free.
            </Text>

            <ContentTitle
              className={clsx(
                'text-center text-2xl font-semibold mt-5 mb-10',
                'lg:text-left'
              )}
            >
              What's Included in Window Cleaning?
            </ContentTitle>

            <h4
              className={clsx(
                'text-2xl font-bold text-center',
                'lg:text-left',
                'text-black'
              )}
            >
              Basic Services:
            </h4>

            <ul
              role="list"
              className={clsx(
                'list-disc pl-5 text-base',
                '*:[&>p]:inline',
                'text-fog-steel'
              )}
            >
              <li>
                <Strong>Exterior window cleaning</Strong>
                <span> (using ladders or water-fed poles)</span>
              </li>
              <li>
                <Strong>Interior window cleaning</Strong>
              </li>
              <li>
                <Strong>Screen cleaning</Strong>
              </li>
              <li>
                <Strong>Sill and frame wiping</Strong>
              </li>
              <li>
                <Strong>Removal of cobwebs or bugs from window areas</Strong>
              </li>
            </ul>

            <h4
              className={clsx(
                'mt-5 text-2xl font-bold text-center',
                'lg:text-left',
                'text-black'
              )}
            >
              Deep or Specialized Services May Include:
            </h4>

            <ul
              role="list"
              className={clsx(
                'list-disc pl-5 text-base ',
                '*:[&>p]:inline',
                '*:[&>span]:text-fog-steel'
              )}
            >
              <li>
                <Strong>Hard water stain removal</Strong>
              </li>
              <li>
                <Strong>Paint or construction debris removal</Strong>{' '}
                <span>(often after renovations)</span>
              </li>
              <li>
                <Strong>Skylight or high window cleaning</Strong>
              </li>
              <li>
                <Strong>Glass restoration or polishing</Strong>
              </li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image src={windowCleaningImg} alt="Window Cleaning Service" />
          </div>
        </GridSection>
        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default WindowCleaningPage;
