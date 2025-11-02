import Wrapper from '@/components/layout/wrapper';
import Banner from '@/components/ui/app/banner';
import clsx from 'clsx';
import React from 'react';
import Container from '@/components/layout/container';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Image from '@/components/common/image';
import gutterCleaningImg from '@/assets/images/background/gutter-cleaning.png';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import Gallery from '@/components/ui/app/gallery';
import { GUTTER_CLEANING_GALLERY } from '@/config/constants';

interface GutterCleaningPageProps {}

const GutterCleaningPage: React.FC<GutterCleaningPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Gutter Cleaning" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <main>
            <Gallery gallery={GUTTER_CLEANING_GALLERY} />
            <div
              className={clsx('grid grid-cols-12 relative mt-15', 'lg:gap-10')}
            >
              <div className={clsx('col-span-12', 'lg:col-span-6')}>
                <ContentTitle className={clsx('text-center', 'lg:text-left')}>
                  Gutter Cleaning
                </ContentTitle>
                <Text>
                  We do a professional service that removes debris—like leaves,
                  twigs, dirt, and sometimes even nests—from your{' '}
                  <Strong>gutters and down spouts.</Strong> Gutters are the
                  narrow channels attached to the edge of your roof that collect
                  and direct rainwater away from your home’s foundation,
                  preventing water damage.
                </Text>

                <ContentTitle
                  className={clsx('text-2xl mt-5 text-center', 'lg:text-left')}
                >
                  Our process includes:
                </ContentTitle>

                <ul
                  role="list"
                  className={clsx(
                    'mt-5 list-disc pl-5 text-base',
                    '*:[&>strong]:font-bold',
                    '*:[&>span]:text-fog-steel'
                  )}
                >
                  <li>
                    <Strong>Removing debris</Strong>
                    <span> from gutters and down spouts.</span>
                  </li>
                  <li>
                    <Strong>Flushing the system</Strong>
                    <span> with water to check for clogs or proper flow.</span>
                  </li>
                  <li>
                    <Strong>Checking for leaks, sagging, or damage</Strong>
                    <span> to gutters or brackets.</span>
                  </li>
                  <li>
                    <Strong>Disposing</Strong>
                    <span> of the debris properly.</span>
                  </li>
                </ul>

                <ContentTitle
                  className={clsx('text-2xl mt-5 text-center', 'lg:text-left')}
                >
                  Why it matters:
                </ContentTitle>

                <ul
                  role="list"
                  className={clsx(
                    'mt-5 list-disc pl-5 text-base',
                    '*:[&>strong]:font-bold',
                    '*:[&>span]:text-fog-steel'
                  )}
                >
                  <li>
                    <Strong>Prevents water damage</Strong>
                    <span> to your home’s roof, walls, and foundation.</span>
                  </li>
                  <li>
                    <Strong>Reduces risk of mold, pests, and wood rot</Strong>
                    <span>.</span>
                  </li>
                </ul>

                <ContentTitle
                  className={clsx('text-2xl mt-5 text-center', 'lg:text-left')}
                >
                  Advantages of hiring us
                </ContentTitle>

                <ul
                  role="list"
                  className={clsx(
                    'mt-5 list-disc pl-5 text-base',
                    '*:text-fog-steel'
                  )}
                >
                  <li>Safety First</li>
                  <li>Proper Tools &amp; Techniques</li>
                  <li>Thorough Inspection</li>
                  <li>Time &amp; Convenience</li>
                  <li>Preventative Maintenance</li>
                  <li>Peace of Mind</li>
                </ul>
              </div>
              <div className={clsx('col-span-12', 'lg:col-span-6')}>
                <Image
                  src={gutterCleaningImg}
                  alt="Professional gutter cleaning service with ladder and tools"
                />
              </div>
            </div>

            <WhyChooseUs />
          </main>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default GutterCleaningPage;
