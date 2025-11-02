import React from 'react';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import Banner from '@/components/ui/app/banner';
import clsx from 'clsx';
import Image from '@/components/common/image';
import mossRemovalImg from '@/assets/images/background/moss-removal.png';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Gallery from '@/components/ui/app/gallery';
import PageContainer from '@/components/layout/page-container';
import { MOSS_REMOVAL_GALLERY } from '@/config/constants';

interface MossRemovalPageProps {}

const MossRemovalPage: React.FC<MossRemovalPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Moss Removal" />
      <PageContainer>
        <Gallery gallery={MOSS_REMOVAL_GALLERY} />
        <div className={clsx('grid grid-cols-12 relative mt-15', 'lg:gap-10')}>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Moss Removal
            </ContentTitle>

            <Text>
              We provide amazing window cleaning services for any home or
              building 4 stories or under. Our method to clean windows is by
              using a high quality, carbon fiber water-fed pole. This pole can
              reach heights of up to 40 feet and leaves a streak free mirror
              finish. We not only clean the glass on the windows, but we also
              clean the wooden sills, window frames, and top and bottom flashing
              as well. We provide cleaning services for awnings as well.
            </Text>
            <Text>
              A <Strong>moss removal service</Strong> is a professional cleaning
              service that <Strong>removes moss, algae, and lichen</Strong> from
              your
              <Strong>
                roof, driveway, walkways, or other exterior surfaces.
              </Strong>{' '}
              Moss can make surfaces slippery and cause serious damage over
              time—especially to roofing materials.
            </Text>

            <h4
              className={clsx(
                'mt-15 text-2xl font-bold text-center',
                'lg:text-left',
                'text-black'
              )}
            >
              Advantages of hiring us
            </h4>

            <ul
              role="list"
              className={clsx('list-disc pl-5 text-base', 'text-fog-steel')}
            >
              <li>
                <Strong>Safe roof access</Strong> without damaging shingles
              </li>
              <li>
                Proper <Strong>tools and eco-friendly cleaners</Strong>
              </li>
              <li>
                Know-how to treat moss{' '}
                <Strong>without harming plants or pets</Strong>
              </li>
              <li>
                Help <Strong>prevent it from growing back</Strong>
              </li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image
              src={mossRemovalImg}
              alt="Professional moss removal service cleaning roof and exterior surfaces"
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
      </PageContainer>
    </React.Fragment>
  );
};

export default MossRemovalPage;
