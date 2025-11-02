import PageContainer from '@/components/layout/page-container';
import Gallery from '@/components/ui/app/gallery';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import React from 'react';
import personCuttingImg from '@/assets/images/background/person-cutting.png';
import clsx from 'clsx';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Image from '@/components/common/image';
import Banner from '@/components/ui/app/banner';
import { PRESSURE_WASHING_GALLERY } from '@/config/constants';

interface PressureWashingPageProps {}

const PressureWashingPage: React.FC<PressureWashingPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Pressure Washing" />
      <PageContainer>
        <Gallery gallery={PRESSURE_WASHING_GALLERY} />
        <div className={clsx('grid grid-cols-12 relative gap-10 mt-15')}>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Pressure Washing
            </ContentTitle>

            <Text>
              Pressure washing (also called <Strong>power washing</Strong> ) is
              the process of using a{' '}
              <Strong>high-pressure stream of water</Strong> to clean surfaces
              like buildings, sidewalks, decks, driveways, fences, and vehicles.
              It’s a super effective way to remove:
            </Text>

            <ul
              role="list"
              className={clsx('mt-5 list-disc pl-5 text-base font-bold')}
            >
              <li>Dirt and mud</li>
              <li>Mold and mildew</li>
              <li>Algae</li>
              <li>Paint or graffiti</li>
              <li>Oil stains and grime</li>
            </ul>

            <Text>
              At Leader Property Maintenance, we do a professional cleaning
              service that uses high-powered pressure washers to clean exterior
              surfaces. These services are usually offered by cleaning or
              maintenance companies, and they take care of jobs that are too
              big, too dirty, or too delicate to do yourself. Useful to clean:
            </Text>

            <ul
              role="list"
              className={clsx('mt-5 list-disc pl-5 text-base font-bold')}
            >
              <li>Houses (siding, brick, stucco)</li>
              <li>Driveways and sidewalks</li>
              <li>Decks, patios, and fences</li>
              <li>Roofs and gutters</li>
              <li>Commercial buildings, parking lots</li>
              <li>Graffiti removal</li>
              <li>Fleet vehicles or heavy equipment</li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image
              src={personCuttingImg}
              alt="Person pressure washing exterior surface"
            />
          </div>
        </div>

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
          className={clsx(
            'list-disc pl-5 text-base',
            '*:[&>p]:inline',
            '*:[&>p]:text-fog-steel'
          )}
        >
          <li>
            <strong>Time-saving</strong>
            <p>: They’ve got the equipment and experience to do it quickly.</p>
          </li>
          <li>
            <strong>Better results</strong>
            <p>
              : Commercial-grade tools and cleaning agents get a deeper clean.
            </p>
          </li>
          <li>
            <strong>Safety</strong>
            <p>
              : They know how to handle high pressure without damaging surfaces
              or getting hurt.
            </p>
          </li>
          <li>
            <strong>Proper disposal</strong>
            <p>
              : Some services handle runoff and chemicals responsibly,
              especially for commercial or eco-sensitive areas.
            </p>
          </li>
        </ul>

        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default PressureWashingPage;
