import React from 'react';
import MetaTags from '@/components/seo/meta-tags';
import Banner from '@/components/ui/app/banner';
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
import PageContainer from '@/components/layout/page-container';
import { PAINTING_GALLERY } from '@/config/constants';
import {
  PAINTING_VIDEO_1_IMG,
  PAINTING_VIDEO_1_MOV,
  PAINTING_VIDEO_2_IMG,
  PAINTING_VIDEO_2_MOV,
} from '@/assets';
import GridSection from '@/components/layout/grid-section';

interface PaintingPageProps {}

const PaintingPage: React.FC<PaintingPageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Painting - Leader Property Maintenance - Drainage Service"
        description="Painting We provide professional service that handles the application of paint or coatings to surfaces—mainly walls, ceilings, trim, and exteriors of buildings. These services can be for homes (residential) or businesses (commercial), and sometimes even industrial projects.Interior painting (walls, ceilings, trim, doors)Exterior painting (siding, stucco, brick, windows, fences)Surface prep (patching holes, sanding, priming)Drywall repair and caulkingWallpaper removalStaining"
        canonical="https://www.lpmaintenance.ca/painting/"
        ogTitle="Painting - Leader Property Maintenance - Drainage Service"
        ogDescription="Painting We provide professional service that handles the application of paint or coatings to surfaces—mainly walls, ceilings, trim, and exteriors of buildings. These services can be for homes (residential) or businesses (commercial), and sometimes even industrial projects.Interior painting (walls, ceilings, trim, doors)Exterior painting (siding, stucco, brick, windows, fences)Surface prep (patching holes, sanding, priming)Drywall repair and caulkingWallpaper removalStaining"
        ogType="article"
        ogUrl="https://www.lpmaintenance.ca/painting/"
        ogImage="https://www.lpmaintenance.ca/wp-content/uploads/2019/11/cropped-LogoWebNew-1.png"
      />
      <Banner title="Painting" />
      <PageContainer>
        <Gallery gallery={PAINTING_GALLERY} />
        <GridSection>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <ContentTitle className={clsx('text-center', 'lg:text-left')}>
              Painting
            </ContentTitle>

            <Text>
              We provide professional service that handles the{' '}
              <Strong>application of paint or coatings</Strong> to
              surfaces—mainly walls, ceilings, trim, and exteriors of buildings.
              These services can be for{' '}
              <Strong>homes (residential) or businesses (commercial)</Strong>,
              and sometimes even <Strong>industrial projects</Strong>.
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
                <Strong>Surface prep</Strong> (patching holes, sanding, priming)
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

            <h4
              className={clsx(
                'mt-5 text-2xl font-bold text-center',
                'lg:text-left',
                'text-black'
              )}
            >
              Advantages of hiring us
            </h4>

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
                <Strong>Handles hard-to-reach areas</Strong> like high ceilings
                or exteriors
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
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <VideoPlayer
              src={PAINTING_VIDEO_1_MOV}
              poster={PAINTING_VIDEO_1_IMG}
            />
            <VideoPlayer
              src={PAINTING_VIDEO_2_MOV}
              poster={PAINTING_VIDEO_2_IMG}
            />
          </div>
        </GridSection>

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

export default PaintingPage;
