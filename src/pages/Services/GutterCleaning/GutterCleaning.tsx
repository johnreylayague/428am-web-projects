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
import List from '@/components/common/list';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import Gallery from '@/components/ui/app/gallery';
import DRAINAGE_1_IMAGE from '@/assets/images/banner/drainage/drainage-1.png';
import DRAINAGE_2_IMAGE from '@/assets/images/banner/drainage/drainage-2.png';

const WHY_IT_MATTERS_CLEANING_PROCESS_ITEMS = [
  {
    label: 'Prevents water damage',
    description: 'to your home’s roof, walls, and foundation.',
  },
  {
    label: 'Reduces risk of mold, pests, and wood rot.',
    description: '',
  },
];

const GUTTER_CLEANING_PROCESS_ITEMS = [
  {
    label: 'Removing debris',
    description: 'from gutters and down spouts.',
  },
  {
    label: 'Flushing the system',
    description: 'with water to check for clogs or proper flow.',
  },
  {
    label: 'Checking for leaks, sagging, or damage',
    description: 'to gutters or brackets.',
  },
  {
    label: 'Disposing',
    description: 'of the debris properly.',
  },
];

const GUTTER_CLEANING_ADVANTAGES = [
  'Safety First',
  'Proper Tools & Techniques',
  'Thorough Inspection',
  'Time & Convenience',
  'Preventative Maintenance',
  'Peace of Mind',
];

interface GutterCleaningPageProps {}

const GutterCleaningPage: React.FC<GutterCleaningPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Drainage" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <main>
            <Gallery
              gallery={[
                { id: 1, alt: 'image alt', image: DRAINAGE_1_IMAGE },
                { id: 2, alt: 'image alt', image: DRAINAGE_2_IMAGE },
              ]}
            />
            <div className={clsx('relative grid grid-cols-12 gap-10 mt-15')}>
              <div className={clsx('col-span-6')}>
                <ContentTitle className={clsx('text-4xl font-bold')}>
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

                <ContentTitle className={clsx('text-2xl font-semibold mt-5')}>
                  Our process includes:
                </ContentTitle>

                <List
                  items={GUTTER_CLEANING_PROCESS_ITEMS}
                  className={clsx('columns-1')}
                />

                <ContentTitle className={clsx('text-2xl font-semibold mt-5')}>
                  Why it matters:
                </ContentTitle>

                <List
                  items={WHY_IT_MATTERS_CLEANING_PROCESS_ITEMS}
                  className={clsx('columns-1')}
                />

                <ContentTitle className={clsx('text-2xl font-semibold mt-5')}>
                  Advantages of hiring us
                </ContentTitle>

                <List
                  items={GUTTER_CLEANING_ADVANTAGES}
                  className={clsx('columns-1')}
                />
              </div>
              <div className={clsx('col-span-6')}>
                <Image
                  src={gutterCleaningImg}
                  alt="Professional gutter cleaning service with ladder and tools"
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

export default GutterCleaningPage;
