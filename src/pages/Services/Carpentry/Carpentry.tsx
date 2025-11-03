import React from 'react';
import MetaTags from '@/components/seo/meta-tags';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import clsx from 'clsx';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import personCuttingImg from '@/assets/images/background/person-cutting.png';
import Image from '@/components/common/image';
import PageContainer from '@/components/layout/page-container';
import { CARPENTRY_GALLERY } from '@/config/constants';
import GridSection from '@/components/layout/grid-section';

interface CarpentryPageProps {}

const CarpentryPage: React.FC<CarpentryPageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Carpentry - Leader Property Maintenance - Drainage Service"
        description="Carpentry Carpentry service refers to professional work done by a carpenter, who is skilled in cutting, shaping, and installing wood (and sometimes other materials) for construction or repair projects. These services can range from basic home repairs to complex custom woodworking. Here's a breakdown of what carpentry services might include:Framing – Building the skeletal structure of"
        canonical="https://www.lpmaintenance.ca/carpentry/"
        ogTitle="Carpentry - Leader Property Maintenance - Drainage Service"
        ogDescription="Carpentry Carpentry service refers to professional work done by a carpenter, who is skilled in cutting, shaping, and installing wood (and sometimes other materials) for construction or repair projects. These services can range from basic home repairs to complex custom woodworking. Here's a breakdown of what carpentry services might include:Framing – Building the skeletal structure of"
        ogType="article"
        ogUrl="https://www.lpmaintenance.ca/carpentry/"
        ogImage="https://www.lpmaintenance.ca/wp-content/uploads/2019/11/cropped-LogoWebNew-1.png"
      />
      <Banner title="Carpentry" />
      <PageContainer>
        <Gallery gallery={CARPENTRY_GALLERY} />

        <GridSection>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Carpentry
            </ContentTitle>

            <Text className={clsx('mb-5')}>
              Carpentry service refers to professional work done by a{' '}
              <Strong>carpenter</Strong>, who is skilled in{' '}
              <Strong>cutting, shaping, and installing wood</Strong> (and
              sometimes other materials) for construction or repair projects.
              These services can range from basic home repairs to complex custom
              woodworking. Here’s a breakdown of what carpentry services might
              include:
            </Text>

            <ul
              role="list"
              className={clsx(
                'list-disc pl-5 text-base w-full',
                '*:[&>p]:pl-2 *:[&>p]:inline-block *:[&>strong]:inline-block',
                'text-fog-steel'
              )}
            >
              <li>
                <Strong>Framing</Strong>
                <p>
                  – Building the skeletal structure of houses, walls, roofs,
                  etc.
                </p>
              </li>
              <li>
                <Strong>Trim and Molding Installation</Strong>
                <p>– Crown molding, baseboards, window and door casings.</p>
              </li>
              <li>
                <Strong>Cabinet Making</Strong>
                <p>
                  – Designing and building kitchen cabinets, wardrobes, or
                  built-in shelves.
                </p>
              </li>
              <li>
                <Strong>Decks and Patios</Strong>
                <p>– Designing and constructing outdoor wooden structures.</p>
              </li>
              <li>
                <Strong>Furniture Repair or Custom Furniture</Strong>
                <p>– Fixing or building chairs, tables, shelves, etc.</p>
              </li>
              <li>
                <Strong>Doors and Windows</Strong>
                <p>– Installation, repair, or replacement.</p>
              </li>
              <li>
                <Strong>Wood Flooring Installation</Strong>
                <p>– Laying down hardwood floors or repairing them.</p>
              </li>
            </ul>
          </div>

          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Image
              src={personCuttingImg}
              alt="Person cutting wood with saw - carpentry in action"
            />
          </div>
        </GridSection>

        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default CarpentryPage;
