import React from 'react';
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

interface CarpentryPageProps {}

const CarpentryPage: React.FC<CarpentryPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Carpentry" />
      <PageContainer>
        <Gallery gallery={CARPENTRY_GALLERY} />

        <div className={clsx('grid grid-cols-12 relative mt-15', 'lg:gap-10')}>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle>Carpentry</ContentTitle>

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
                '*:[&>p]:text-fog-steel'
              )}
            >
              <li>
                <strong>Framing</strong>
                <p>
                  – Building the skeletal structure of houses, walls, roofs,
                  etc.
                </p>
              </li>
              <li>
                <strong>Trim and Molding Installation</strong>
                <p>– Crown molding, baseboards, window and door casings.</p>
              </li>
              <li>
                <strong>Cabinet Making</strong>
                <p>
                  – Designing and building kitchen cabinets, wardrobes, or
                  built-in shelves.
                </p>
              </li>
              <li>
                <strong>Decks and Patios</strong>
                <p>– Designing and constructing outdoor wooden structures.</p>
              </li>
              <li>
                <strong>Furniture Repair or Custom Furniture</strong>
                <p>– Fixing or building chairs, tables, shelves, etc.</p>
              </li>
              <li>
                <strong>Doors and Windows</strong>
                <p>– Installation, repair, or replacement.</p>
              </li>
              <li>
                <strong>Wood Flooring Installation</strong>
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
        </div>

        <WhyChooseUs />
      </PageContainer>
    </React.Fragment>
  );
};

export default CarpentryPage;
