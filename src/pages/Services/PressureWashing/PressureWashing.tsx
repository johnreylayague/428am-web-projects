import React from 'react';
import MetaTags from '@/components/seo/meta-tags';
import PageContainer from '@/components/layout/page-container';
import Gallery from '@/components/ui/app/gallery';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import personCuttingImg from '@/assets/images/background/person-cutting.png';
import clsx from 'clsx';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Image from '@/components/common/image';
import Banner from '@/components/ui/app/banner';
import { PRESSURE_WASHING_GALLERY } from '@/config/constants';
import GridSection from '@/components/layout/grid-section';

interface PressureWashingPageProps {}

const PressureWashingPage: React.FC<PressureWashingPageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Pressure Washing - Leader Property Maintenance - Drainage Service"
        description="Pressure WashingPressure washing (also called power washing) is the process of using a high-pressure stream of water to clean surfaces like buildings, sidewalks, decks, driveways, fences, and vehicles. It’s a super effective way to remove:Dirt and mudMold and mildewAlgaePaint or graffitiOil stains and grimeAt Leader Property Maintenance, we do a professional cleaning service that uses"
        canonical="https://www.lpmaintenance.ca/pressure-washing/"
        ogTitle="Pressure Washing - Leader Property Maintenance - Drainage Service"
        ogDescription="Pressure WashingPressure washing (also called power washing) is the process of using a high-pressure stream of water to clean surfaces like buildings, sidewalks, decks, driveways, fences, and vehicles. It’s a super effective way to remove:Dirt and mudMold and mildewAlgaePaint or graffitiOil stains and grimeAt Leader Property Maintenance, we do a professional cleaning service that uses"
        ogType="article"
        ogUrl="https://www.lpmaintenance.ca/pressure-washing/"
      />
      <Banner title="Pressure Washing" />
      <PageContainer>
        <Gallery gallery={PRESSURE_WASHING_GALLERY} />
        <GridSection>
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
              className={clsx(
                'mt-5 list-disc pl-5 text-base font-bold',
                'text-fog-steel'
              )}
            >
              <li>
                <Strong>Dirt and mud</Strong>
              </li>
              <li>
                <Strong>Mold and mildew</Strong>
              </li>
              <li>
                <Strong>Algae</Strong>
              </li>
              <li>
                <Strong>Paint or graffiti</Strong>
              </li>
              <li>
                <Strong>Oil stains and grime</Strong>
              </li>
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
              className={clsx(
                'mt-5 list-disc pl-5 text-base font-bold',
                'text-fog-steel'
              )}
            >
              <li>
                <Strong>Houses (siding, brick, stucco)</Strong>
              </li>
              <li>
                <Strong>Driveways and sidewalks</Strong>
              </li>
              <li>
                <Strong>Decks, patios, and fences</Strong>
              </li>
              <li>
                <Strong>Roofs and gutters</Strong>
              </li>
              <li>
                <Strong>Commercial buildings, parking lots</Strong>
              </li>
              <li>
                <Strong>Graffiti removal</Strong>
              </li>
              <li>
                <Strong>Fleet vehicles or heavy equipment</Strong>
              </li>
            </ul>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image
              src={personCuttingImg}
              alt="Person pressure washing exterior surface"
            />
          </div>
        </GridSection>

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
            'text-fog-steel'
          )}
        >
          <li>
            <Strong>Time-saving</Strong>
            <p>: They’ve got the equipment and experience to do it quickly.</p>
          </li>
          <li>
            <Strong>Better results</Strong>
            <p>
              : Commercial-grade tools and cleaning agents get a deeper clean.
            </p>
          </li>
          <li>
            <Strong>Safety</Strong>
            <p>
              : They know how to handle high pressure without damaging surfaces
              or getting hurt.
            </p>
          </li>
          <li>
            <Strong>Proper disposal</Strong>
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
