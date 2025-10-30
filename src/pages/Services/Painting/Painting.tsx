import React from 'react';
import Wrapper from '@/components/layout/wrapper';
import Banner from '@/components/ui/app/banner';
import Container from '@/components/layout/container';
import clsx from 'clsx';
import ContentTitle from '@/components/common/content-title';
import Text from '@/components/common/text';
import Strong from '@/components/common/strong';
import Gallery from '@/components/ui/app/gallery';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';
import ROUTES from '@/config/routes';
import VideoPlayer from '@/components/common/video-player';

interface PaintingPageProps {}

const PaintingPage: React.FC<PaintingPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Painting" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <main>
            <Gallery />
            <div className={clsx('grid grid-cols-12 relative gap-10 mt-15')}>
              <div className={clsx('col-span-6')}>
                <ContentTitle className={clsx('text-4xl font-bold')}>
                  Painting
                </ContentTitle>
                <Text>
                  We provide professional service that handles the{' '}
                  <Strong>application of paint or coatings</Strong> to
                  surfaces—mainly walls, ceilings, trim, and exteriors of
                  buildings. These services can be for{' '}
                  <Strong>
                    homes (residential) or businesses (commercial)
                  </Strong>
                  , and sometimes even <Strong>industrial projects</Strong>.
                </Text>

                <ul
                  role="list"
                  className={clsx(
                    'list-disc pl-5 text-base w-full mt-5',
                    'text-fog-steel'
                  )}
                >
                  <li>
                    <Strong>Interior painting</Strong> (walls, ceilings, trim,
                    doors)
                  </li>
                  <li>
                    <Strong>Exterior painting</Strong> (siding, stucco, brick,
                    windows, fences)
                  </li>
                  <li>
                    <Strong>Surface prep</Strong> (patching holes, sanding,
                    priming)
                  </li>
                  <li>
                    <Strong>Drywall repair</Strong> and caulking
                  </li>
                  <li>
                    <Strong>Wallpaper removal</Strong>
                  </li>
                  <li>
                    <Strong>Staining</Strong> (for decks, wood trim, fences)
                  </li>
                  <li>
                    <Strong>Color consultations</Strong>
                  </li>
                  <li>
                    <Strong>Protective coatings</Strong> (for durability and
                    weatherproofing)
                  </li>
                </ul>

                <ContentTitle
                  className={clsx('text-2xl font-semibold mt-5', 'text-black')}
                >
                  Advantages of hiring us
                </ContentTitle>

                <ul
                  role="list"
                  className={clsx(
                    'list-disc pl-5 text-base w-full',
                    'text-fog-steel'
                  )}
                >
                  <li>
                    <Strong>Better finish</Strong> (no streaks, drips, or patchy
                    areas)
                  </li>
                  <li>
                    <Strong>Saves time and hassle</Strong>
                  </li>
                  <li>
                    <Strong>Handles hard-to-reach areas</Strong> like high
                    ceilings or exteriors
                  </li>
                  <li>
                    <Strong>Preps and protects your space</Strong> (furniture,
                    floors, etc.)
                  </li>
                  <li>
                    Often comes with a{' '}
                    <Strong>warranty or satisfaction guarantee</Strong>
                  </li>
                </ul>
              </div>
              <div className={clsx('col-span-6')}>
                <VideoPlayer
                  videoClassName={clsx('min-h-120')}
                  className={clsx('min-h-120 mt-0')}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
                />
                <VideoPlayer
                  className={clsx('min-h-120')}
                  videoClassName={clsx('min-h-120')}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
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

export default PaintingPage;
