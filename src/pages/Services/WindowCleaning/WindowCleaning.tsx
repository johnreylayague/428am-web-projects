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

interface WindowCleaningPageProps {}

const WindowCleaningPage: React.FC<WindowCleaningPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Window Cleaning" />
      <PageContainer>
        <Gallery gallery={WINDOW_CLEANING_GALLERY} />
        <div className={clsx('grid grid-cols-12 relative mt-15', 'lg:gap-10')}>
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
                '*:[&>span]:text-fog-steel'
              )}
            >
              <li>
                <strong>Exterior window cleaning</strong>
                <span> (using ladders or water-fed poles)</span>
              </li>
              <li>
                <strong>Interior window cleaning</strong>
              </li>
              <li>
                <strong>Screen cleaning</strong>
              </li>
              <li>
                <strong>Sill and frame wiping</strong>
              </li>
              <li>
                <strong>Removal of cobwebs or bugs from window areas</strong>
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
                <strong>Hard water stain removal</strong>
              </li>
              <li>
                <strong>Paint or construction debris removal</strong>{' '}
                <span>(often after renovations)</span>
              </li>
              <li>
                <strong>Skylight or high window cleaning</strong>
              </li>
              <li>
                <strong>Glass restoration or polishing</strong>
              </li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image src={windowCleaningImg} alt="Window Cleaning Service" />
          </div>
        </div>
        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default WindowCleaningPage;
